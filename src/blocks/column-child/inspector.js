/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';

import { Button, FormTokenField, PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ({ attributes, setAttributes }) => {
    const { title, titleClasses, text, textClasses, ButtonText, ButtonUrl, ButtonClasses, BtnIcon, BtnIconClasses, image, imageClasses } =
        attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Title', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={title}
                        onChange={v => setAttributes({ title: v })}
                        placeholder={__('Add a heading', 'framos')}
                    />
                    <FormTokenField
                        value={titleClasses}
                        onChange={v => setAttributes({ titleClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the heading tag.', 'framos')}
                    />
                </PanelBody>

                <PanelBody title={__('Text', 'framos')} initialOpen={false}>
                    <TextareaControl
                        label={__('Text', 'framos')}
                        value={text}
                        onChange={v => setAttributes({ text: v })}
                        placeholder={__('Add text', 'framos')}
                    />
                    <FormTokenField
                        value={textClasses}
                        onChange={v => setAttributes({ textClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the text.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Button', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={ButtonText}
                        onChange={v => setAttributes({ ButtonText: v })}
                        placeholder={__('Button text', 'framos')}
                    />
                    <LinkControl
                        label={__('URL', 'framos')}
                        value={ButtonUrl}
                        onChange={v => {
                            setAttributes({ ButtonUrl: v });
                        }}
                    />
                    <FormTokenField
                        value={ButtonClasses}
                        onChange={v => setAttributes({ ButtonClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the  button.', 'framos')}
                    />
                    {BtnIcon && BtnIcon.url ? (
                        <span aria-hidden="true">
                            <Button onClick={() => setAttributes({ BtnIcon: null })}>Remove</Button>
                            <MediaUpload
                                onSelect={media => setAttributes({ BtnIcon: media })}
                                allowedTypes={['image']}
                                value={BtnIcon?.id}
                                render={({ open }) => <Button onClick={open}>Replace</Button>}
                            />
                            <img src={BtnIcon.url} alt={BtnIcon.alt} className="w-6" />
                        </span>
                    ) : (
                        <MediaPlaceholder
                            onSelect={media => {
                                setAttributes({ BtnIcon: media });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: 'Button Icon' }}
                        >
                            "Button Icon"
                        </MediaPlaceholder>
                    )}
                    <FormTokenField
                        value={BtnIconClasses}
                        onChange={v => setAttributes({ BtnIconClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the  button icon.', 'framos')}
                    />
                </PanelBody>

                <PanelBody title={__('Image', 'framos')} initialOpen={false}>
                    {image && image?.url ? (
                        <div className="framos-preview">
                            <MediaUpload
                                onSelect={media => setAttributes({ image: media })}
                                type="image"
                                value={image?.id}
                                render={({ open }) => (
                                    <button className="framos-edit-btn" title={__('Edit Image', 'framos')} onClick={open}>
                                        <span className="dashicons dashicons-edit"></span>
                                    </button>
                                )}
                            />
                            <img src={image.url} alt={image.alt || heading} />
                        </div>
                    ) : (
                        <MediaUpload
                            onSelect={media => setAttributes({ image: media })}
                            type="image"
                            value={image}
                            render={({ open }) => (
                                <button onClick={open} className="components-button is-button is-default is-large framos-upload-btn">
                                    {__('Select Image', 'framos')}
                                </button>
                            )}
                        />
                    )}
                    <FormTokenField
                        value={imageClasses}
                        onChange={v => setAttributes({ imageClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the image.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
