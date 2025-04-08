/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Save function
 */

export default function save({ attributes }) {
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

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className="tabs">
                <div className="block">
                    <ul className="tab-tiltes flex border-b border-gray-200 space-x-3 transition-all duration-300 -mb-px overflow-x-auto m-0 p-0">
                        {tabTitles &&
                            tabTitles.map((item, index) => {
                                return (
                                    <li key={index} className={classnames('list-none')} data-title-tab-id={item.id} role="button">
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
                                            {item.icon && (
                                                <>
                                                    <img
                                                        src={item.icon}
                                                        alt="tab icon"
                                                        className={classnames('tab-icon max-w-full w-8', {})}
                                                    />
                                                </>
                                            )}
                                            <RichText.Content tagName="span" className="tab-title-text" value={item.title} />
                                        </button>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className="mt-16">
                    <div className="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-28">
                        <div
                            className={classnames(
                                'text-center box-border w-full bg-gray-50 rounded-2xl p-8 lg:max-w-none lg:max-w-xs lg:w-1/3',
                                {
                                    [cardClasses.join(' ')]: cardClasses.length > 0 && cardClasses
                                }
                            )}
                        >
                            <RichText.Content
                                tagName="h4"
                                className={classnames('text-lg text-gray-900 font-medium mb-4 mt-0!', {
                                    [tiTitleClasses.join(' ')]: tiTitleClasses.length > 0 && tiTitleClasses
                                })}
                                value={tiTitle}
                            />
                            <RichText.Content
                                tagName="p"
                                className={classnames('text-sm text-gray-500 leading-6 mb-11 mt-0!', {
                                    [tiDescClasses.join(' ')]: tiDescClasses.length > 0 && tiDescClasses
                                })}
                                value={tiDescription}
                            />
                            <a
                                href={tiButtonLink ? tiButtonLink?.url : '#'}
                                {...(tiButtonLink?.opensInNewTab && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                })}
                                className={classnames(
                                    'bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white! no-underline! font-semibold',
                                    {
                                        [tiBtnClasses.join(' ')]: tiBtnClasses.length > 0 && tiBtnClasses
                                    }
                                )}
                            >
                                <RichText.Content tagName="span" value={tiButtonText} />
                            </a>
                        </div>
                        <div className="tabs-content">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
