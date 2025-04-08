/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
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

    const HeadingTag = headingLevel || 'h2';

    return (
        <div {...blockProps}>
            <div
                className={classnames('bg-white', {
                    [containerClasses.join(' ')]: containerClasses?.length > 0 && containerClasses
                })}
            >
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#0098B0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <RichText.Content
                                tagName={HeadingTag}
                                className={classnames('text-balance text-3xl font-semibold tracking-tight text-white! sm:text-4xl', {
                                    [titleClass.join(' ')]: titleClass?.length > 0 && titleClass
                                })}
                                value={title}
                            />
                            <RichText.Content
                                tagName="div"
                                className={classnames('mt-6 text-pretty text-lg/8 text-gray-300', {
                                    [descClass.join(' ')]: descClass?.length > 0 && descClass
                                })}
                                value={desc}
                            />
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href={primaryButtonUrl ? primaryButtonUrl?.url : '#'}
                                    {...(primaryButtonUrl?.opensInNewTab && {
                                        target: '_blank',
                                        rel: 'noopener noreferrer'
                                    })}
                                    className={classnames(
                                        'rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 no-underline! shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                                        {
                                            [primaryButtonClasses.join(' ')]: primaryButtonClasses.length > 0 && primaryButtonClasses
                                        }
                                    )}
                                >
                                    <RichText.Content tagName="span" value={primaryButtonText} />
                                </a>

                                <a
                                    href={secondaryButtonUrl ? secondaryButtonUrl?.url : '#'}
                                    {...(secondaryButtonUrl?.opensInNewTab && {
                                        target: '_blank',
                                        rel: 'noopener noreferrer'
                                    })}
                                    className={classnames('text-sm/6 font-semibold text-white! no-underline!', {
                                        [secondaryButtonClasses.join(' ')]: secondaryButtonClasses.length > 0 && secondaryButtonClasses
                                    })}
                                >
                                    <RichText.Content tagName="span" value={secondaryButtonText} />
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            {photo && (
                                <img
                                    src={photo.url}
                                    alt={photo.alt || ''}
                                    className={classnames(
                                        'absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10',
                                        {
                                            [photoClass.join(' ')]: photoClass?.length > 0 && photoClass
                                        }
                                    )}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
