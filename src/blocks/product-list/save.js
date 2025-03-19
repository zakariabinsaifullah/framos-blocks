/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { listText, listClass, icon, iconClass } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div class="relative pl-9">
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

                    <RichText.Content
                        className={classnames('inline', {
                            [listClass.join(' ')]: listClass.length > 0 && listClass
                        })}
                        value={listText}
                    />
                </div>
            </dl>
        </div>
    );
}
