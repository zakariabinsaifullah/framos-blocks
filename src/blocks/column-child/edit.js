/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';
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
                        {image && image.url && (
                            <img
                                src={image?.url}
                                alt={image?.alt}
                                className={classnames('size-5 flex-none text-indigo-600', {
                                    [imageClasses.join(' ')]: imageClasses.length > 0 && imageClasses
                                })}
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
                                href="#"
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
