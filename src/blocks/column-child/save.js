/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { title, titleClasses, text, textClasses, ButtonText, ButtonUrl, ButtonClasses, BtnIcon, BtnIconClasses, image, imageClasses } =
        attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <Fragment>
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
                        <RichText.Content
                            tagName="span"
                            className={classnames('', {
                                [titleClasses.join(' ')]: titleClasses.length > 0 && titleClasses
                            })}
                            value={title}
                        />
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                        <RichText.Content
                            tagName="p"
                            className={classnames('flex-auto', {
                                [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                            })}
                            value={text}
                        />
                        <p className="mt-6">
                            <a
                                href={ButtonUrl ? ButtonUrl?.url : '#'}
                                {...(ButtonUrl?.opensInNewTab && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                })}
                                className={classnames('text-sm/6 font-semibold text-indigo-600', {
                                    [ButtonClasses.join(' ')]: ButtonClasses.length > 0 && ButtonClasses
                                })}
                            >
                                <RichText.Content tagName="span" value={ButtonText} />
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
