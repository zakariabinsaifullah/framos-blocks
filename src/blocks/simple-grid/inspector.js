/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl, MediaUpload } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, SelectControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { HEADINGS } from '../../constants';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        containerClasses,
        subtitle,
        subtitleClasses,
        title,
        titleClass,
        desc,
        descClass,
        heading,
        photo,
        photoClass,
        headingLevel,
        primaryButtonClasses,
        primaryButtonText,
        primaryButtonUrl
    } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Container', 'framos')} initialOpen={false}>
                    <FormTokenField
                        value={containerClasses}
                        onChange={v => setAttributes({ containerClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the container', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Subtitle', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={subtitle}
                        onChange={v => setAttributes({ subtitle: v })}
                        placeholder={__('Add a subtitle', 'framos')}
                    />
                    <FormTokenField
                        value={subtitleClasses}
                        onChange={v => setAttributes({ subtitleClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the subtitle tag.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Title', 'framos')} initialOpen={false}>
                    <SelectControl
                        label={__('Select Tag', 'framos')}
                        value={headingLevel}
                        options={HEADINGS}
                        onChange={headingLevel => {
                            setAttributes({ headingLevel });
                        }}
                    />
                    <TextControl
                        label={__('Text', 'framos')}
                        value={title}
                        onChange={v => setAttributes({ title: v })}
                        placeholder={__('Add title', 'framos')}
                    />
                    <FormTokenField
                        value={titleClass}
                        onChange={v => setAttributes({ titleClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the title.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Description', 'framos')} initialOpen={false}>
                    <TextareaControl
                        value={desc}
                        onChange={v => setAttributes({ desc: v })}
                        placeholder={__('Add description', 'framos')}
                    />
                    <FormTokenField
                        value={descClass}
                        onChange={v => setAttributes({ descClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the title.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Button', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={primaryButtonText}
                        onChange={v => setAttributes({ primaryButtonText: v })}
                        placeholder={__('Primary button text', 'framos')}
                    />
                    <LinkControl
                        label={__('URL', 'framos')}
                        value={primaryButtonUrl}
                        onChange={v => {
                            setAttributes({ primaryButtonUrl: v });
                        }}
                    />
                    <FormTokenField
                        value={primaryButtonClasses}
                        onChange={v => setAttributes({ primaryButtonClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the primary button.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Photo', 'framos')} initialOpen={false}>
                    {photo && photo?.url ? (
                        <div className="framos-preview">
                            <MediaUpload
                                onSelect={media => setAttributes({ photo: media })}
                                type="image"
                                value={photo}
                                render={({ open }) => (
                                    <button className="framos-edit-btn" title={__('Edit Image', 'framos')} onClick={open}>
                                        <span className="dashicons dashicons-edit"></span>
                                    </button>
                                )}
                            />
                            <img src={photo.url} alt={photo.alt || heading} />
                        </div>
                    ) : (
                        <MediaUpload
                            onSelect={media => setAttributes({ photo: media })}
                            type="image"
                            value={photo}
                            render={({ open }) => (
                                <button onClick={open} className="components-button is-button is-default is-large framos-upload-btn">
                                    {__('Select Image', 'framos')}
                                </button>
                            )}
                        />
                    )}
                    <FormTokenField
                        value={photoClass}
                        onChange={v => setAttributes({ photoClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the photo.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
