/**
 * WordPress dependencies
 */
import { BlockControls, MediaPlaceholder, RichText, useBlockProps } from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        containerClasses,
        heading,
        headingLevel,
        headingClasses,
        subTitle,
        subTitleClasses,
        text,
        textClasses,
        primaryButtonText,
        primaryButtonClasses,
        leftImage,
        leftImageClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps();

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
                <div
                    className={classnames('relative bg-gray-900', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    {leftImage && leftImage.url ? (
                        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                            <img
                                className={classnames('size-full object-cover', {
                                    [leftImageClasses.join(' ')]: leftImageClasses.length > 0 && leftImageClasses
                                })}
                                src={leftImage.url}
                                alt={leftImage.alt}
                            />
                        </div>
                    ) : (
                        <div className="md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 z-9">
                            <MediaPlaceholder
                                onSelect={el => {
                                    setAttributes({ leftImage: el });
                                }}
                                allowedTypes={['image']}
                                multiple={false}
                                value={leftImage?.id}
                                labels={{ title: 'The Image' }}
                            />
                        </div>
                    )}
                    <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                            <RichText
                                tagName={headingLevel}
                                className={classnames('text-base/7 font-semibold text-indigo-400', {
                                    [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                })}
                                value={heading}
                                onChange={v => setAttributes({ heading: v })}
                            />

                            <RichText
                                tagName="p"
                                className={classnames('mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl', {
                                    [subTitleClasses.join(' ')]: subTitleClasses.length > 0 && subTitleClasses
                                })}
                                value={subTitle}
                                onChange={v => setAttributes({ subTitle: v })}
                            />

                            <RichText
                                tagName="p"
                                className={classnames('mt-6 text-base/7 text-gray-300', {
                                    [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                })}
                                value={text}
                                onChange={v => setAttributes({ text: v })}
                            />

                            <div className="mt-8">
                                <a
                                    href="#"
                                    className={classnames(
                                        'inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                                        {
                                            [primaryButtonClasses.join(' ')]: primaryButtonClasses.length > 0 && primaryButtonClasses
                                        }
                                    )}
                                >
                                    <RichText
                                        tagName="span"
                                        value={primaryButtonText}
                                        onChange={v => setAttributes({ primaryButtonText: v })}
                                        placeholder={__('button text', 'framos')}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
