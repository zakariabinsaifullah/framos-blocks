/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

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
        sliderTitle,
        sliderTitleTag,
        sliderTitleClasses,
        sliderText,
        sliderTextClasses,
        sliderNavWrapperClasses,
        prevClasses,
        nextClasses
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
                <PanelBody title={__('Slider Controls Wrapper', 'framos')} initialOpen={false}>
                    <FormTokenField
                        value={sliderNavWrapperClasses}
                        onChange={v => setAttributes({ sliderNavWrapperClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the slider controls wrapper.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Slider Heading', 'framos')} initialOpen={false}>
                    <SelectControl
                        label={__('Select Tag', 'framos')}
                        value={sliderTitleTag}
                        options={HEADINGS}
                        onChange={headingLevel => {
                            setAttributes({ sliderTitleTag: headingLevel });
                        }}
                    />
                    <TextControl
                        label={__('Text', 'framos')}
                        value={sliderTitle}
                        onChange={v => setAttributes({ sliderTitle: v })}
                        placeholder={__('Add a heading', 'framos')}
                    />
                    <FormTokenField
                        value={sliderTitleClasses}
                        onChange={v => setAttributes({ sliderTitleClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the heading tag.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Slider Text', 'framos')} initialOpen={false}>
                    <TextareaControl
                        label={__('Text', 'framos')}
                        value={sliderText}
                        onChange={v => setAttributes({ sliderText: v })}
                        placeholder={__('Add text', 'framos')}
                    />
                    <FormTokenField
                        value={sliderTextClasses}
                        onChange={v => setAttributes({ sliderTextClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the text.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Slider Navigation', 'framos')} initialOpen={false}>
                    <FormTokenField
                        value={prevClasses}
                        onChange={v => setAttributes({ prevClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Prev Classes', 'framos')}
                        help={__('Add classes to the prev button.', 'framos')}
                    />
                    <FormTokenField
                        value={nextClasses}
                        onChange={v => setAttributes({ nextClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Next Classes', 'framos')}
                        help={__('Add classes to the next button.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
