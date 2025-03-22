/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { listText, listClass, headingLevel, listDesc, liDesClass, icon, iconClass } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg">
                        {icon && icon.url && (
                            <img
                                src={icon.url}
                                alt={icon.alt}
                                className={classnames('size-6 text-white', {
                                    [iconClass.join(' ')]: iconClass.length > 0 && iconClass
                                })}
                            />
                        )}
                    </div>
                    {listText && (
                        <RichText.Content
                            tagName="dd"
                            className={classnames('', {
                                [listClass.join(' ')]: listClass.length > 0 && listClass
                            })}
                            value={listText}
                        />
                    )}
                </dt>

                {listDesc && (
                    <RichText.Content
                        tagName="dd"
                        className={classnames('mt-2 text-base/7 text-gray-600', {
                            [liDesClass.join(' ')]: liDesClass.length > 0 && liDesClass
                        })}
                        value={listDesc}
                    />
                )}
            </div>
        </div>
    );
}
