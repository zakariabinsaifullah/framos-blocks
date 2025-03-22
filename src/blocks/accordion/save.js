/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { containerClasses, heading, headingLevel, headingClasses, headingTextClasses, bodyClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: 'py-6'
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <dt>
                    <button
                        type="button"
                        className={classnames(
                            'accordion-head flex w-full items-start justify-between text-left text-gray-900 dark:text-white focus:outline-none border-0 bg-transparent shadow-none p-0',
                            {
                                [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                            }
                        )}
                    >
                        <RichText.Content
                            tagName={headingLevel}
                            className={classnames('text-base/7 font-semibold py-0 m-0', {
                                [headingTextClasses.join(' ')]: headingTextClasses.length > 0 && headingTextClasses
                            })}
                            value={heading}
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
                    className={classnames('accordion-body hidden mt-2 pr-12 overflow-hidden text-gray-600 dark:text-gray-300 ml-0', {
                        [bodyClasses.join(' ')]: bodyClasses.length > 0 && bodyClasses
                    })}
                >
                    <InnerBlocks.Content />
                </dd>
            </div>
        </Fragment>
    );
}
