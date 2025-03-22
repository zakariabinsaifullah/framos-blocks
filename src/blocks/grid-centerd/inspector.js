/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, SelectControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { HEADINGS } from '../../constants';

const Inspector = ({ attributes, setAttributes }) => {
    const { containerClasses, subtitle, subtitleClass, heading, headingLevel, headingClasses, desc, descClass } = attributes;

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
                        value={subtitleClass}
                        onChange={v => setAttributes({ subtitleClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the subtitle tag.', 'framos')}
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
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the heading tag.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Description', 'framos')} initialOpen={false}>
                    <TextareaControl
                        label={__('Text', 'framos')}
                        value={desc}
                        onChange={v => setAttributes({ desc: v })}
                        placeholder={__('Add description', 'framos')}
                    />
                    <FormTokenField
                        value={descClass}
                        onChange={v => setAttributes({ descClass: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the text.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
