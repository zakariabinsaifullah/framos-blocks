/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ({ attributes, setAttributes }) => {
    const { listText, listClass, headingLevel, listDesc, liDesClass, icon, iconClass } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Title ', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={listText}
                        onChange={v => setAttributes({ listText: v })}
                        placeholder={__('Add a list Text', 'framos')}
                    />
                    <FormTokenField
                        value={listClass}
                        onChange={v => setAttributes({ listClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the list text tag.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Description ', 'framos')} initialOpen={false}>
                    <TextareaControl
                        label={__('Text', 'framos')}
                        value={listDesc}
                        onChange={v => setAttributes({ listDesc: v })}
                        placeholder={__('Add a list description', 'framos')}
                    />
                    <FormTokenField
                        value={liDesClass}
                        onChange={v => setAttributes({ liDesClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the list desc tag.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Icon', 'framos')} initialOpen={false}>
                    {icon && icon.url ? (
                        <div className="framos-preview">
                            <MediaUpload
                                onSelect={media => setAttributes({ icon: media })}
                                type="image"
                                value={icon?.id}
                                render={({ open }) => (
                                    <button className="framos-edit-btn" title={__('Edit Image', 'framos')} onClick={open}>
                                        <span className="dashicons dashicons-edit"></span>
                                    </button>
                                )}
                            />
                            <img src={icon.url} alt={icon.alt} />
                        </div>
                    ) : (
                        <MediaUpload
                            onSelect={media => setAttributes({ icon: media })}
                            type="image"
                            value={icon}
                            render={({ open }) => (
                                <button onClick={open} className="components-button is-button is-default is-large framos-upload-btn">
                                    {__('Select Icon', 'framos')}
                                </button>
                            )}
                        />
                    )}
                    <FormTokenField
                        value={iconClass}
                        onChange={v => setAttributes({ iconClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the list..', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
