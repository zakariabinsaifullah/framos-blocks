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
        src: 'cover-image',
    },
    edit: Edit,
    save: Save
});
