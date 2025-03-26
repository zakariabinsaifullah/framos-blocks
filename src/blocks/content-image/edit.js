/**
 * WordPress dependencies
 */
import { BlockControls, InnerBlocks, MediaPlaceholder, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { DropdownMenu, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import classnames from 'classnames';

// child block
import '../accordion';

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
        image,
        layoutClasses,
        contentSideClasses,
        imageSideClasses,
        changeOrder
    } = attributes;

    // Block Props
    const blockProps = useBlockProps({
        className: classnames('py-6', {
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

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
                        onSelect={media => setAttributes({ image: media })}
                        type="image"
                        value={image?.id}
                        render={({ open }) => (
                            <ToolbarButton title={__('Edit Image', 'framos')} onClick={open}>
                                <span className="dashicons dashicons-edit"></span>
                            </ToolbarButton>
                        )}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className="mx-auto max-w-7xl">
                    <div className="relative isolate overflow-hidden py-20 sm:rounded-3xl sm:py-12 lg:py-24">
                        <div
                            className={classnames('mx-auto flex max-w-2xl flex-col lg:flex-row lg:max-w-none lg:items-center gap-8', {
                                'lg:flex-row-reverse': changeOrder,
                                [layoutClasses.join(' ')]: layoutClasses.length > 0 && layoutClasses
                            })}
                        >
                            {/* Left Column */}
                            <div
                                className={classnames('w-full lg:w-1/2', {
                                    [contentSideClasses.join(' ')]: contentSideClasses.length > 0 && contentSideClasses
                                })}
                            >
                                <RichText
                                    tagName={headingLevel}
                                    className={classnames('text-balance text-3xl font-semibold tracking-tight sm:text-4xl', {
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
                                    className={classnames('mt-6 text-base text-gray-600 dark:text-gray-300', {
                                        [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                    })}
                                    value={text}
                                    onChange={v =>
                                        setAttributes({
                                            text: v
                                        })
                                    }
                                    placeholder={__('Add description here..', 'framos')}
                                />
                                {/* FAQ */}
                                <div className="max-w-xl lg:mt-2 lg:max-w-lg lg:border-t lg:border-gray-900/10 lg:pt-2">
                                    <dl className="mt-8 divide-y divide-gray-900/10">
                                        <InnerBlocks
                                            allowedBlocks={['framos/accordion']}
                                            template={[
                                                ['framos/accordion', { heading: 'Accordion Heading #1' }],
                                                ['framos/accordion', { heading: 'Accordion Heading #2' }]
                                            ]}
                                            renderAppender={() => null}
                                        />
                                    </dl>
                                    <button
                                        className="mt-4 text-base px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                        onClick={() => {
                                            const childBlocks = select('core/block-editor').getBlocks(clientId);
                                            const newBlock = createBlock('framos/accordion', {});
                                            dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
                                            const newBlockClientId =
                                                select('core/block-editor').getBlockOrder(clientId)[childBlocks.length - 1];
                                            dispatch('core/block-editor').selectBlock(newBlockClientId);
                                        }}
                                    >
                                        {__('Add Accordion', 'easy-accordion-block')}
                                    </button>
                                </div>
                            </div>

                            {/* Right Column: Image */}
                            <div
                                className={classnames('w-full lg:w-1/2', {
                                    [imageSideClasses.join(' ')]: imageSideClasses.length > 0 && imageSideClasses
                                })}
                            >
                                {image && image?.url ? (
                                    <img
                                        src={image.url}
                                        alt={image.alt || heading}
                                        className="relative -z-20 w-full max-w-full rounded-xl shadow-xl ring-1 ring-white/10"
                                    />
                                ) : (
                                    <MediaPlaceholder
                                        onSelect={v => setAttributes({ image: v })}
                                        onSelectURL={url => setAttributes({ image: { url } })}
                                        allowedTypes={['image']}
                                        multiple={false}
                                        labels={{ title: __('Upload Image', 'framos') }}
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
