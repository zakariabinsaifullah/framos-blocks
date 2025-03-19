/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl, MediaUpload } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ({ attributes, setAttributes }) => {
    const { listText, listClass } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('List Item', 'framos')} initialOpen={false}>
                    <TextareaControl
                        label={__('text', 'framos')}
                        value={listText}
                        onChange={v => setAttributes({ listText: v })}
                        placeholder={__('Add list title', 'framos')}
                    />
                    <FormTokenField
                        value={listClass}
                        onChange={v => setAttributes({ listClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the list..', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
