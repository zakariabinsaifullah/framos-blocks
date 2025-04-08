/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { InnerBlocks, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { dispatch, useSelect } from '@wordpress/data';
import { Fragment, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { times } from 'lodash';
/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        tabTitles,
        tabChildCount,
        tabTitleClasses,
        tiTitle,
        tiDescription,
        tiButtonText,
        tiButtonLink,
        tiTitleClasses,
        tiDescClasses,
        tiBtnClasses,
        cardClasses
    } = attributes;

    const tabWrapRef = useRef(null);
    const [activeTabId, setActiveTabId] = useState(false);
    const activeDefaultTabId = (tabTitles.find(item => item.isDefault) || { id: '1' }).id;

    // Initialize default tabs if none exist
    useEffect(() => {
        if (tabTitles.length === 0) {
            setAttributes({
                tabTitles: [
                    {
                        id: '1',
                        title: 'Auto Tracking',
                        icon: ''
                    },
                    {
                        id: '2',
                        title: 'Powerful Analytic',
                        icon: ''
                    },
                    {
                        id: '3',
                        title: 'Live Project Report',
                        icon: ''
                    },
                    {
                        id: '4',
                        title: 'Customization',
                        icon: ''
                    }
                ]
            });

            // Set the first tab as active by default
            setActiveTabId('1');
        }
    }, []);

    // Update tab IDs on inner blocks
    const { innerBlocks } = useSelect(select => select('core/block-editor').getBlocksByClientId(clientId)[0]);
    useEffect(() => {
        const { updateBlockAttributes } = dispatch('core/block-editor');
        times(innerBlocks.length, n => {
            updateBlockAttributes(innerBlocks[n].clientId, {
                tabParentId: clientId,
                tabId: `${n + 1}`
            });
        });
    }, [innerBlocks, clientId]);

    // Set the active tab on initial render if it's not set yet
    useEffect(() => {
        if (!activeTabId && tabTitles.length > 0) {
            const initialTabId = activeDefaultTabId || tabTitles[0].id;
            setActiveTabId(initialTabId);
            handleTabClick(initialTabId);
        }
    }, [tabTitles, activeDefaultTabId]);

    // Handle Tab Click
    const handleTabClick = id => {
        if (!id) return false;

        const tabsParentEl = (tabWrapRef || { current: false }).current;
        if (!tabsParentEl) return false;

        const allTabChildWraps = tabsParentEl.querySelectorAll(`.single-tab`);
        if (allTabChildWraps.length === 0) return false;

        for (const tabWrapDiv of allTabChildWraps) {
            const tabId = tabWrapDiv.dataset.tabId;
            if (tabId === id) {
                tabWrapDiv.style.display = 'grid';
                tabWrapDiv.style.animation = 'fadeIn 0.3s';
            } else {
                tabWrapDiv.style.display = 'none';
            }
        }

        setActiveTabId(`${id}`);
    };

    // Block Props
    const blockProps = useBlockProps();

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} handleTabClick={handleTabClick} clientId={clientId} />
            <div {...blockProps}>
                <div className="tabs" ref={tabWrapRef}>
                    <div className="block">
                        <ul className="flex border-b border-gray-200 space-x-3 transition-all duration-300 -mb-px overflow-x-auto m-0 p-0">
                            {tabTitles &&
                                tabTitles.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={classnames('list-none', {
                                                active: (activeTabId || activeDefaultTabId) === item.id
                                            })}
                                            data-title-tab-id={item.id}
                                            role="button"
                                            onClick={() => {
                                                handleTabClick(item.id);
                                            }}
                                        >
                                            <button
                                                href="javascript:void(0)"
                                                className={classnames(
                                                    'group flex items-center justify-center gap-4 py-8 px-4 text-base font-normal text-gray-500 transition-all duration-500 w-full border-t-0 border-l-0 border-r-0 bg-transparent border-b-2 border-solid border-transparent whitespace-nowrap xl:w-64 lg:w-56 xl:text-xl hover:text-gray-900 hover:border-indigo-600 tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink active',
                                                    {
                                                        [tabTitleClasses.join(' ')]: tabTitleClasses.length > 0 && tabTitleClasses
                                                    }
                                                )}
                                                data-tab="tabs-with-underline-1"
                                                role="tab"
                                            >
                                                {item.icon ? (
                                                    <>
                                                        <img
                                                            src={item.icon}
                                                            alt="tab icon"
                                                            className={classnames('tab-icon max-w-full w-8', {})}
                                                        />
                                                    </>
                                                ) : (
                                                    <MediaUpload
                                                        onSelect={media => {
                                                            const newTabTitles = [...tabTitles];
                                                            newTabTitles[index].icon = media.url;
                                                            setAttributes({
                                                                tabTitles: newTabTitles
                                                            });
                                                            setActiveTabId(item.id);
                                                            handleTabClick(item.id);
                                                        }}
                                                        type="image"
                                                        value={item.icon}
                                                        render={({ open }) => (
                                                            <button
                                                                onClick={open}
                                                                className="size-5 text-indigo-600"
                                                                style={{
                                                                    width: '30px',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    border: 'none',
                                                                    background: 'none',
                                                                    cursor: 'pointer'
                                                                }}
                                                            >
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" color="#000000">
                                                                    <path
                                                                        d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101"
                                                                        stroke="#000000"
                                                                        strokeWidth="1.5"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 21L12 13.5465M9 16L12 13L15 16"
                                                                        stroke="#000000"
                                                                        strokeWidth="1.5"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        )}
                                                    />
                                                )}
                                                <RichText
                                                    tagName="span"
                                                    className="tab-title-text"
                                                    value={item.title}
                                                    onChange={value => {
                                                        const newTabTitles = [...tabTitles];
                                                        newTabTitles[index].title = value;
                                                        setAttributes({
                                                            tabTitles: newTabTitles
                                                        });
                                                    }}
                                                    placeholder={__('Tab Title..', 'framos-blocks')}
                                                />
                                            </button>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div className="tabs-content mt-16">
                        <div className="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-28">
                            <div
                                className={classnames(
                                    'text-center box-border w-full bg-gray-50 rounded-2xl p-8 lg:max-w-none lg:max-w-xs lg:w-1/3',
                                    {
                                        [cardClasses.join(' ')]: cardClasses.length > 0 && cardClasses
                                    }
                                )}
                            >
                                <RichText
                                    tagName="h4"
                                    className={classnames('text-lg text-gray-900 font-medium mb-4 mt-0!', {
                                        [tiTitleClasses.join(' ')]: tiTitleClasses.length > 0 && tiTitleClasses
                                    })}
                                    value={tiTitle}
                                    onChange={value => setAttributes({ tiTitle: value })}
                                    placeholder={__('Title..', 'framos-blocks')}
                                />
                                <RichText
                                    tagName="p"
                                    className={classnames('text-sm text-gray-500 leading-6 mb-11 mt-0!', {
                                        [tiDescClasses.join(' ')]: tiDescClasses.length > 0 && tiDescClasses
                                    })}
                                    value={tiDescription}
                                    onChange={value => setAttributes({ tiDescription: value })}
                                    placeholder={__('Description..', 'framos-blocks')}
                                />
                                <a
                                    // href="#"
                                    className={classnames(
                                        'bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white! no-underline! font-semibold',
                                        {
                                            [tiBtnClasses.join(' ')]: tiBtnClasses.length > 0 && tiBtnClasses
                                        }
                                    )}
                                >
                                    <RichText
                                        tagName="span"
                                        value={tiButtonText}
                                        onChange={v => setAttributes({ tiButtonText: v })}
                                        placeholder={__('button text', 'framos')}
                                    />
                                </a>
                            </div>
                            <InnerBlocks
                                templateLock="all"
                                template={times(tabChildCount, n => [
                                    'framos/tab',
                                    {
                                        tabId: `${n + 1}`,
                                        tabParentId: clientId
                                    }
                                ])}
                                allowedBlocks={['framos/tab']}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
