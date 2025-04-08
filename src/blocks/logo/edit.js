/**
 * WordPress dependencies
 */
import { MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import Inspector from './inspector';

/**
 * Edit function
 */
export default function Edit({ attributes, setAttributes, clientId }) {
    const { icon } = attributes;

    // Block Props
    const blockProps = useBlockProps();

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />

            <div {...blockProps}>
                <a href="javascript:;" className="text-gray-600 transition-all duration-500 hover:text-red-600">
                    {icon && icon.url ? (
                        <img src={icon.url} alt={icon.alt} className="max-w-full" />
                    ) : (
                        <MediaUpload
                            onSelect={media => setAttributes({ icon: media })}
                            type="image"
                            value={icon?.id}
                            render={({ open }) => (
                                <button
                                    onClick={open}
                                    className="absolute left-1 top-1 size-5 text-indigo-600"
                                    style={{
                                        width: '30px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" color="#000000">
                                        <path
                                            d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101"
                                            stroke="#000000"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M12 21L12 13.5465M9 16L12 13L15 16" stroke="#000000" strokeWidth="1.5" />
                                    </svg>
                                </button>
                            )}
                        />
                    )}
                </a>
            </div>
        </Fragment>
    );
}
