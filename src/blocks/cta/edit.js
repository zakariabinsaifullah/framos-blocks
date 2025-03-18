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
    const {
        containerClasses,
        heading,
        headingLevel,
        headingClasses,
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
                <div className="mx-auto max-w-6xl py-12 px-0 md:px-6">
                    <div
                        className={classnames('relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16', {
                            [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
                        })}
                    >
                        <RichText
                            tagName={headingLevel}
                            className={classnames(
                                'mx-auto max-w-2xl text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl',
                                {
                                    [headingClasses.join(' ')]: headingClasses.length > 0 && headingClasses
                                }
                            )}
                            value={heading}
                            onChange={v => setAttributes({ heading: v })}
                            placeholder={__('Add a heading', 'framos')}
                        />
                        <RichText
                            tagName="p"
                            className={classnames('mx-auto mt-6 max-w-xl text-md md:text-lg leading-normal text-white', {
                                [textClasses.join(' ')]: textClasses.length > 0 && textClasses
                            })}
                            value={text}
                            onChange={v => setAttributes({ text: v })}
                            placeholder={__('Add text', 'framos')}
                        />
                        <div className="mt-10 flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-6">
                            <a
                                href="#"
                                className={classnames(
                                    'btn-main rounded-xl bg-primary px-11 py-2.5 text-base border-0 border-t-[3px] text-white shadow-sm hover:bg-framosDarkBlue dark:bg-primary dark:text-white w-full sm:w-auto justify-center flex items-center border-t border-primary100 dark:border-primary100 hover:border-primary hover:text-white',
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
                                <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="#"
                                className={classnames('text-sm font-semibold leading-6 text-white hover:text-primary', {
                                    [secondaryButtonClasses.join(' ')]: secondaryButtonClasses.length > 0 && secondaryButtonClasses
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
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true"
                        >
                            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                    <stop stopColor="#7775D6" />
                                    <stop offset="1" stopColor="#0098b0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
