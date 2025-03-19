/**
 * WordPress dependencies
 */
import {
    BlockControls,
    RichText,
    useBlockProps,
    MediaPlaceholder,
    MediaUpload,
    innerBlockProps,
    useInnerBlocksProps
} from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
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
        // title
        title,
        titleClass,
        headingLevel,
        // desc
        desc,
        descClass,
        // photo,
        photo,
        photoSize,
        photoClass
    } = attributes;

    // Block Props
    const blockProps = useBlockProps();
    // Inner blocks
    const innerBlockProps = useInnerBlocksProps({
        allowedBlocks: ['framos/product-list'],
        template: [['framos/product-list'], ['framos/product-list']],
        renderAppender: false,
        templateLock: false
    });

    // Append Button
    const childBlocks = select('core/block-editor').getBlocks(clientId);
    const appendBtn = () => {
        const newBlock = createBlock('framos/product-list', {});
        dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

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
                    className={classnames('overflow-hidden bg-white py-24 sm:py-32', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <RichText
                                        tagName="h5"
                                        className={classnames('text-base/7 font-semibold text-indigo-600', {
                                            [subtitleClasses.join(' ')]: subtitleClasses.length > 0 && subtitleClasses
                                        })}
                                        value={subtitle}
                                        onChange={v => setAttributes({ subtitle: v })}
                                        placeholder={__('Add a subtitle', 'framos')}
                                    />
                                    <RichText
                                        tagName={headingLevel}
                                        className={classnames(
                                            'mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl',
                                            {
                                                [titleClass.join(' ')]: titleClass.length > 0 && titleClass
                                            }
                                        )}
                                        value={title}
                                        onChange={v => setAttributes({ title: v })}
                                        placeholder={__('Add a title', 'framos')}
                                    />
                                    <RichText
                                        className={classnames('mt-6 text-lg/8 text-gray-600', {
                                            [descClass.join(' ')]: descClass.length > 0 && descClass
                                        })}
                                        value={desc}
                                        onChange={v => setAttributes({ desc: v })}
                                        placeholder={__('Add a title', 'framos')}
                                    />
                                    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                        <div {...innerBlockProps} />
                                        <button onClick={appendBtn}>Add item</button>
                                    </dl>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                {photo && photo?.url ? (
                                    <figure>
                                        <img
                                            src={
                                                photo?.sizes && photoSize && photo?.sizes[photoSize]?.url
                                                    ? photo.sizes[photoSize].url
                                                    : photo?.url
                                            }
                                            alt={photo?.alt || title}
                                            className={classnames(
                                                'w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]',
                                                `wp-image-${photo?.id}`,
                                                {
                                                    [photoClass.join(' ')]: photoClass.length > 0 && photoClass
                                                }
                                            )}
                                            width={2432}
                                            height={1442}
                                        />
                                    </figure>
                                ) : (
                                    <MediaPlaceholder
                                        onSelect={media => {
                                            setAttributes({
                                                photo: {
                                                    id: media.id,
                                                    url: media.url
                                                }
                                            });
                                            setAttributes({
                                                photoCaption: media.caption
                                            });
                                        }}
                                        onSelectURL={url =>
                                            setAttributes({
                                                photo: {
                                                    id: null,
                                                    url: url
                                                }
                                            })
                                        }
                                        allowedTypes={['image']}
                                        multiple={false}
                                        labels={{
                                            title: __('Upload Photo', 'afftra-blocks'),
                                            instructions: __(
                                                'Drag and drop a photo, upload a new one or select a file from your media library. Even you can add an image link to the product photo.',
                                                'afftra-blocks'
                                            )
                                        }}
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                style={{
                                                    fill: 'none'
                                                }}
                                                color="#2563eb"
                                            >
                                                <path
                                                    d="M12.5 2.5L4.5 2.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V12.5"
                                                    stroke="#2563eb"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M5.5 21.5L14.3453 13.5393C15.0247 12.9278 16.0321 12.8547 16.7926 13.3617L21.5 16.5"
                                                    stroke="#2563eb"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M16 5L18.5 2.5L21 5M18.5 10V3.10878"
                                                    stroke="#2563eb"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
