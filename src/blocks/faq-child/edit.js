/**
 * WordPress dependencies
 */
import { BlockControls, InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { Fragment, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import classnames from 'classnames';

export default function Edit({ attributes, setAttributes }) {
    const { containerClasses, headingLevel, headingTextClasses, heading,  bodyTextClasses } = attributes;
    const faqContainerRef = useRef(null);

    const blockProps = useBlockProps();

    useEffect(() => {
        if (!faqContainerRef.current) return;

        const faqs = faqContainerRef.current.querySelectorAll('.faq-item');

        const handleFaqClick = event => {
            const faq = event.currentTarget.parentElement;
            const answer = faq.querySelector('.faq-answer');
            const iconExpand = faq.querySelector('.icon-expand');
            const iconCollapse = faq.querySelector('.icon-collapse');

            const isActive = faq.classList.contains('active');

            // Close all FAQs first
            faqs.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
                item.querySelector('.icon-expand').classList.remove('hidden');
                item.querySelector('.icon-collapse').classList.add('hidden');
            });

            // If not already active, open the clicked one
            if (!isActive) {
                faq.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                iconExpand.classList.add('hidden');
                iconCollapse.classList.remove('hidden');
            }
        };

        faqs.forEach(faq => {
            const button = faq.querySelector('.faq-button');
            button.addEventListener('click', handleFaqClick);
        });

        // Cleanup event listeners on unmount
        return () => {
            faqs.forEach(faq => {
                const button = faq.querySelector('.faq-button');
                button.removeEventListener('click', handleFaqClick);
            });
        };
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
            <div {...blockProps}>
                <section
                    ref={faqContainerRef}
                    className={classnames(' faq-container', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="faq-item border-b border-gray-300 ">
                        <span className="faq-button flex w-full items-start justify-between text-left text-gray-900  cursor-pointer">
                            <span className="text-base font-semibold leading-7" role="button">
                                <RichText
                                    tagName={headingLevel}
                                    className={classnames('', {
                                        [headingTextClasses.join(' ')]: headingTextClasses.length > 0 && headingTextClasses
                                    })}
                                    value={heading}
                                    onChange={v => setAttributes({ heading: v })}
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
                            <InnerBlocks template={[['core/paragraph']]} />
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
