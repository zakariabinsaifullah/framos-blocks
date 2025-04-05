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
    const { containerClasses, heading, headingLevel, headingClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps({
        className: classnames('', {
            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
        })
    });
    // Append Button
    const childBlocks = select('core/block-editor').getBlocks(clientId);
    const appendBtn = () => {
        const newBlock = createBlock('framos/faq-child', {});
        dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <BlockControls>
                <ToolbarGroup>
                    <DropdownMenu
                        icon="heading"
                        label={__('Tag', 'framos')}
                        controls={['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].map(level => ({
                            title: __(level === 'p' ? 'Paragraph' : `Heading ${level.slice(1)}`, 'framos'),
                            isActive: headingLevel === level,
                            onClick: () => setAttributes({ headingLevel: level })
                        }))}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <RichText
                    tagName={headingLevel}
                    className={classnames('text-3xl font-bold text-center text-gray-900 mb-6', {
                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                    })}
                    value={heading}
                    onChange={v => setAttributes({ heading: v })}
                />
                <InnerBlocks allowedBlocks={['framos/faq-child']} template={[['framos/faq-child']]} />
                <button className="mt-4 text-base px-4 py-2" onClick={appendBtn}>
                    {__('Add New', 'framos')}
                </button>
            </div>
        </Fragment>
    );
}
