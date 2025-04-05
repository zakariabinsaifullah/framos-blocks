/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

import { DynamicTag } from '../../components';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const {
        faqs,
        containerClasses,
        heading,
        headingLevel,
        headingClasses,
        subHeading,
        subHeadingLevel,
        subHeadingClasses,
        questionTag,
        questionClasses,
        questionTextClasses,
        answerClasses,
        answerTextClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames('', {
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <RichText.Content
                    tagName={headingLevel}
                    className={classnames('text-3xl font-bold text-center text-gray-900 mb-6 mt-0', {
                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                    })}
                    value={heading}
                />
                <RichText.Content
                    tagName={subHeadingLevel}
                    className={classnames('mt-0 mb-6 text-center', {
                        [subHeadingClasses.join(' ')]: subHeadingClasses.length > 0 && subHeadingClasses
                    })}
                    value={subHeading}
                />
                <div className="faqs-wrapper">
                    {faqs && faqs.length > 0 ? (
                        faqs.map((faq, index) => {
                            return (
                                <div
                                    className={classnames('faq-item py-6 relative', {
                                        'first:pt-0': index === 0,
                                        'last:pb-0': index === faqs.length - 1
                                    })}
                                    key={index}
                                >
                                    <DynamicTag tagName={questionTag} className="faq-question m-0!">
                                        <button
                                            type="button"
                                            className={classnames(
                                                'flex w-full items-center justify-between text-left text-gray-900 bg-transparent border-0 p-0 cursor-pointer faq-button',
                                                {
                                                    [questionClasses.join(' ')]: questionClasses.length > 0 && questionClasses
                                                }
                                            )}
                                        >
                                            <RichText.Content
                                                tagName="span"
                                                className={classnames('text-base font-semibold leading-7', {
                                                    [questionTextClasses.join(' ')]: questionTextClasses.length > 0 && questionTextClasses
                                                })}
                                                value={faq?.question}
                                            />
                                            <span className="ml-6 flex h-7 items-center">
                                                <svg
                                                    className="size-6 close-icon"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                                </svg>
                                                <svg
                                                    className="size-6 hidden open-icon"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                                </svg>
                                            </span>
                                        </button>
                                    </DynamicTag>
                                    <div
                                        className={classnames(
                                            'mt-2 pr-12 overflow-hidden hidden',
                                            'faq-answer transition-all duration-300 ease-out',
                                            {
                                                [answerClasses.join(' ')]: answerClasses.length > 0 && answerClasses
                                            }
                                        )}
                                    >
                                        <RichText.Content
                                            tagName="p"
                                            className={classnames('text-base leading-7 text-gray-600 m-0!', {
                                                [answerTextClasses.join(' ')]: answerTextClasses.length > 0 && answerTextClasses
                                            })}
                                            value={faq?.answer}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>{__('No FAQs added yet.', 'framos')}</p>
                    )}
                </div>
            </div>
        </Fragment>
    );
}
