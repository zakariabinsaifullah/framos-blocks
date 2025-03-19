import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
    const {
        containerClasses,
        subtitle,
        SubtitleLevel,
        subtitleClasses,
        title,
        titleClass,
        desc,
        descClass,
        photo,
        photoSize,
        photoClass,
        headingLevel
    } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div
                className={classnames('overflow-hidden bg-white py-24 sm:py-32', {
                    [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                })}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <RichText.Content
                                    tagName={SubtitleLevel}
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
                                    className={classnames('mt-6 text-lg/8 text-gray-600', {
                                        [descClass.join(' ')]: descClass.length > 0 && descClass
                                    })}
                                    value={desc}
                                />
                            </div>
                            <InnerBlocks.Content />
                        </div>
                        {photo && photo?.url && (
                            <figure>
                                <img
                                    src={
                                        photo?.sizes && photoSize && photo?.sizes[photoSize]?.url ? photo.sizes[photoSize].url : photo?.url
                                    }
                                    alt={photo?.alt || title}
                                    className={classnames(
                                        'w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0',
                                        `wp-image-${photo?.id}`,
                                        {
                                            [photoClass.join(' ')]: photoClass.length > 0 && photoClass
                                        }
                                    )}
                                />
                            </figure>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
