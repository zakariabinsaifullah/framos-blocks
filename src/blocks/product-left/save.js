/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { containerClasses, subtitle, subtitleClasses, title, titleClass, headingLevel, desc, descClass, photo, photoSize, photoClass } =
        attributes;

    // Block Props
    const blockProps = useBlockProps.save();
    // Inner blocks
    const innerBlockProps = useInnerBlocksProps.save({
        className: 'btns-group'
    });

    return (
        <div {...blockProps}>
            <div
                className={classnames('overflow-hidden bg-white py-24 sm:py-32', {
                    [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                })}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <RichText.Content
                                    tagName="h5"
                                    className={classnames('text-base/7 font-semibold text-indigo-600', {
                                        [subtitleClasses.join(' ')]: subtitleClasses.length > 0 && subtitleClasses
                                    })}
                                    value={subtitle}
                                />
                                <RichText.Content
                                    tagName={headingLevel}
                                    className={classnames(
                                        'mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl',
                                        {
                                            [titleClass.join(' ')]: titleClass.length > 0 && titleClass
                                        }
                                    )}
                                    value={title}
                                />
                                <RichText.Content
                                    tagName="p"
                                    className={classnames('mt-6 text-lg/8 text-gray-600', {
                                        [descClass.join(' ')]: descClass.length > 0 && descClass
                                    })}
                                    value={desc}
                                />
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    <div {...innerBlockProps} />
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            {photo && photo?.url && (
                                <figure>
                                    <img
                                        src={
                                            photo?.sizes && photoSize && photo?.sizes[photoSize]?.url
                                                ? photo.sizes[photoSize].url
                                                : photo?.url
                                        }
                                        alt={photo?.alt || title}
                                        className={classnames(
                                            'w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]',
                                            `wp-image-${photo?.id}`,
                                            {
                                                [photoClass.join(' ')]: photoClass.length > 0 && photoClass
                                            }
                                        )}
                                        width={2432}
                                        height={1442}
                                    />
                                </figure>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
