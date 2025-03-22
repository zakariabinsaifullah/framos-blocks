import { BlockControls, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { subtitle, subtitleClass, headingLevel, heading, headingClasses, desc, descClass, containerClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps();
    // Inner blocks
    const innerBlockProps = useInnerBlocksProps(
        {
            className: 'grid grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'
        },
        {
            allowedBlocks: ['framos/grid-centerd-child'],
            template: [
                ['framos/grid-centerd-child'],
                ['framos/grid-centerd-child'],
                ['framos/grid-centerd-child'],
                ['framos/grid-centerd-child']
            ],
            renderAppender: false,
            templateLock: false
        }
    );

    // Append Button
    const childBlocks = select('core/block-editor').getBlocks(clientId);
    const appendBtn = () => {
        const newBlock = createBlock('framos/grid-centerd-child', {});
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
                    className={classnames('bg-white py-24 sm:py-32', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <RichText
                                tagName="h4"
                                className={classnames('text-base/7 font-semibold text-indigo-600', {
                                    [subtitleClass.join(' ')]: subtitleClass.length > 0 && subtitleClass
                                })}
                                value={subtitle}
                                onChange={v => setAttributes({ subtitle: v })}
                                placeholder={__('Add a subtitle', 'framos')}
                            />
                            <RichText
                                tagName={headingLevel}
                                className={classnames(
                                    'mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance',
                                    {
                                        [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                    }
                                )}
                                value={heading}
                                onChange={v => setAttributes({ heading: v })}
                                placeholder={__('Add a title', 'framos')}
                            />
                            <RichText
                                className={classnames('mt-6 text-lg/8 text-gray-600', {
                                    [descClass.join(' ')]: descClass.length > 0 && descClass
                                })}
                                value={desc}
                                onChange={v => setAttributes({ desc: v })}
                                placeholder={__('Add a description', 'framos')}
                            />
                        </div>
                        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <div {...innerBlockProps} />
                            <button onClick={appendBtn}>Add item</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
