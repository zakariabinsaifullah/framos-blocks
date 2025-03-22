/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Save function
 */
export default function Save({ attributes }) {
    const { containerClasses, heading, headingLevel, headingClasses, text, textClasses, image } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: 'swiper-slide'
    });

    return (
        <Fragment>
            <div {...blockProps}>
                <div
                    className={classnames('border border-gray-100 p-6 rounded-lg h-full', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="flex mb-4">
                        {image && image.url && <img src={image.url} alt={image.alt} className={`wp-image-${image.id} w-1/3 h-auto`} />}
                    </div>
                    <RichText.Content
                        tagName={headingLevel}
                        className={classnames('text-xl font-semibold text-gray-800 mb-2', {
                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                        })}
                        value={heading}
                    />
                    <RichText.Content
                        tagName="p"
                        className={classnames('mx-auto mt-6 max-w-xl text-md md:text-lg leading-normal', {
                            [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                        })}
                        value={text}
                    />
                </div>
            </div>
        </Fragment>
    );
}
