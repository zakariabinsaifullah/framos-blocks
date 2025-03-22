/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
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
                        <span aria-hidden="true">
                            <Button onClick={() => setAttributes({ icon: null })}>Remove</Button>
                            <MediaUpload
                                onSelect={media => setAttributes({ icon: media })}
                                allowedTypes={['image']}
                                value={icon?.id}
                                render={({ open }) => <Button onClick={open}>Replace</Button>}
                            />
                            <img src={icon.url} alt={icon.alt} className="w-6" />
                        </span>
                    ) : (
                        <MediaPlaceholder
                            onSelect={media => {
                                setAttributes({ icon: media });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: 'Button Icon' }}
                        ></MediaPlaceholder>
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
