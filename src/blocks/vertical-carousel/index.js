import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Block Registration
 */
registerBlockType(metadata, {
    icon: {
        src: 'slides'
    },
    edit: Edit,
    save: Save
});
