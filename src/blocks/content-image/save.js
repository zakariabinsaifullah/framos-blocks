/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
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
        image,
        layoutClasses,
        contentSideClasses,
        imageSideClasses,
        changeOrder
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames('py-6', {
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <div className="mx-auto max-w-7xl">
                    <div className="relative isolate overflow-hidden py-20 sm:rounded-3xl sm:py-12 lg:py-24">
                        <div
                            className={classnames('mx-auto flex max-w-2xl flex-col lg:flex-row lg:max-w-none lg:items-center gap-8', {
                                'lg:flex-row-reverse': changeOrder,
                                [layoutClasses.join(' ')]: layoutClasses.length > 0 && layoutClasses
                            })}
                        >
                            <div
                                className={classnames('w-full lg:w-1/2', {
                                    [contentSideClasses.join(' ')]: contentSideClasses.length > 0 && contentSideClasses
                                })}
                            >
                                <RichText.Content
                                    tagName={headingLevel}
                                    className={classnames('text-balance text-3xl font-semibold tracking-tight sm:text-4xl', {
                                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                    })}
                                    value={heading}
                                />
                                <RichText.Content
                                    tagName="p"
                                    className={classnames('mt-6 text-base text-gray-600 dark:text-gray-300', {
                                        [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                    })}
                                    value={text}
                                />
                                <div className="max-w-xl lg:mt-2 lg:max-w-lg lg:border-t lg:border-gray-900/10 lg:pt-2">
                                    <dl className="framos-accordions mt-8 divide-y divide-gray-900/10">
                                        <InnerBlocks.Content />
                                    </dl>
                                </div>
                            </div>
                            <div
                                className={classnames('w-full lg:w-1/2', {
                                    [imageSideClasses.join(' ')]: imageSideClasses.length > 0 && imageSideClasses
                                })}
                            >
                                {image && image?.url && (
                                    <img
                                        src={image.url}
                                        alt={image.alt || heading}
                                        className="relative -z-20 w-full max-w-full rounded-xl shadow-xl ring-1 ring-white/10"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
