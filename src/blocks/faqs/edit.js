/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import classnames from 'classnames';

import { DynamicTag } from '../../components';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
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
    const blockProps = useBlockProps({
        className: classnames('', {
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

    const faqRef = useRef(null);
    useEffect(() => {
        if (!faqRef.current) return;

        // Using event delegation - one listener for all FAQ items
        const handleWrapperClick = event => {
            // Check if the clicked element or its parent is a faq-question
            const button = event.target.closest('.faq-button');
            if (!button) return;

            const faqItem = button.closest('.faq-item');
            const answers = faqItem.querySelector('.faq-answer');
            const iconExpand = button.querySelector('.close-icon');
            const iconCollapse = button.querySelector('.open-icon');

            // toggle hidden class
            answers.classList.toggle('hidden');
            iconExpand.classList.toggle('hidden');
            iconCollapse.classList.toggle('hidden');
        };

        // Add a single event listener to the wrapper
        const wrapper = faqRef.current;
        wrapper.addEventListener('click', handleWrapperClick);

        // Cleanup
        return () => {
            if (wrapper) {
                wrapper.removeEventListener('click', handleWrapperClick);
            }
        };
    }, []);

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <div {...blockProps}>
                <RichText
                    tagName={headingLevel}
                    className={classnames('text-3xl font-bold text-center text-gray-900 mb-6 mt-0', {
                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                    })}
                    value={heading}
                    onChange={v => setAttributes({ heading: v })}
                    placeholder={__('Add a heading', 'framos')}
                />
                <RichText
                    tagName={subHeadingLevel}
                    className={classnames('mt-0 mb-6 text-center', {
                        [subHeadingClasses.join(' ')]: subHeadingClasses.length > 0 && subHeadingClasses
                    })}
                    value={subHeading}
                    onChange={v => setAttributes({ subHeading: v })}
                    placeholder={__('Add a subheading', 'framos')}
                />
                <div className="faqs-wrapper" ref={faqRef}>
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
                                    <button
                                        className={classnames(
                                            'delete-btn absolute top-0 left-0 -ml-8 bg-transparent border-0 p-0 cursor-pointer text-red-500',
                                            {
                                                'mt-6': index !== 0
                                            }
                                        )}
                                        onClick={() => {
                                            const updatedFaqs = [...faqs];
                                            updatedFaqs.splice(index, 1);
                                            setAttributes({ faqs: updatedFaqs });
                                        }}
                                    >
                                        <svg
                                            className="size-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            onClick={() => {
                                                const updatedFaqs = [...faqs];
                                                updatedFaqs.splice(index, 1);
                                                setAttributes({ faqs: updatedFaqs });
                                                setAttributes({ updateStatus: !updateStatus });
                                            }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
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
                                            <RichText
                                                tagName="span"
                                                className={classnames('text-base font-semibold leading-7', {
                                                    [questionTextClasses.join(' ')]: questionTextClasses.length > 0 && questionTextClasses
                                                })}
                                                value={faq?.question}
                                                onChange={v => {
                                                    const updatedFaqs = [...faqs];
                                                    updatedFaqs[index] = { ...updatedFaqs[index], question: v };
                                                    setAttributes({ faqs: updatedFaqs });
                                                }}
                                                placeholder={__('Add a question', 'framos')}
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
                                        <RichText
                                            tagName="p"
                                            className={classnames('text-base leading-7 text-gray-600 m-0!', {
                                                [answerTextClasses.join(' ')]: answerTextClasses.length > 0 && answerTextClasses
                                            })}
                                            value={faq?.answer}
                                            onChange={v => {
                                                const updatedFaqs = [...faqs];
                                                updatedFaqs[index] = { ...updatedFaqs[index], answer: v };
                                                setAttributes({ faqs: updatedFaqs });
                                            }}
                                            placeholder={__('Add an answer', 'framos')}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>{__('No FAQs added yet.', 'framos')}</p>
                    )}
                </div>
                <button
                    className="mt-4 text-base px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    onClick={() => {
                        const newFaq = { question: 'New Question', answer: '' };
                        setAttributes({ faqs: [...faqs, newFaq] });
                    }}
                >
                    {__('Add New', 'framos')}
                </button>
            </div>
        </Fragment>
    );
}
