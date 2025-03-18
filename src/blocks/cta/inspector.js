/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, SelectControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { HEADINGS } from '../../constants';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        containerClasses,
        heading,
        headingLevel,
        headingClasses,
        text,
        textClasses,
        primaryButtonText,
        primaryButtonUrl,
        primaryButtonClasses,
        secondaryButtonText,
        secondaryButtonUrl,
        secondaryButtonClasses
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
                <PanelBody title={__('Primary Button', 'framos')} initialOpen={false}>
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
                <PanelBody title={__('Secondary Button', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Text', 'framos')}
                        value={secondaryButtonText}
                        onChange={v => setAttributes({ secondaryButtonText: v })}
                        placeholder={__('Secondary button text', 'framos')}
                    />
                    <LinkControl
                        label={__('URL', 'framos')}
                        value={secondaryButtonUrl}
                        onChange={v => {
                            setAttributes({ secondaryButtonUrl: v });
                        }}
                    />
                    <FormTokenField
                        value={secondaryButtonClasses}
                        onChange={v => setAttributes({ secondaryButtonClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the secondary button.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
