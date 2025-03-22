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
        subTitle,
        subTitleClasses,
        text,
        textClasses,
        primaryButtonText,
        primaryButtonUrl,
        primaryButtonClasses,
        leftImage,
        leftImageClasses
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <Fragment>
            <div {...blockProps}>
                <div
                    className={classnames('relative bg-gray-900', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                        {leftImage && leftImage.url ? (
                            <img
                                className={classnames('size-full object-cover', {
                                    [leftImageClasses.join(' ')]: leftImageClasses.length > 0 && leftImageClasses
                                })}
                                src={leftImage.url}
                                alt={leftImage.alt}
                            />
                        ) : (
                            <img
                                src="https://placehold.co/400x300"
                                alt="image"
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            />
                        )}
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                            <RichText.Content
                                tagName={headingLevel}
                                className={classnames('text-base/7 font-semibold text-indigo-400', {
                                    [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                })}
                                value={heading}
                            />
                            <RichText.Content
                                tagName="p"
                                className={classnames('mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl', {
                                    [subTitleClasses.join(' ')]: subTitleClasses.length > 0 && subTitleClasses
                                })}
                                value={subTitle}
                            />

                            <RichText.Content
                                tagName="p"
                                className={classnames('mt-6 text-base/7 text-gray-300', {
                                    [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                })}
                                value={text}
                            />

                            <div className="mt-8">
                                <a
                                    href={primaryButtonUrl ? primaryButtonUrl?.url : '#'}
                                    {...(primaryButtonUrl?.opensInNewTab && {
                                        target: '_blank',
                                        rel: 'noopener noreferrer'
                                    })}
                                    className={classnames(
                                        'inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                                        {
                                            [primaryButtonClasses.join(' ')]: primaryButtonClasses.length > 0 && primaryButtonClasses
                                        }
                                    )}
                                >
                                    <RichText.Content tagName="span" value={primaryButtonText} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
