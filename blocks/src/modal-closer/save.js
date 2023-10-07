import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({ class: 'dismiss' });
	return <div {...blockProps}>X</div>;
}
