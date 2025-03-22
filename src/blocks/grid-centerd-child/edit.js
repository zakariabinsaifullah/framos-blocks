/**
 * WordPress dependencies
 */
import {
    BlockControls,
    RichText,
    useBlockProps,
    MediaPlaceholder,
    MediaUpload,
    innerBlockProps,
    useInnerBlocksProps
} from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
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
    const { listText, listClass, headingLevel, listDesc, liDesClass, icon, iconClass } = attributes;

    // Block Props
    const blockProps = useBlockProps();

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
                <div className="relative pl-16 ">
                    <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg ">
                            {icon && icon.url && (
                                <img
                                    src={icon.url}
                                    alt={icon.alt}
                                    className={classnames('size-6 text-white ', {
                                        [iconClass.join(' ')]: iconClass.length > 0 && iconClass
                                    })}
                                />
                            )}
                        </div>
                        <RichText
                            className={classnames('', {
                                [listClass.join(' ')]: listClass.length > 0 && listClass
                            })}
                            value={listText}
                            onChange={v => setAttributes({ listText: v })}
                            placeholder={__('Add a list text', 'framos')}
                        />
                    </dt>

                    <RichText
                        className={classnames('mt-2 text-base/7 text-gray-600', {
                            [liDesClass.join(' ')]: liDesClass.length > 0 && liDesClass
                        })}
                        value={listDesc}
                        onChange={v => setAttributes({ listDesc: v })}
                        placeholder={__('Add a listDesc', 'framos')}
                    />
                </div>
            </div>
        </Fragment>
    );
}
