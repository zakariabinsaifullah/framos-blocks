/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { HEADINGS } from '../../constants';

const Inspector = ({ attributes, setAttributes }) => {
    const { containerClasses, count, countClasses, desc, descClasses } = attributes;

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

                <PanelBody title={__('Count', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={count}
                        onChange={v => setAttributes({ count: v })}
                        placeholder={__('Add a count', 'framos')}
                    />
                    <FormTokenField
                        value={countClasses}
                        onChange={v => setAttributes({ countClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the count wrapper.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Description', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={desc}
                        onChange={v => setAttributes({ desc: v })}
                        placeholder={__('Add a Description', 'framos')}
                    />
                    <FormTokenField
                        value={descClasses}
                        onChange={v => setAttributes({ descClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Description Classes', 'framos')}
                        help={__('Add classes to the heading wrapper.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
