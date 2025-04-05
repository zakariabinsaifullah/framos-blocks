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
    const { containerClasses, heading, headingLevel, headingClasses, headingTextClasses, bodyClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames('', {
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <RichText.Content
                    tagName={headingLevel}
                    className={classnames('text-3xl font-bold text-center text-gray-900 mb-6', {
                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                    })}
                    value={heading}
                />
                <InnerBlocks.Content />
            </div>
        </Fragment>
    );
}
