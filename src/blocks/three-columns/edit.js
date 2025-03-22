/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const { containerClasses, heading, headingLevel, headingClasses, subTitle, subTitleClasses, text, textClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps();

    // Inner blocks
    const innerBlockProps = useInnerBlocksProps(
        {
            className: 'grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'
        },
        {
            allowedBlocks: ['framos/column-child'],
            template: [['framos/column-child'], ['framos/column-child'], ['framos/column-child']],
            renderAppender: false,
            templateLock: false
        }
    );

    // Append Button
    const childBlocks = select('core/block-editor').getBlocks(clientId);
    const appendBtn = () => {
        const newBlock = createBlock('framos/column-child', {});
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
                <div className="bg-white py-24 sm:py-32">
                    <div
                        className={classnames('mx-auto max-w-7xl px-6 lg:px-8', {
                            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                        })}
                    >
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <RichText
                                tagName={headingLevel}
                                className={classnames('text-base/7 font-semibold text-indigo-600', {
                                    [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                })}
                                value={heading}
                                onChange={v => setAttributes({ heading: v })}
                            />

                            <RichText
                                tagName="p"
                                className={classnames(
                                    'mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance',
                                    {
                                        [subTitleClasses.join(' ')]: subTitleClasses.length > 0 && subTitleClasses
                                    }
                                )}
                                value={subTitle}
                                onChange={v => setAttributes({ subTitle: v })}
                            />

                            <RichText
                                tagName="p"
                                className={classnames('mt-6 text-lg/8 text-gray-600', {
                                    [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                })}
                                value={text}
                                onChange={v => setAttributes({ text: v })}
                            />
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl {...innerBlockProps} />
                            <button
                                className="mt-4 text-base px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                onClick={appendBtn}
                            >
                                {__('Add New', 'framos')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
