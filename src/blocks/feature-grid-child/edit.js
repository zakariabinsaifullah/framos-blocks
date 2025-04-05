/**
 * WordPress dependencies
 */
import { BlockControls, InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { Fragment, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import classnames from 'classnames';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const { containerClasses, count, countClasses, desc, descClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps();

    // Append Button
    const childBlocks = select('core/block-editor').getBlocks(clientId);
    const appendBtn = () => {
        const newBlock = createBlock('framos/faq-child', {});
        dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />

            <div {...blockProps}>
                <div
                    className={classnames('flex flex-col bg-gray-400/5 p-8', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <RichText
                        tagName="dt"
                        className={classnames('text-sm/6 font-semibold text-gray-600', {
                            [descClasses.join(' ')]: descClasses.length > 0 && descClasses
                        })}
                        value={desc}
                        onChange={value => setAttributes({ desc: value })}
                    />

                    <RichText
                        tagName="dd"
                        className={classnames('order-first text-3xl font-semibold tracking-tight text-gray-900', {
                            [countClasses.join(' ')]: countClasses.length > 0 && countClasses
                        })}
                        value={count}
                        onChange={value => setAttributes({ count: value })}
                    />
                </div>
            </div>
        </Fragment>
    );
}
