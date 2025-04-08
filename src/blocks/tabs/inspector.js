/**
 * WordPress dependencies
 */
import { InspectorControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { BaseControl, CardDivider, FormTokenField, PanelBody } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const Inspector = ({ attributes, setAttributes, handleTabClick, clientId }) => {
    const {
        tabTitles,
        tabChildCount,
        tabTitleClasses,
        tiTitle,
        tiTitleClasses,
        tiDescription,
        tiDescClasses,
        tiButtonText,
        tiButtonLink,
        tiBtnClasses,
        cardClasses
    } = attributes;

    const addNewTab = () => {
        const innerBlocks = [...select('core/block-editor').getBlocks(clientId)];
        const maxId = tabTitles.reduce((acc, curr) => Math.max(parseInt(acc), parseInt(curr.id)), 0);
        const tabId = `${maxId + 1}`;

        const newBlock = createBlock('framos/tab', {
            tabId,
            tabParentId: clientId
        });

        innerBlocks.splice(innerBlocks.length, 0, newBlock);
        dispatch('core/block-editor')
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({
                    tabTitles: [
                        ...tabTitles,
                        {
                            title: `New Tab`,
                            id: tabId,
                            icon: ''
                        }
                    ],
                    tabChildCount: tabChildCount + 1
                });

                // Delay the tab activation slightly to ensure the DOM has updated
                setTimeout(() => {
                    handleTabClick(tabId);
                }, 100);
            });
    };

    // Remove Tab Item
    const removeTabItem = index => {
        const innerBlocks = select('core/block-editor').getBlocks(clientId);
        if (innerBlocks.length > 1) {
            // Store the new active tab ID before removing the current tab
            let newActiveTabId;

            // If we're removing the last tab, activate the new last tab
            if (index === innerBlocks.length - 1) {
                newActiveTabId = innerBlocks[innerBlocks.length - 2].attributes.tabId;
            } else {
                // Otherwise activate the next tab
                newActiveTabId = innerBlocks[Math.min(index + 1, innerBlocks.length - 2)].attributes.tabId;
            }

            innerBlocks.splice(index, 1);
            const newTabTitles = [...tabTitles];
            newTabTitles.splice(index, 1);

            dispatch('core/block-editor')
                .replaceInnerBlocks(clientId, innerBlocks)
                .then(() => {
                    setAttributes({
                        tabTitles: newTabTitles,
                        tabChildCount: tabChildCount - 1
                    });

                    // Delay the tab activation slightly to ensure the DOM has updated
                    setTimeout(() => {
                        handleTabClick(newActiveTabId);
                    }, 100);
                });
        }
    };

    return (
        <InspectorControls>
            <PanelBody title={__('Tab Items', 'framos-custom-blocks')} initialOpen={false}>
                <FormTokenField
                    value={tabTitleClasses}
                    onChange={v => setAttributes({ tabTitleClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Classes', 'framos')}
                    help={__('Add classes to the tab title', 'framos')}
                />
                <CardDivider />
                {tabTitles && tabTitles.length > 0 && (
                    <div>
                        {tabTitles.map((item, index) => {
                            return (
                                <li
                                    key={item.id}
                                    className="list-none border border-gray-200 rounded p-2 mb-2 flex justify-between items-center"
                                >
                                    <span>{item.title}</span>
                                    <span
                                        className="dashicons dashicons-trash text-red-500 cursor-pointer"
                                        onClick={() => removeTabItem(index)}
                                    ></span>
                                </li>
                            );
                        })}
                        <button onClick={() => addNewTab()} className="border p-2 mt-2 rounded cursor-pointer">
                            {__('Add Tab', 'framos-custom-blocks')}
                        </button>
                    </div>
                )}
            </PanelBody>
            <PanelBody title={__('Info Card', 'framos-custom-blocks')} initialOpen={false}>
                <FormTokenField
                    value={cardClasses}
                    onChange={v => setAttributes({ cardClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Card Classes', 'framos')}
                    help={__('Add classes to the info card wrapper', 'framos')}
                />
                <FormTokenField
                    value={tiTitleClasses}
                    onChange={v => setAttributes({ tiTitleClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Title Classes', 'framos')}
                    help={__('Add classes to the info card title', 'framos')}
                />
                <FormTokenField
                    value={tiDescClasses}
                    onChange={v => setAttributes({ tiDescClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Description Classes', 'framos')}
                    help={__('Add classes to the info card description', 'framos')}
                />
                <FormTokenField
                    value={tiBtnClasses}
                    onChange={v => setAttributes({ tiBtnClasses: v.map(className => className.replace(/\s+/g, '-')) })}
                    label={__('Button Classes', 'framos')}
                    help={__('Add classes to the info card button', 'framos')}
                />
                <BaseControl label={__('Button URL', 'framos')}>
                    <LinkControl
                        value={tiButtonLink}
                        onChange={v => {
                            setAttributes({ tiButtonLink: v });
                        }}
                    />
                </BaseControl>
            </PanelBody>
        </InspectorControls>
    );
};

export default Inspector;
