import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps({ className: 'dismiss' });
	const MODAL_CLOSE_ALLOWED_BLOCKS = [
		'core/button',
		'core/paragraph',
		'core/image',
	];
	const MODAL_CLOSE_BLOCK_TEMPLATE = [
		[
			'core/button',
			{
				text: __('Modal Dismiss Button', 'custom-modal-block'),
			},
		],
	];
	return (
		<InnerBlocks
			{...blockProps}
			allowedBlocks={MODAL_CLOSE_ALLOWED_BLOCKS}
			template={MODAL_CLOSE_BLOCK_TEMPLATE}
		/>
	);
}
