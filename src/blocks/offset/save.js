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
        secondaryBtnIcon,
        offsetImage,
        offsetImageClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <Fragment>
            <div {...blockProps}>
                <div className="bg-white">
                    <div
                        className={classnames('relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14', {
                            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                        })}
                    >
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                            aria-hidden="true"
                        />
                        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                                <RichText.Content
                                    tagName={headingLevel}
                                    className={classnames(
                                        'max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto',
                                        {
                                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                        }
                                    )}
                                    value={heading}
                                />

                                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                    <RichText.Content
                                        tagName="p"
                                        className={classnames('text-pretty text-lg font-medium text-gray-500 sm:text-xl/8', {
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
                                                    [primaryButtonClasses.join(' ')]:
                                                        primaryButtonClasses.length > 0 && primaryButtonClasses
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
                                                [secondaryButtonClasses.join(' ')]:
                                                    secondaryButtonClasses.length > 0 && secondaryButtonClasses
                                            })}
                                        >
                                            <RichText.Content tagName="span" value={secondaryButtonText} />
                                            {secondaryBtnIcon && secondaryBtnIcon.url && (
                                                <span aria-hidden="true">
                                                    <img src={secondaryBtnIcon.url} alt={secondaryBtnIcon.alt} className="w-6" />
                                                </span>
                                            )}
                                        </a>
                                    </div>
                                </div>
                                {offsetImage ? (
                                    <img
                                        src={offsetImage.url}
                                        alt={offsetImage.alt}
                                        className={classnames(
                                            'mt-10 aspect-[6/5]  w-full max-w-lg  rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36',
                                            {
                                                [offsetImageClasses.join(' ')]: offsetImageClasses.length > 0 && offsetImageClasses
                                            }
                                        )}
                                    />
                                ) : (
                                    <img
                                        src="https://placehold.co/600x400"
                                        alt="image"
                                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
