/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { FormTokenField, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ({ attributes, setAttributes }) => {
    const { image, containerClasses, imageClasses, titleClasses, descriptionClasses } = attributes;

    return (
        <InspectorControls>
            <PanelBody title={__('Container', 'framos-custom-blocks')} initialOpen={false}>
                <FormTokenField
                    value={containerClasses}
                    onChange={v => setAttributes({ containerClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Classes', 'framos-custom-blocks')}
                    help={__('Add classes to the container', 'framos-custom-blocks')}
                />
            </PanelBody>
            <PanelBody title={__('Image', 'framos-custom-blocks')} initialOpen={false}>
                <FormTokenField
                    value={imageClasses}
                    onChange={v => setAttributes({ imageClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Classes', 'framos-custom-blocks')}
                    help={__('Add classes to the image', 'framos-custom-blocks')}
                />
            </PanelBody>
            <PanelBody title={__('Title', 'framos-custom-blocks')} initialOpen={false}>
                <FormTokenField
                    value={titleClasses}
                    onChange={v => setAttributes({ titleClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Classes', 'framos-custom-blocks')}
                    help={__('Add classes to the title', 'framos-custom-blocks')}
                />
            </PanelBody>
            <PanelBody title={__('Description', 'framos-custom-blocks')} initialOpen={false}>
                <FormTokenField
                    value={descriptionClasses}
                    onChange={v => setAttributes({ descriptionClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Classes', 'framos-custom-blocks')}
                    help={__('Add classes to the description', 'framos-custom-blocks')}
                />
            </PanelBody>
        </InspectorControls>
    );
};

export default Inspector;
