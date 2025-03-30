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
    const { containerClasses, heading, headingLevel, headingClasses, title, titleClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    // Inner blocks
    const innerBlockProps = useInnerBlocksProps.save({
        className: 'mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4',
       
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <div
                    className={classnames(' py-24 sm:py-32', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="text-center">
                                <RichText.Content
                                    tagName={headingLevel}
                                    className={classnames('text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl', {
                                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                    })}
                                    value={heading}
                                />
                                <RichText.Content
                                    tagName="p"
                                    className={classnames('mt-4 text-lg/8 text-gray-600', {
                                        [titleClasses.join(' ')]: titleClasses.length > 0 && titleClasses
                                    })}
                                    value={title}
                                />
                            </div>
                            <div {...innerBlockProps} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
