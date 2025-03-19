/**
 * WordPress dependencies
 */
import { BlockControls, InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { Fragment, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import classnames from 'classnames';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const { containerClasses, heading, headingLevel, headingClasses, headingTextClasses, bodyClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps({
        className: 'py-6'
    });

    const accordionRef = useRef();
    useEffect(() => {
        if (accordionRef.current) {
            const button = accordionRef.current.querySelector('button');
            const body = accordionRef.current.querySelector('.accordion-body');
            const openIcon = accordionRef.current.querySelector('.open-icon');
            const closeIcon = accordionRef.current.querySelector('.close-icon');
            button.addEventListener('click', () => {
                body.classList.toggle('hidden');
                openIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            });
        }
    }, []);

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <BlockControls>
                <ToolbarGroup>
                    <DropdownMenu
                        icon="heading"
                        label={__('Tag', 'framos')}
                        controls={['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].map(level => ({
                            title: __(level === 'p' ? 'Paragraph' : `Heading ${level.slice(1)}`, 'framos'),
                            isActive: headingLevel === level,
                            onClick: () => setAttributes({ headingLevel: level })
                        }))}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps} ref={accordionRef}>
                <dt>
                    <button
                        type="button"
                        className={classnames(
                            'flex w-full items-start justify-between text-left text-gray-900 dark:text-white focus:outline-none border-0 bg-transparent shadow-none p-0',
                            {
                                [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                            }
                        )}
                    >
                        <RichText
                            tagName={headingLevel}
                            className={classnames('text-base/7 font-semibold py-0 m-0', {
                                [headingTextClasses.join(' ')]: headingTextClasses.length > 0 && headingTextClasses
                            })}
                            value={heading}
                            onChange={heading => setAttributes({ heading })}
                            placeholder={__('Enter a heading', 'framos')}
                        />
                        <span className="ml-6 flex h-7 items-center">
                            <svg className="close-icon w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                            <svg
                                className="open-icon hidden w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>
                        </span>
                    </button>
                </dt>
                <dd
                    className={classnames('mt-2 pr-12 hidden overflow-hidden text-gray-600 dark:text-gray-300 ml-0 accordion-body', {
                        [bodyClasses.join(' ')]: bodyClasses.length > 0 && bodyClasses
                    })}
                >
                    <InnerBlocks />
                </dd>
            </div>
        </Fragment>
    );
}
