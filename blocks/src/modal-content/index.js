import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	usesContext: [
		'custom-theme-block/blockId',
		'custom-theme-block/modalContentType',
	],
});