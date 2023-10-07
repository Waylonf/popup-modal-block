import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'venobox',
		id: 'save-id',
		'data-vbtype': 'inline',
		'data-href': '#save',
	});
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
