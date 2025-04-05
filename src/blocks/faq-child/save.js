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
    const { containerClasses, heading, headingLevel, headingTextClasses, bodyTextClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <Fragment>
            <div {...blockProps}>
                <section
                    className={classnames(' faq-container', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="faq-item border-b border-gray-300 ">
                        <span className="faq-button flex w-full items-start justify-between text-left text-gray-900  cursor-pointer">
                            <span className="text-base font-semibold leading-7" role="button">
                                <RichText.Content
                                    tagName={headingLevel}
                                    className={classnames('', {
                                        [headingTextClasses.join(' ')]: headingTextClasses.length > 0 && headingTextClasses
                                    })}
                                    value={heading}
                                />
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                                <svg
                                    className="faq-icon icon-expand w-6 h-6 text-gray-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 6v12m6-6H6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg
                                    className="faq-icon icon-collapse w-6 h-6 text-gray-600 hidden"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                        <div
                            className={classnames(
                                'faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-out text-gray-700 mt-2',
                                {
                                    [bodyTextClasses.join(' ')]: bodyTextClasses.length > 0 && bodyTextClasses
                                }
                            )}
                        >
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
