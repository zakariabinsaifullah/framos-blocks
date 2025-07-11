import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import Edit from './edit';
import Save from './save';

/**
 * Block Registration
 */
registerBlockType(metadata, {
    icon: {
        src: 'minus'
    },
    edit: Edit,
    save: Save
});
