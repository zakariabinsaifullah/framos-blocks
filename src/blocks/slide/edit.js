/**
 * WordPress dependencies
 */
import { BlockControls, MediaPlaceholder, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { DropdownMenu, ToolbarButton, ToolbarGroup } from '@wordpress/components';
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
    const { containerClasses, heading, headingLevel, headingClasses, text, textClasses, image } = attributes;

    // Block Props
    const blockProps = useBlockProps({
        className: 'swiper-slide'
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
                <div
                    className={classnames('border border-gray-100 p-6 rounded-lg h-full', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="flex mb-4">
                        {image && image.url ? (
                            <img src={image.url} alt={image.alt} className="w-1/3 h-auto" />
                        ) : (
                            <MediaPlaceholder
                                icon="format-image"
                                labels={{
                                    title: '',
                                    instructions: ''
                                }}
                                onSelect={media => setAttributes({ image: media })}
                                accept="image/*"
                                allowedTypes={['image']}
                                multiple={false}
                            />
                        )}
                    </div>
                    <RichText
                        tagName={headingLevel}
                        className={classnames('text-xl font-semibold text-gray-800 mb-2', {
                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                        })}
                        value={heading}
                        onChange={heading => setAttributes({ heading })}
                        placeholder={__('Add a heading', 'framos')}
                    />
                    <RichText
                        tagName="p"
                        className={classnames('mx-auto mt-6 max-w-xl text-md md:text-lg leading-normal', {
                            [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                        })}
                        value={text}
                        onChange={v => setAttributes({ text: v })}
                        placeholder={__('Add text', 'framos')}
                    />
                </div>
            </div>
        </Fragment>
    );
}
