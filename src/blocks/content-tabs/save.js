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
    const innerBlockProps = useInnerBlocksProps.save();

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
                            tagName={headingLevel}
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
                    <div {...innerBlockProps} />
                </div>
            </section>
        </div>
    );
}
