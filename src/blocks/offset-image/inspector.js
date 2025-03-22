/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, SelectControl, TextControl, TextareaControl, Button } from '@wordpress/components';
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
        secondaryBtnIcon,
        secondaryButtonClasses,
        secondaryBtnIconClasses,
        offsetImage,
        offsetImageClasses
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
                    {secondaryBtnIcon && secondaryBtnIcon.url ? (
                        <span aria-hidden="true">
                            <Button onClick={() => setAttributes({ secondaryBtnIcon: null })}>Remove</Button>
                            <MediaUpload
                                onSelect={media => setAttributes({ secondaryBtnIcon: media })}
                                allowedTypes={['image']}
                                value={secondaryBtnIcon?.id}
                                render={({ open }) => <Button onClick={open}>Replace</Button>}
                            />
                            <img src={secondaryBtnIcon.url} alt={secondaryBtnIcon.alt} className="w-6" />
                        </span>
                    ) : (
                        <MediaPlaceholder
                            onSelect={media => {
                                setAttributes({ secondaryBtnIcon: media });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: 'Button Icon' }}
                        >
                            "Button Icon"
                        </MediaPlaceholder>
                    )}
                    <FormTokenField
                        value={secondaryBtnIconClasses}
                        onChange={v => setAttributes({ secondaryBtnIconClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the secondary button icon.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Image', 'framos')} initialOpen={false}>
                    {offsetImage && offsetImage?.url ? (
                        <>
                            <Button onClick={() => setAttributes({ offsetImage: null })}>Remove</Button>
                            <MediaUpload
                                onSelect={media => setAttributes({ offsetImage: media })}
                                allowedTypes={['image']}
                                value={offsetImage?.id}
                                render={({ open }) => <Button onClick={open}>Replace</Button>}
                            />
                            <img src={offsetImage.url} />
                        </>
                    ) : (
                        <MediaPlaceholder
                            onSelect={el => {
                                setAttributes({ offsetImage: el });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            value={offsetImage?.id}
                            labels={{ title: 'The Image' }}
                        />
                    )}
                    <FormTokenField
                        value={offsetImageClasses}
                        onChange={v => setAttributes({ offsetImageClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the image.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
