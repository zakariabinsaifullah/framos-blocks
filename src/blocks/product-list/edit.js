/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const { listText, listClass, icon, iconClass } = attributes;

    // Block Props
    const blockProps = useBlockProps();

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <div {...blockProps}>
                <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9 ">
                        <dt class="inline font-semibold text-gray-900">
                            {icon && icon.url && (
                                <img
                                    src={icon.url}
                                    alt={icon.alt}
                                    className={classnames('absolute left-1 top-1 size-5 text-indigo-600', {
                                        [iconClass.join(' ')]: iconClass.length > 0 && iconClass
                                    })}
                                />
                            )}
                        </dt>

                        <RichText
                            className={classnames('inline', {
                                [listClass.join(' ')]: listClass.length > 0 && listClass
                            })}
                            value={listText}
                            onChange={v => setAttributes({ listText: v })}
                            placeholder={__('Add a list', 'framos')}
                        />
                    </div>
                </dl>
            </div>
        </Fragment>
    );
}
