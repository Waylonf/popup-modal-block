import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {
	const blockId = props.context['custom-theme-block/blockId'];
	const blockProps = useBlockProps({
		className: 'venobox-content',
		'data-test': blockId,
	});

	const MODAL_CONTENT_BLOCK_TEMPLATE = [
		[
			'core/paragraph',
			{
				placeholder: __(
					'Insert your modal content here',
					'custom-modal-block'
				),
			},
		],
		['custom-theme-block/modal-closer'],
	];

	return (
		<>
			{blockId}
			<InnerBlocks
				{...blockProps}
				template={MODAL_CONTENT_BLOCK_TEMPLATE}
			/>
		</>
	);
}
