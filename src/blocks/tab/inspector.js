/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { FormTokenField, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ({ attributes, setAttributes }) => {
    const { containerClasses } = attributes;

    return (
        <InspectorControls>
            <PanelBody>
                <FormTokenField
                    value={containerClasses}
                    onChange={v => setAttributes({ containerClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Wrapper Classes', 'framos-custom-blocks')}
                    help={__('Add classes to the grid', 'framos-custom-blocks')}
                />
            </PanelBody>
        </InspectorControls>
    );
};

export default Inspector;
