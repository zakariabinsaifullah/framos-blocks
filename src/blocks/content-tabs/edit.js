/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
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
    const blockProps = useBlockProps();
    // Inner blocks
    const innerBlockProps = useInnerBlocksProps(
        {},
        {
            allowedBlocks: ['framos/tabs'],
            template: [['framos/tabs']],
            renderAppender: false,
            templateLock: 'all'
        }
    );

    // Append Button
    const appendBtn = () => {
        const newBlock = createBlock('framos/logo', {});
        dispatch('core/block-editor').insertBlock(newBlock, select('core/block-editor').getBlockOrder(clientId).length, clientId);
    };

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />

            <div {...blockProps}>
                <section
                    className={classnames('relative pt-4 lg:pt-12 lg:pb-12', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 box-border">
                        <RichText
                            tagName="P"
                            className={classnames('text-sm font-medium text-black text-center mb-5', {
                                [subtitleClasses.join(' ')]: subtitleClasses.length > 0 && subtitleClasses
                            })}
                            value={subtitle}
                            onChange={v => setAttributes({ subtitle: v })}
                            placeholder={__('Add a subtitle', 'framos')}
                        />
                        <RichText
                            tagName={headingLevel}
                            className={classnames('font-manrope font-semibold text-5xl leading-tight text-center mb-5', {
                                [titleClass.join(' ')]: titleClass.length > 0 && titleClass
                            })}
                            value={title}
                            onChange={v => setAttributes({ title: v })}
                            placeholder={__('Add a title', 'framos')}
                        />
                        <RichText
                            className={classnames('text-sm font-normal text-gray-500 text-center mb-10 max-w-2xl mx-auto', {
                                [descClass.join(' ')]: descClass.length > 0 && descClass
                            })}
                            value={desc}
                            onChange={v => setAttributes({ desc: v })}
                            placeholder={__('Add a description', 'framos')}
                        />
                        <div {...innerBlockProps} />
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
