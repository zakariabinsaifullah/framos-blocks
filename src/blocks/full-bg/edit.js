/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import classnames from 'classnames';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        containerBgImage,
        containerClasses,
        heading,
        headingLevel,
        headingClasses,
        subHeading,
        subHeadingClasses,
        text,
        textClasses,
        primaryButtonText,
        primaryButtonUrl,
        primaryButtonClasses,
        secondaryButtonText,
        secondaryButtonUrl,
        secondaryButtonClasses
    } = attributes;

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
                <div
                    className={classnames('bg-gray-900', {
                        [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                    })}
                >
                    <div className="relative isolate overflow-hidden pt-14">
                        {containerBgImage && containerBgImage?.url && (
                            <img
                                src={containerBgImage.url}
                                alt={containerBgImage.alt || heading}
                                className="absolute inset-0 -z-10 size-full object-cover"
                            />
                        )}
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                                }}
                            />
                        </div>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                    <RichText
                                        tagName="div"
                                        className={classnames(
                                            'relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20',
                                            {
                                                [subHeadingClasses.join(' ')]: subHeadingClasses.length > 0 && subHeadingClasses
                                            }
                                        )}
                                        value={subHeading}
                                        onChange={v =>
                                            setAttributes({
                                                subHeading: v
                                            })
                                        }
                                        placeholder={__('Add a subheading', 'framos')}
                                    />
                                </div>
                                <div className="text-center">
                                    <RichText
                                        tagName={headingLevel}
                                        className={classnames('text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl', {
                                            [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                        })}
                                        value={heading}
                                        onChange={v =>
                                            setAttributes({
                                                heading: v
                                            })
                                        }
                                        placeholder={__('Add a heading', 'framos')}
                                    />
                                    <RichText
                                        tagName="p"
                                        className={classnames('mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8', {
                                            [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                                        })}
                                        value={text}
                                        onChange={v =>
                                            setAttributes({
                                                text: v
                                            })
                                        }
                                        placeholder={__('Add description', 'framos')}
                                    />
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <a
                                            href="#"
                                            className={classnames(
                                                'rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400',
                                                {
                                                    [primaryButtonClasses.join(' ')]:
                                                        primaryButtonClasses.length > 0 && primaryButtonClasses
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
                                            href="#"
                                            className={classnames('text-sm/6 font-semibold text-white', {
                                                [secondaryButtonClasses.join(' ')]:
                                                    secondaryButtonClasses.length > 0 && secondaryButtonClasses
                                            })}
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
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
