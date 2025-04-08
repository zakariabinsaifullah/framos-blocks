/**
 * WordPress dependencies
 */
import { MediaPlaceholder, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
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
        {
            className:
                'flex flex-row lg:flex-nowrap items-center justify-around md:justify-between gap-x-6 gap-y-9 py-10 flex-wrap max-w-full'
        },
        {
            allowedBlocks: ['framos/logo'],
            template: [['framos/logo'], ['framos/logo'], ['framos/logo'], ['framos/logo']],
            renderAppender: false,
            templateLock: false
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
                        <div className="flex flex-col min-[550px]:flex-row items-center justify-center gap-8 pb-10 sm:pb-14">
                            <a
                                // href="#"
                                className={classnames(
                                    'bg-gray-900 max-[550px]:w-full text-white! no-underline! rounded-xl cursor-pointer font-medium text-center shadow-xs transition-all duration-500 py-3 px-8 text-sm hover:bg-gray-800',
                                    {
                                        [primaryButtonClasses.join(' ')]: primaryButtonClasses.length > 0 && primaryButtonClasses
                                    }
                                )}
                            >
                                <RichText
                                    tagName="span"
                                    value={primaryButtonText}
                                    onChange={v => setAttributes({ primaryButtonText: v })}
                                    placeholder={__('button text', 'framos')}
                                />
                            </a>
                            <a
                                // href="#"
                                className={classnames(
                                    'py-3 px-8 max-[550px]:w-full text-center no-underline! rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-200 hover:shadow-gray-300 hover:border-gray-200',
                                    {
                                        [secondaryButtonClasses.join(' ')]: secondaryButtonClasses.length > 0 && secondaryButtonClasses
                                    }
                                )}
                            >
                                <RichText
                                    tagName="span"
                                    value={secondaryButtonText}
                                    onChange={v => setAttributes({ secondaryButtonText: v })}
                                    placeholder={__('button text', 'framos')}
                                />
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <div className="p-2.5 border border-gray-300 rounded-3xl mb-6 box-border max-w-full">
                            {photo ? (
                                <img
                                    src={photo.url}
                                    alt={photo.alt}
                                    className={classnames('hidden sm:block w-full h-auto rounded-2xl object-cover max-w-full', {
                                        [photoClass.join(' ')]: photoClass.length > 0 && photoClass
                                    })}
                                />
                            ) : (
                                <MediaPlaceholder
                                    onSelect={el => {
                                        setAttributes({ photo: el });
                                    }}
                                    allowedTypes={['image']}
                                    multiple={false}
                                    value={photo?.id}
                                    labels={{ title: __('Upload Image', 'framos') }}
                                />
                            )}
                        </div>

                        <div {...innerBlockProps} />
                        <button
                            className="mt-4 text-base px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            onClick={appendBtn}
                        >
                            {__('Add New', 'framos')}
                        </button>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
