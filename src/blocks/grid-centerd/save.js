/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { subtitle, subtitleClass, headingLevel, heading, headingClasses, desc, descClass, containerClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div
                className={classnames('bg-white py-24 sm:py-32', {
                    [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                })}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        {subtitle && (
                            <RichText.Content
                                tagName="h4"
                                className={classnames('text-base/7 font-semibold text-indigo-600', {
                                    [subtitleClass.join(' ')]: subtitleClass.length > 0 && subtitleClass
                                })}
                                value={subtitle}
                            />
                        )}
                        {heading && (
                            <RichText.Content
                                tagName={headingLevel || 'h2'}
                                className={classnames(
                                    'mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance',
                                    {
                                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                    }
                                )}
                                value={heading}
                            />
                        )}
                        {desc && (
                            <RichText.Content
                                tagName="p"
                                className={classnames('mt-6 text-lg/8 text-gray-600', {
                                    [descClass.join(' ')]: descClass.length > 0 && descClass
                                })}
                                value={desc}
                            />
                        )}
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <div className="grid grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
