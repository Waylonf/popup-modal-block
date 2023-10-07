import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'modal-content',
		id: 'save',
		'data-source': 'save',
	});
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
