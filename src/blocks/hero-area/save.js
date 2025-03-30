/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const {
        containerClasses,
        subtitle,
        subtitleClasses,
        title,
        titleClass,
        headingLevel,
        desc,
        descClass,
        photo,
        photoClass,
        primaryButtonText,
        primaryButtonUrl,
        primaryButtonClasses,
        secondaryButtonText,
        secondaryButtonUrl,
        secondaryButtonClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();
    // Inner blocks
    const innerBlockProps = useInnerBlocksProps.save({
        className: 'flex flex-row lg:flex-wrap items-center justify-around md:justify-between gap-x-6 gap-y-9 py-10 flex-wrap'
    });

    return (
        <div {...blockProps}>
            <section
                className={classnames('relative pt-4 lg:pt-12 lg:pb-12', {
                    [containerClasses.join(' ')]: containerClasses?.length > 0 && containerClasses
                })}
            >
                <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
                    {subtitle && (
                        <RichText.Content
                            tagName="p"
                            className={classnames('text-sm font-medium text-black text-center mb-5', {
                                [subtitleClasses.join(' ')]: subtitleClasses?.length > 0 && subtitleClasses
                            })}
                            value={subtitle}
                        />
                    )}

                    {title && (
                        <RichText.Content
                            tagName={headingLevel || 'h2'}
                            className={classnames('font-manrope font-semibold text-5xl leading-tight text-center mb-5', {
                                [titleClass.join(' ')]: titleClass?.length > 0 && titleClass
                            })}
                            value={title}
                        />
                    )}

                    {desc && (
                        <RichText.Content
                            tagName="p"
                            className={classnames('text-sm font-normal text-gray-500 text-center mb-10 max-w-2xl mx-auto', {
                                [descClass.join(' ')]: descClass?.length > 0 && descClass
                            })}
                            value={desc}
                        />
                    )}

                    <div className="flex flex-col min-[550px]:flex-row items-center justify-center gap-8 pb-10 sm:pb-14">
                        {primaryButtonText && (
                            <a
                                href={primaryButtonUrl ? primaryButtonUrl.url : '#'}
                                {...(primaryButtonUrl?.opensInNewTab && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                })}
                                className={classnames(
                                    'bg-gray-900 max-[550px]:w-full text-white rounded-xl cursor-pointer font-medium text-center shadow-xs transition-all duration-500 py-3 px-8 text-sm hover:bg-gray-800',
                                    {
                                        [primaryButtonClasses.join(' ')]: primaryButtonClasses?.length > 0 && primaryButtonClasses
                                    }
                                )}
                            >
                                <RichText.Content tagName="span" value={primaryButtonText} />
                            </a>
                        )}

                        {secondaryButtonText && (
                            <a
                                href={secondaryButtonUrl ? secondaryButtonUrl.url : '#'}
                                {...(secondaryButtonUrl?.opensInNewTab && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                })}
                                className={classnames(
                                    'py-3 px-8 max-[550px]:w-full text-center rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-200 hover:shadow-gray-300 hover:border-gray-200',
                                    {
                                        [secondaryButtonClasses.join(' ')]: secondaryButtonClasses?.length > 0 && secondaryButtonClasses
                                    }
                                )}
                            >
                                <RichText.Content tagName="span" value={secondaryButtonText} />
                                <span aria-hidden="true">→</span>
                            </a>
                        )}
                    </div>

                    {photo && photo.url && (
                        <div className="p-2.5 border border-gray-300 rounded-3xl mb-6">
                            <img
                                src={photo.url}
                                alt={photo.alt || ''}
                                className={classnames('hidden sm:block w-full h-auto rounded-2xl object-cover', {
                                    [photoClass.join(' ')]: photoClass?.length > 0 && photoClass
                                })}
                            />
                        </div>
                    )}

                    <div {...innerBlockProps} />
                </div>
            </section>
        </div>
    );
}
