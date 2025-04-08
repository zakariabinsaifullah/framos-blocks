/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Save function
 */
export default function save({ attributes }) {
    const { image, title, description, containerClasses, imageClasses, titleClasses, descriptionClasses } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames('w-full flex justify-between transition-all duration-500 gap-5', {
                    [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                })
            })}
        >
            <div className="relative w-8 h-8">
                {image && image?.url && (
                    <img
                        src={image?.url}
                        alt={image?.alt}
                        className={classnames('tab-icon max-w-full w-8', {
                            [imageClasses.join(' ')]: imageClasses.length > 0 && imageClasses
                        })}
                    />
                )}
            </div>
            <div className="w-full">
                <RichText.Content
                    tagName="h4"
                    className={classnames('text-lg font-medium text-gray-900 leading-7 mb-2 capitalize transition-all duration-500 mt-0', {
                        [titleClasses.join(' ')]: titleClasses.length > 0 && titleClasses
                    })}
                    value={title}
                />
                <RichText.Content
                    tagName="p"
                    className={classnames('font-normal text-gray-500 transition-all duration-500 leading-[1.8rem] mb-0', {
                        [descriptionClasses.join(' ')]: descriptionClasses.length > 0 && descriptionClasses
                    })}
                    value={description}
                />
            </div>
        </div>
    );
}
