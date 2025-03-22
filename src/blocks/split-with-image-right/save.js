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
        secondaryButtonClasses,
        splitImage,
        splitImageClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <Fragment>
            <div {...blockProps}>
                <div className="bg-white">
                    <div
                        className={classnames('relative isolate pt-14', {
                            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                        })}
                    >
                        <svg
                            className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                                <path
                                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                    strokeWidth={0}
                                />
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                        </svg>

                        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                                <div className="flex">
                                    <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        <RichText.Content
                                            tagName="span"
                                            className={classnames('font-semibold text-indigo-600', {
                                                [hiringClasses.join(' ')]: hiringClasses.length > 0 && hiringClasses
                                            })}
                                            value={hiringText}
                                        />
                                        <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                                        <a
                                            href={optionUrl ? optionUrl?.url : '#'}
                                            {...(optionUrl?.opensInNewTab && {
                                                target: '_blank',
                                                rel: 'noopener noreferrer'
                                            })}
                                            className={classnames('flex items-center gap-x-1')}
                                        >
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <RichText.Content
                                                tagName="p"
                                                className={classnames(' ', {
                                                    [optionClasses.join(' ')]: optionClasses.length > 0 && optionClasses
                                                })}
                                                value={optionText}
                                            />

                                            {optionIcon && optionIcon.url && (
                                                <img className="size-5" src={optionIcon.url} alt={optionIcon.alt} />
                                            )}
                                        </a>
                                    </div>
                                </div>

                                <RichText.Content
                                    tagName={headingLevel}
                                    className={classnames(
                                        'mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl',
                                        {
                                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                        }
                                    )}
                                    value={heading}
                                />

                                <RichText.Content
                                    tagName="p"
                                    className={classnames('mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8', {
                                        [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                    })}
                                    value={text}
                                />
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href={primaryButtonUrl ? primaryButtonUrl?.url : '#'}
                                        {...(primaryButtonUrl?.opensInNewTab && {
                                            target: '_blank',
                                            rel: 'noopener noreferrer'
                                        })}
                                        className={classnames(
                                            'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
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
                                        className={classnames('text-sm/6 font-semibold text-gray-900', {
                                            [secondaryButtonClasses.join(' ')]: secondaryButtonClasses.length > 0 && secondaryButtonClasses
                                        })}
                                    >
                                        <RichText.Content tagName="span" value={secondaryButtonText} />
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                                <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                                    <defs>
                                        <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                            <rect width={316} height={684} rx={36} />
                                        </clipPath>
                                    </defs>
                                    <path
                                        fill="#4B5563"
                                        d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                    />
                                    <path
                                        fill="#343E4E"
                                        d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                                    />
                                    <foreignObject
                                        width={316}
                                        height={684}
                                        transform="translate(24 24)"
                                        clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                                    >
                                        {splitImage && splitImage.url && (
                                            <img
                                                className={classnames('absolute inset-0 -z-10 size-full', {
                                                    [splitImageClasses.join(' ')]: splitImageClasses.length > 0 && splitImageClasses
                                                })}
                                                src={splitImage.url}
                                                alt={splitImage.alt}
                                            />
                                        )}
                                    </foreignObject>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
