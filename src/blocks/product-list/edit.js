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
    const { listText, listClass } = attributes;

    // Block Props
    const blockProps = useBlockProps();

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <div {...blockProps}>
                <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">
                            <svg
                                class="absolute left-1 top-1 size-5 text-indigo-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
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
