/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames';

/**
 * Save function
 */

export default function save({ attributes }) {
    const { tabId, tabParentId, containerClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: 'hidden'
    });

    return (
        <div {...blockProps} data-tab-id={tabId} data-tab-parent-id={tabParentId}>
            <div
                className={classnames('single-tab w-full! grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 lg:w-2/3', {
                    [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                })}
                data-tab-id={tabId}
                data-tab-parent-id={tabParentId}
            >
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
