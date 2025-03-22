/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
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
        primaryButtonText,
        primaryButtonUrl,
        primaryButtonClasses,
        pbTextClasses,
        secondaryButtonText,
        secondaryButtonUrl,
        secondaryButtonClasses,
        sbTextClasses,
        sliderWrapperClasses,
        sliderOneImages,
        sliderTwoImages,
        sliderOneClasses,
        sliderTwoClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames('w-full lg:h-screen', {
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

    return (
        <Fragment>
            <section {...blockProps}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:h-screen">
                    <div className="w-full justify-start items-center gap-7 grid lg:grid-cols-12 grid-cols-1 lg:h-full">
                        <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pr-10 lg:py-10 py-4 flex-col justify-center items-start lg:gap-11 gap-7 inline-flex">
                            <div className="flex-col justify-start items-start gap-3 flex">
                                <RichText.Content
                                    tagName={headingLevel}
                                    className={classnames(
                                        'lg:max-w-lg text-gray-900 xl:text-6xl text-5xl font-bold font-manrope xl:leading-normal leading-snug lg:text-start text-center',
                                        {
                                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                        }
                                    )}
                                    value={heading}
                                />
                                <RichText.Content
                                    tagName="p"
                                    className={classnames(
                                        'lg:max-w-2xl text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center',
                                        {
                                            [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                        }
                                    )}
                                    value={text}
                                />
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center gap-5 flex sm:flex-row flex-col">
                                <button
                                    className={classnames(
                                        'sm:w-fit w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex',
                                        {
                                            [primaryButtonClasses.join(' ')]: primaryButtonClasses.length > 0 && primaryButtonClasses
                                        }
                                    )}
                                >
                                    <RichText.Content
                                        tagName="span"
                                        className={classnames('px-2 py-px text-white text-base font-semibold leading-relaxed', {
                                            [pbTextClasses.join(' ')]: pbTextClasses.length > 0 && pbTextClasses
                                        })}
                                        value={primaryButtonText}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M7.50295 4.99609L12.5032 9.9963L7.5 14.9994"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className={classnames(
                                        'sm:w-fit w-full px-5 py-2.5 bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex',
                                        {
                                            [secondaryButtonClasses.join(' ')]: secondaryButtonClasses.length > 0 && secondaryButtonClasses
                                        }
                                    )}
                                >
                                    <RichText.Content
                                        tagName="span"
                                        className={classnames('px-2 py-px text-gray-900 text-base font-semibold leading-relaxed', {
                                            [sbTextClasses.join(' ')]: sbTextClasses.length > 0 && sbTextClasses
                                        })}
                                        value={secondaryButtonText}
                                    />
                                </button>
                            </div>
                        </div>
                        <div
                            className={classnames(
                                'xl:col-span-5 lg:col-span-6 col-span-12 justify-center items-center gap-14 flex lg:h-[800px] h-[400px] overflow-hidden relative flex-row',
                                {
                                    [sliderWrapperClasses.join(' ')]: sliderWrapperClasses.length > 0 && sliderWrapperClasses
                                }
                            )}
                        >
                            <div className="swiper-container w-fit">
                                <div
                                    className={classnames('swiper-wrapper w-fit h-fit flex gap-8', {
                                        [sliderOneClasses.join(' ')]: sliderOneClasses.length > 0 && sliderOneClasses
                                    })}
                                >
                                    {sliderOneImages &&
                                        sliderOneImages?.length > 0 &&
                                        sliderOneImages.map((image, index) => {
                                            return (
                                                <div className="swiper-slide w-[200px] h-[310px]">
                                                    <img src={image.url} alt="gallery-image" className="w-[200px] h-[310px] object-cover" />
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                            <div className="swiper-container1 w-[200px]">
                                <div
                                    className={classnames('swiper-wrapper w-fit h-fit flex gap-8', {
                                        [sliderTwoClasses.join(' ')]: sliderTwoClasses.length > 0 && sliderTwoClasses
                                    })}
                                >
                                    {sliderTwoImages &&
                                        sliderTwoImages?.length > 0 &&
                                        sliderTwoImages.map((image, index) => {
                                            return (
                                                <div className="swiper-slide w-[200px] h-[310px]">
                                                    <img src={image.url} alt="gallery-image" className="w-[200px] h-[310px] object-cover" />
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
