/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import classnames from 'classnames';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const { containerClasses, heading, headingLevel, headingClasses, title, titleClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps();

    const innerBlockProps = useInnerBlocksProps(
        {
            className: 'mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'
        },
        {
            allowedBlocks: ['framos/feature-grid-child'],
            template: [
                ['framos/feature-grid-child'],
                [
                    'framos/feature-grid-child',
                    {
                        count: '3%',
                        desc: 'Flat platform fee'
                    }
                ],
                [
                    'framos/feature-grid-child',
                    {
                        count: '99.9%',
                        desc: 'Uptime guarantee'
                    }
                ],
                [
                    'framos/feature-grid-child',
                    {
                        count: '$70M',
                        desc: 'Paid out to creators'
                    }
                ]
            ],
            renderAppender: false,
            templateLock: false
        }
    );

    // Append Button
    const childBlocks = select('core/block-editor').getBlocks(clientId);
    const appendBtn = () => {
        const newBlock = createBlock('framos/feature-grid-child', {});
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
                <div
                    className={classnames('py-24 sm:py-32', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="text-center">
                                <RichText
                                    tagName={headingLevel}
                                    className={classnames('text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl', {
                                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                    })}
                                    value={heading}
                                    onChange={value => setAttributes({ heading: value })}
                                />

                                <RichText
                                    tagName="p"
                                    className={classnames('mt-4 text-lg/8 text-gray-600', {
                                        [titleClasses.join(' ')]: titleClasses.length > 0 && titleClasses
                                    })}
                                    value={title}
                                    onChange={value => setAttributes({ title: value })}
                                />
                            </div>

                            <div {...innerBlockProps} />

                            <button className="mt-4 text-base px-4 py-2" onClick={appendBtn}>
                                {__('Add New', 'framos')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
