/**
 * WordPress dependencies
 */
import { BlockControls, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const { title, titleClasses, text, textClasses, ButtonText, ButtonUrl, ButtonClasses, BtnIcon, BtnIconClasses, image, imageClasses } =
        attributes;

    // Block Props
    const blockProps = useBlockProps();

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <BlockControls></BlockControls>
            <div {...blockProps}>
                <div className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                        {image && image.url ? (
                            <img
                                src={image?.url}
                                alt={image?.alt}
                                className={classnames('max-w-full size-5 flex-none text-indigo-600', {
                                    [imageClasses.join(' ')]: imageClasses.length > 0 && imageClasses
                                })}
                            />
                        ) : (
                            <MediaUpload
                                onSelect={media => setAttributes({ image: media })}
                                type="image"
                                value={image?.id}
                                render={({ open }) => (
                                    <button
                                        onClick={open}
                                        // className="absolute left-1 top-1 size-5 text-indigo-600"
                                        style={{
                                            width: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: 'none',
                                            background: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" color="#000000">
                                            <path
                                                d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101"
                                                stroke="#000000"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M12 21L12 13.5465M9 16L12 13L15 16" stroke="#000000" strokeWidth="1.5" />
                                        </svg>
                                    </button>
                                )}
                            />
                        )}

                        <RichText
                            tagName="span"
                            className={classnames('', {
                                [titleClasses.join(' ')]: titleClasses.length > 0 && titleClasses
                            })}
                            value={title}
                            onChange={value => setAttributes({ title: value })}
                            placeholder={__('Push to deploy', 'framos-blocks')}
                        />
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                        <RichText
                            tagName="p"
                            className={classnames('flex-auto', {
                                [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                            })}
                            value={text}
                            onChange={value => setAttributes({ text: value })}
                            placeholder={__('Text Here ', 'framos-blocks')}
                        />
                        <p className="mt-6">
                            <a
                                // href="#"
                                className={classnames('text-sm/6 font-semibold text-indigo-600', {
                                    [ButtonClasses.join(' ')]: ButtonClasses.length > 0 && ButtonClasses
                                })}
                            >
                                <RichText
                                    tagName="span"
                                    value={ButtonText}
                                    onChange={value => setAttributes({ ButtonText: value })}
                                    placeholder={__('Learn more', 'framos-blocks')}
                                />
                                {BtnIcon && BtnIcon.url && (
                                    <span aria-hidden="true">
                                        <img
                                            src={BtnIcon?.url}
                                            alt={BtnIcon?.alt}
                                            className={classnames('size-5 ', {
                                                [BtnIconClasses.join(' ')]: BtnIconClasses.length > 0 && BtnIconClasses
                                            })}
                                        />
                                    </span>
                                )}
                            </a>
                        </p>
                    </dd>
                </div>
            </div>
        </Fragment>
    );
}
