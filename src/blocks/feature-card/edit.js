/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { DropdownMenu, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { Fragment, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import classnames from 'classnames';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        sliderStatus,
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
    const blockProps = useBlockProps({
        className: classnames({
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

    // Slider Ref
    const sliderRef = useRef(null);
    const sliderNavRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            new Swiper(sliderRef.current, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: false,
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        }

        if (sliderNavRef.current) {
            const prevNavigation = sliderNavRef.current.querySelector('.prev-navigation');
            const nextNavigation = sliderNavRef.current.querySelector('.next-navigation');

            prevNavigation.addEventListener('click', function () {
                sliderRef.current.swiper.slidePrev();
            });

            nextNavigation.addEventListener('click', function () {
                sliderRef.current.swiper.slideNext();
            });
        }
    }, [sliderStatus, sliderRef, sliderNavRef]);

    const innerBlocksPros = useInnerBlocksProps(
        {
            className: 'swiper-wrapper'
        },
        {
            template: [['framos/slide'], ['framos/slide'], ['framos/slide'], ['framos/slide']],
            renderAppender: false
        }
    );

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
                <ToolbarGroup>
                    <ToolbarButton
                        icon="plus"
                        title={__('Add Slide', 'framos')}
                        onClick={() => {
                            const childBlocks = select('core/block-editor').getBlocks(clientId);
                            const newBlock = createBlock('framos/slide', {});
                            dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
                            const newBlockClientId = select('core/block-editor').getBlockOrder(clientId)[childBlocks.length];
                            dispatch('core/block-editor').selectBlock(newBlockClientId);

                            // update sliderStatus attribute
                            setAttributes({ sliderStatus: !sliderStatus });
                        }}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className="text-center mb-8">
                    <RichText
                        tagName={headingLevel}
                        className={classnames('text-3xl font-bold text-gray-900 mb-4', {
                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                        })}
                        value={heading}
                        onChange={v =>
                            setAttributes({
                                heading: v
                            })
                        }
                        placeholder={__('Add a heading', 'framos')}
                    />
                    <RichText
                        tagName="p"
                        className={classnames('text-gray-600 max-w-3xl mx-auto', {
                            [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                        })}
                        value={text}
                        onChange={v =>
                            setAttributes({
                                text: v
                            })
                        }
                        placeholder={__('Add a description', 'framos')}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/4">
                        <div
                            className={classnames('bg-gray-50 p-6 rounded-lg h-full box-border', {
                                [sliderNavWrapperClasses.join(' ')]: sliderNavWrapperClasses.length > 0 && sliderNavWrapperClasses
                            })}
                        >
                            <RichText
                                tagName={sliderTitleTag}
                                className={classnames('text-2xl font-bold text-indigo-600 mb-2', {
                                    [sliderTitleClasses.join(' ')]: sliderTitleClasses.length > 0 && sliderTitleClasses
                                })}
                                value={sliderTitle}
                                onChange={v =>
                                    setAttributes({
                                        sliderTitle: v
                                    })
                                }
                                placeholder={__('Add a slide title', 'framos')}
                            />
                            <RichText
                                tagName="p"
                                className={classnames('text-gray-700 mb-4', {
                                    [sliderTextClasses.join(' ')]: sliderTextClasses.length > 0 && sliderTextClasses
                                })}
                                value={sliderText}
                                onChange={v =>
                                    setAttributes({
                                        sliderText: v
                                    })
                                }
                                placeholder={__('Add a slide text', 'framos')}
                            />
                            <div className="flex space-x-4 mt-6" ref={sliderNavRef}>
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
                        <div className="swiper" ref={sliderRef}>
                            <div {...innerBlocksPros} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
