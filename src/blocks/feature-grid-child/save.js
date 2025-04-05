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
    const { containerClasses, count, countClasses, desc, descClasses } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <Fragment>
            <div {...blockProps}>
                <div
                    className={classnames('flex flex-col bg-gray-400/5 p-8', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <RichText.Content
                        tagName="dt"
                        className={classnames('text-sm/6 font-semibold text-gray-600', {
                            [descClasses.join(' ')]: descClasses.length > 0 && descClasses
                        })}
                        value={desc}
                    />

                    <RichText.Content
                        tagName="dd"
                        className={classnames('order-first text-3xl font-semibold tracking-tight text-gray-900', {
                            [countClasses.join(' ')]: countClasses.length > 0 && countClasses
                        })}
                        value={count}
                    />
                </div>
            </div>
        </Fragment>
    );
}
