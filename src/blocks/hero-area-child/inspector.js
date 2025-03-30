/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';

import { FormTokenField, PanelBody, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { HEADINGS } from '../../constants';

const Inspector = ({ attributes, setAttributes }) => {
    const { logoLink, icon } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Link', 'framos')} initialOpen={false}>
                    <LinkControl
                        label={__('URL', 'framos')}
                        value={logoLink}
                        onChange={v => {
                            setAttributes({ logoLink: v });
                        }}
                    />
                </PanelBody>
                <PanelBody title={__('Icon', 'framos')} initialOpen={false}>
                    {icon && icon.url ? (
                        <span aria-hidden="true">
                            <Button onClick={() => setAttributes({ icon: null })}>Remove</Button>
                            <MediaUpload
                                onSelect={media => setAttributes({ icon: media })}
                                allowedTypes={['image']}
                                value={icon?.id}
                                render={({ open }) => <Button onClick={open}>Replace</Button>}
                            />
                            <img src={icon.url} alt={icon.alt} className="w-6" />
                        </span>
                    ) : (
                        <MediaPlaceholder
                            onSelect={media => {
                                setAttributes({ icon: media });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: 'Button Icon' }}
                        ></MediaPlaceholder>
                    )}
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
