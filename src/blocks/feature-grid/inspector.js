/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { HEADINGS } from '../../constants';

const Inspector = ({ attributes, setAttributes }) => {
    const { containerClasses, heading, headingLevel, headingClasses, title, titleClasses } = attributes;

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
                <PanelBody title={__('Heading', 'framos')} initialOpen={false}>
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
                        value={heading}
                        onChange={v => setAttributes({ heading: v })}
                        placeholder={__('Add a heading', 'framos')}
                    />
                    <FormTokenField
                        value={headingClasses}
                        onChange={v => setAttributes({ headingClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Heading Classes', 'framos')}
                        help={__('Add classes to the heading wrapper.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Sub Heading', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={title}
                        onChange={v => setAttributes({ title: v })}
                        placeholder={__('Add a title', 'framos')}
                    />
                    <FormTokenField
                        value={titleClasses}
                        onChange={v => setAttributes({ titleClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the text.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
