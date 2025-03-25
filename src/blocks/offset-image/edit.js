/**
 * WordPress dependencies
 */
import { BlockControls, MediaPlaceholder, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { Button, DropdownMenu, ToolbarGroup } from '@wordpress/components';
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
        text,
        textClasses,
        primaryButtonText,
        primaryButtonUrl,
        primaryButtonClasses,
        secondaryButtonText,
        secondaryButtonUrl,
        secondaryButtonClasses,
        offsetImage,
        offsetImageClasses
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
                <ToolbarGroup>
                    <MediaUpload
                        onSelect={media => {
                            setAttributes({
                                offsetImage: media
                            });
                        }}
                        allowedTypes={['image']}
                        multiple={false}
                        value={offsetImage?.id}
                        render={({ open }) => <Button icon="edit" onClick={open} />}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className="bg-white">
                    <div
                        className={classnames('relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14', {
                            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                        })}
                    >
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                            aria-hidden="true"
                        />
                        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                                <RichText
                                    tagName={headingLevel}
                                    className={classnames(
                                        'max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto',
                                        {
                                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                        }
                                    )}
                                    value={heading}
                                    onChange={v => setAttributes({ heading: v })}
                                    placeholder={__('Add a heading', 'framos')}
                                />
                                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                    <RichText
                                        tagName="p"
                                        className={classnames('text-pretty text-lg font-medium text-gray-500 sm:text-xl/8', {
                                            [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                        })}
                                        value={text}
                                        onChange={v => setAttributes({ text: v })}
                                        placeholder={__('Add text', 'framos')}
                                    />
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            // href="#"
                                            className={classnames(
                                                'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                                                {
                                                    [primaryButtonClasses.join(' ')]:
                                                        primaryButtonClasses.length > 0 && primaryButtonClasses
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

                                        <a
                                            // href="#"
                                            className={classnames('text-sm/6 font-semibold text-gray-900', {
                                                [secondaryButtonClasses.join(' ')]:
                                                    secondaryButtonClasses.length > 0 && secondaryButtonClasses
                                            })}
                                        >
                                            <RichText
                                                tagName="span"
                                                value={secondaryButtonText}
                                                onChange={v => setAttributes({ secondaryButtonText: v })}
                                                placeholder={__('button text', 'framos')}
                                            />
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                                {offsetImage ? (
                                    <img
                                        src={offsetImage.url}
                                        alt={offsetImage.alt}
                                        className={classnames(
                                            'mt-10 aspect-[6/5]  w-full max-w-lg  rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36',
                                            {
                                                [offsetImageClasses.join(' ')]: offsetImageClasses.length > 0 && offsetImageClasses
                                            }
                                        )}
                                    />
                                ) : (
                                    <MediaPlaceholder
                                        onSelect={el => {
                                            setAttributes({ offsetImage: el });
                                        }}
                                        className="sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                                        allowedTypes={['image']}
                                        multiple={false}
                                        value={offsetImage?.id}
                                        labels={{ title: 'The Image' }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
