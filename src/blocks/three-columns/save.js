/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { containerClasses, heading, headingLevel, headingClasses, subTitle, subTitleClasses, text, textClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    // Inner blocks
    const innerBlockProps = useInnerBlocksProps.save({
        className: 'grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <div className="bg-white py-24 sm:py-32">
                    <div
                        className={classnames('mx-auto max-w-7xl px-6 lg:px-8', {
                            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                        })}
                    >
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <RichText.Content
                                tagName={headingLevel}
                                className={classnames('text-base/7 font-semibold text-indigo-600', {
                                    [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                })}
                                value={heading}
                            />

                            <RichText.Content
                                tagName="p"
                                className={classnames(
                                    'mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance',
                                    {
                                        [subTitleClasses.join(' ')]: subTitleClasses.length > 0 && subTitleClasses
                                    }
                                )}
                                value={subTitle}
                            />
                            <RichText.Content
                                tagName="p"
                                className={classnames('mt-6 text-lg/8 text-gray-600', {
                                    [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                })}
                                value={text}
                            />
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl {...innerBlockProps} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
