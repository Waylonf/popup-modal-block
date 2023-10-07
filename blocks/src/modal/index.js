import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

import metadata from './block.json';
import { grafikaIcon as blockIcon } from './icons';

registerBlockType(metadata.name, {
	icon: {
		src: blockIcon,
		foreground: 'var(--wp--preset--color--primary)',
	},
	keywords: [__('text'), __('textarea'), __('box')],
	styles: [
		{
			name: 'default',
			label: __('Default'),
			isDefault: true,
		},
		{
			name: 'primary',
			label: __('Primary'),
		},
		{
			name: 'secondary',
			label: __('Secondary'),
		},
	],
	attributes: {
		blockId: {
			type: 'string',
		},
		triggerText: {
			type: 'string',
			default: 'Set you trigger text',
		},
		autoplay: {
			type: 'boolean',
			default: true,
		},
		modalContentType: {
			type: 'string',
			default: 'inline',
		},
		bgcolor: {
			type: 'string',
			default: '#ba122a',
		},
		border: {
			type: 'string',
			default: undefined,
		},
		maxWidth: {
			type: 'string',
			default: 'full',
		},
		navigation: {
			type: 'boolean',
			default: true,
		},
		navKeyboard: {
			type: 'boolean',
			default: true,
		},
		navTouch: {
			type: 'boolean',
			default: true,
		},
		navSpeed: {
			type: 'boolean',
		},
		numeration: {
			type: 'boolean',
			default: true,
		},
		overlayClose: {
			type: 'boolean',
			default: true,
		},
		overlayColor: {
			type: 'string',
			default: '#f60',
		},
		popup: {
			type: 'boolean',
			default: false,
		},
		ratio: {
			type: 'string',
			default: '16x9',
		},
		share: {
			type: 'boolean',
			default: true,
		},
		shareStyle: {
			type: 'boolean',
			default: 'pill',
		},
		spinColor: {
			type: 'string',
			default: '#243575',
		},
		spinner: {
			type: 'string',
			default: 'bounce',
		},
		modaltitle: {
			type: 'string',
			default: 'Title goes here muppet!',
		},
		titlePosition: {
			type: 'string',
			default: 'top',
		},
		titleStyle: {
			type: 'string',
			default: 'transparent',
		},
		toolsBackground: {
			type: 'string',
			default: '#aa3434',
		},
		toolsColor: {
			type: 'string',
			default: '#ba2314',
		},
	},
	edit: Edit,
	save,
});
