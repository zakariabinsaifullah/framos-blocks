/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const {
        icon, // Icon attribute
        logoLink,
        logoClass
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <a
                href={logoLink ? logoLink?.url : '#'}
                className="text-gray-600 transition-all duration-500 hover:text-red-600"
                {...(logoLink?.opensInNewTab && {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                })}
            >
                {icon && icon.url && (
                    <img
                        src={icon.url}
                        alt={icon.alt || 'Icon'} // Fallback for alt text
                    />
                )}
            </a>
        </div>
    );
}
