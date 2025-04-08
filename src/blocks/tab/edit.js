/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import Inspector from './inspector';

/**
 * Edit function
 */

export default function Edit({ attributes, clientId, setAttributes }) {
    const { tabId, tabParentId, containerClasses } = attributes;

    const innerBlocksPros = useInnerBlocksProps(
        {
            className: classnames('single-tab grid w-full! grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 lg:w-2/3', {
                [containerClasses.join(' ')]: containerClasses.length > 0 && containerClasses
            })
        },
        {
            allowedBlocks: ['framos/card'],
            templateLock: false,
            renderAppender: false,
            template: [
                [
                    'framos/card',
                    {
                        title: 'Insights',
                        description: 'Our platform provides valuable insights to help you optimize your business strategy'
                    }
                ],
                [
                    'framos/card',
                    {
                        title: 'Auto Tracking',
                        description: 'Our platform offers automatic tracking to simplify your business processes'
                    }
                ],
                [
                    'framos/card',
                    {
                        title: 'Ai Advisor',
                        description: 'AI Advisor that provides personalized recommendations and insights'
                    }
                ],
                [
                    'framos/card',
                    {
                        title: 'Schedule Tracking',
                        description: 'Schedule tracking capabilities lets you view, manage & track your all schedule'
                    }
                ]
            ]
        }
    );

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <div {...useBlockProps()}>
                <div
                    {...innerBlocksPros}
                    data-tab-id={tabId}
                    data-tab-parent-id={tabParentId}
                    style={{
                        display: `${tabId === '1' ? 'grid' : 'none'}`
                    }}
                />
            </div>
        </>
    );
}
