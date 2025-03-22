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
        hiringText,
        hiringClasses,
        optionText,
        optionUrl,
        optionClasses,
        optionIcon,
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
        splitImage,
        splitImageClasses
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
                <PanelBody title={__('Hiring Option', 'framos')} initialOpen={false}>
                    <TextControl
                        label={__('Hiring Text', 'framos')}
                        value={hiringText}
                        onChange={v => setAttributes({ hiringText: v })}
                        placeholder={__('Add text', 'framos')}
                    />
                    <FormTokenField
                        value={hiringClasses}
                        onChange={v => setAttributes({ hiringClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Hiring Classes', 'framos')}
                        help={__('Add classes to the text.', 'framos')}
                    />
                    <TextControl
                        label={__('Option Text', 'framos')}
                        value={optionText}
                        onChange={v => setAttributes({ optionText: v })}
                        placeholder={__('Add text', 'framos')}
                    />
                    <LinkControl
                        label={__('URL', 'framos')}
                        value={optionUrl}
                        onChange={v => {
                            setAttributes({ optionUrl: v });
                        }}
                    />
                    <FormTokenField
                        value={optionClasses}
                        onChange={v => setAttributes({ optionClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Option Classes', 'framos')}
                        help={__('Add classes to the text.', 'framos')}
                    />
                    {optionIcon && optionIcon.url ? (
                        <span aria-hidden="true">
                            <Button onClick={() => setAttributes({ optionIcon: null })}>Remove</Button>
                            <MediaUpload
                                onSelect={media => setAttributes({ optionIcon: media })}
                                allowedTypes={['image']}
                                value={optionIcon?.id}
                                render={({ open }) => <Button onClick={open}>Replace</Button>}
                            />
                            <img src={optionIcon.url} alt={optionIcon.alt} className="w-6" />
                        </span>
                    ) : (
                        <MediaPlaceholder
                            onSelect={media => {
                                setAttributes({ optionIcon: media });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: 'Button Icon' }}
                        >
                            "Button Icon"
                        </MediaPlaceholder>
                    )}
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
                        label={__('Secondary Button Icon Classes', 'framos')}
                        help={__('Add classes to the icon.', 'framos')}
                    />
                </PanelBody>
                <PanelBody title={__('Image', 'framos')} initialOpen={false}>
                    {splitImage && splitImage?.url ? (
                        <>
                            <Button onClick={() => setAttributes({ splitImage: null })}>Remove</Button>
                            <MediaUpload
                                onSelect={media => setAttributes({ splitImage: media })}
                                allowedTypes={['image']}
                                value={splitImage?.id}
                                render={({ open }) => <Button onClick={open}>Replace</Button>}
                            />
                            <img src={splitImage.url} />
                        </>
                    ) : (
                        <MediaPlaceholder
                            onSelect={el => {
                                setAttributes({ splitImage: el });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            value={splitImage?.id}
                            labels={{ title: 'The Image' }}
                        />
                    )}
                    <FormTokenField
                        value={splitImageClasses}
                        onChange={v => setAttributes({ splitImageClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                        label={__('Classes', 'framos')}
                        help={__('Add classes to the image.', 'framos')}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
