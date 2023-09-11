import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
	const {} = attributes;
	const classes = classnames();

	const blockProps = useBlockProps.save( {
		className: classes,
	} );

	return (
		<p { ...blockProps }>
			{ 'Boilerplate – hello from the saved content!' }
		</p>
	);
}
