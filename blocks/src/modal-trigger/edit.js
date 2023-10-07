import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {
	const {
		attributes: { blockId },
	} = props;

	const blockProps = useBlockProps({
		className: 'venobox',
		id: 'edit-id',
		'data-href': blockId,
	});
	return (
		<>
			<InnerBlocks {...blockProps} />
		</>
	);
}
