/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, SelectControl, TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
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
        image,
        layoutClasses,
        contentSideClasses,
        imageSideClasses,
        changeOrder
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
                <PanelBody title={__('Layout', 'framos')} initialOpen={false}>
                    <ToggleControl
                        label={__('Change Order', 'framos')}
                        checked={changeOrder}
                        onChange={v => setAttributes({ changeOrder: v })}
                        help={__('Change the order of the content and image sides.', 'framos')}
                    />
                    <FormTokenField
                        value={layoutClasses}
                        onChange={v => setAttributes({ layoutClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Flex Classes', 'framos')}
                        help={__('Add classes to the flex layout', 'framos')}
                    />
                    <FormTokenField
                        value={contentSideClasses}
                        onChange={v => setAttributes({ contentSideClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Content Side Classes', 'framos')}
                        help={__('Add classes to the content side', 'framos')}
                    />
                    <FormTokenField
                        value={imageSideClasses}
                        onChange={v => setAttributes({ imageSideClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Image Side Classes', 'framos')}
                        help={__('Add classes to the image side', 'framos')}
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
                <PanelBody title={__('Image', 'framos')} initialOpen={false}>
                    {image && image?.url ? (
                        <div className="framos-preview">
                            <MediaUpload
                                onSelect={media => setAttributes({ image: media })}
                                type="image"
                                value={image?.id}
                                render={({ open }) => (
                                    <button className="framos-edit-btn" title={__('Edit Image', 'framos')} onClick={open}>
                                        <span className="dashicons dashicons-edit"></span>
                                    </button>
                                )}
                            />
                            <img src={image.url} alt={image.alt || heading} />
                        </div>
                    ) : (
                        <MediaUpload
                            onSelect={media => setAttributes({ image: media })}
                            type="image"
                            value={image}
                            render={({ open }) => (
                                <button onClick={open} className="components-button is-button is-default is-large framos-upload-btn">
                                    {__('Select Image', 'framos')}
                                </button>
                            )}
                        />
                    )}
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
