import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

import metadata from './block.json';
import { grafikaIcon } from './icons';

registerBlockType( metadata.name, {
	icon: {
		src: grafikaIcon,
		background: 'var(--wp--preset--color--base)',
		foreground: 'var(--wp--preset--color--primary)',
	},
	keywords: [ __( 'text' ), __( 'textarea' ), __( 'box' ) ],
	styles: [
		{
			name: 'default',
			label: __( 'Default' ),
			isDefault: true,
		},
		{
			name: 'primary',
			label: __( 'Primary' ),
		},
		{
			name: 'secondary',
			label: __( 'Secondary' ),
		},
	],
	edit: Edit,
	save,
} );
