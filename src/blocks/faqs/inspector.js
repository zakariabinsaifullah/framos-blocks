/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { HEADINGS } from '../../constants';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        containerClasses,
        heading,
        headingLevel,
        headingClasses,
        subHeading,
        subHeadingLevel,
        subHeadingClasses,
        questionTag,
        questionClasses,
        questionTextClasses,
        answerClasses,
        answerTextClasses
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
                        label={__('Heading Classes', 'framos')}
                        help={__('Add classes to the heading wrapper.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Sub Heading', 'framos')} initialOpen={false}>
                    <SelectControl
                        label={__('Select Tag', 'framos')}
                        value={subHeadingLevel}
                        options={HEADINGS}
                        onChange={subHeadingLevel => {
                            setAttributes({ subHeadingLevel });
                        }}
                    />
                    <TextControl
                        label={__('Text', 'framos')}
                        value={subHeading}
                        onChange={v => setAttributes({ subHeading: v })}
                        placeholder={__('Add a sub heading', 'framos')}
                    />
                    <FormTokenField
                        value={subHeadingClasses}
                        onChange={v => setAttributes({ subHeadingClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Sub Heading Classes', 'framos')}
                        help={__('Add classes to the sub heading wrapper.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Question', 'framos')} initialOpen={false}>
                    <SelectControl
                        label={__('Select Tag', 'framos')}
                        value={questionTag}
                        options={HEADINGS}
                        onChange={questionTag => {
                            setAttributes({ questionTag });
                        }}
                    />
                    <FormTokenField
                        value={questionClasses}
                        onChange={v => setAttributes({ questionClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Question Classes', 'framos')}
                        help={__('Add classes to the question wrapper.', 'framos')}
                    />
                    <FormTokenField
                        value={questionTextClasses}
                        onChange={v => setAttributes({ questionTextClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Question Text Classes', 'framos')}
                        help={__('Add classes to the question text.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Answer', 'framos')} initialOpen={false}>
                    <FormTokenField
                        value={answerClasses}
                        onChange={v => setAttributes({ answerClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Answer Classes', 'framos')}
                        help={__('Add classes to the answer wrapper.', 'framos')}
                    />
                    <FormTokenField
                        value={answerTextClasses}
                        onChange={v => setAttributes({ answerTextClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Answer Text Classes', 'framos')}
                        help={__('Add classes to the answer text.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
