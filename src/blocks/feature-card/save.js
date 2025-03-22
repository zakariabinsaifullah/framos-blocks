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
    const {
        containerClasses,
        heading,
        headingLevel,
        headingClasses,
        text,
        textClasses,
        sliderTitle,
        sliderTitleTag,
        sliderTitleClasses,
        sliderText,
        sliderTextClasses,
        sliderNavWrapperClasses,
        prevClasses,
        nextClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames({
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <div className="text-center mb-8">
                    <RichText.Content
                        tagName={headingLevel}
                        className={classnames('text-3xl font-bold text-gray-900 mb-4', {
                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                        })}
                        value={heading}
                    />
                    <RichText.Content
                        tagName="p"
                        className={classnames('text-gray-600 max-w-3xl mx-auto', {
                            [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                        })}
                        value={text}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/4">
                        <div
                            className={classnames('bg-gray-50 p-6 rounded-lg h-full box-border', {
                                [sliderNavWrapperClasses.join(' ')]: sliderNavWrapperClasses.length > 0 && sliderNavWrapperClasses
                            })}
                        >
                            <RichText.Content
                                tagName={sliderTitleTag}
                                className={classnames('text-2xl font-bold text-indigo-600 mb-2', {
                                    [sliderTitleClasses.join(' ')]: sliderTitleClasses.length > 0 && sliderTitleClasses
                                })}
                                value={sliderTitle}
                            />
                            <RichText.Content
                                tagName="p"
                                className={classnames('text-gray-700 mb-4', {
                                    [sliderTextClasses.join(' ')]: sliderTextClasses.length > 0 && sliderTextClasses
                                })}
                                value={sliderText}
                            />
                            <div className="flex space-x-4 mt-6">
                                <button
                                    className={classnames(
                                        'prev-navigation custom-nav-btn w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-indigo-600 shadow-sm hover:bg-gray-50 hover:shadow transition-all duration-200',
                                        {
                                            [prevClasses.join(' ')]: prevClasses.length > 0 && prevClasses
                                        }
                                    )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className={classnames(
                                        'next-navigation custom-nav-btn w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-indigo-600 shadow-sm hover:bg-gray-50 hover:shadow transition-all duration-200',
                                        {
                                            [nextClasses.join(' ')]: nextClasses.length > 0 && nextClasses
                                        }
                                    )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
