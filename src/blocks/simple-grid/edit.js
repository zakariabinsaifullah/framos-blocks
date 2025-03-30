/**
 * WordPress dependencies
 */
import { BlockControls, MediaPlaceholder, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
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
        subtitle,
        subtitleClasses,
        title,
        titleClass,
        headingLevel,
        desc,
        descClass,
        photo,
        photoClass,
        primaryButtonText,
        primaryButtonUrl,
        primaryButtonClasses
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
                    <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                        {photo ? (
                            <img
                                src={photo.url}
                                alt={photo.alt}
                                className={classnames('size-full object-cover', {
                                    [photoClass.join(' ')]: photoClass.length > 0 && photoClass
                                })}
                            />
                        ) : (
                            <MediaPlaceholder
                                onSelect={el => {
                                    setAttributes({ photo: el });
                                }}
                                className="z-1"
                                allowedTypes={['image']}
                                multiple={false}
                                value={photo?.id}
                                labels={{ title: 'The Image' }}
                            />
                        )}
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                            <RichText
                                className={classnames('text-base/7 font-semibold text-indigo-400', {
                                    [subtitleClasses.join(' ')]: subtitleClasses.length > 0 && subtitleClasses
                                })}
                                value={subtitle}
                                onChange={v => setAttributes({ subtitle: v })}
                                placeholder={__('Add a subtitle', 'framos')}
                            />
                            <RichText
                                tagName={headingLevel}
                                className={classnames('mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl', {
                                    [titleClass.join(' ')]: titleClass.length > 0 && titleClass
                                })}
                                value={title}
                                onChange={v => setAttributes({ title: v })}
                                placeholder={__('Add a title', 'framos')}
                            />
                            <RichText
                                className={classnames('mt-6 text-base/7 text-gray-300', {
                                    [descClass.join(' ')]: descClass.length > 0 && descClass
                                })}
                                value={desc}
                                onChange={v => setAttributes({ desc: v })}
                                placeholder={__('Add a description', 'framos')}
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
