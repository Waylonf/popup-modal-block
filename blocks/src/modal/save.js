import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const {
		blockId,
		triggerText,
		maxWidth,
		bgcolor,
		overlayColor,
		navigation,
		overlayClose,
		share,
		toolsColor,
		toolsBackground,
		titleStyle,
		titlePosition,
		modalTitle,
		spinner,
		spinColor,
		shareStyle,
		ratio,
		numeration,
	} = attributes;

	return (
		<div {...blockProps}>
			<a
				data-selector={`.${blockId}`}
				data-vbtype="inline"
				data-overlay-color={overlayColor}
				data-overlay-close={overlayClose}
				data-max-width={maxWidth}
				data-bg-color={bgcolor}
				data-tools-color={toolsColor}
				data-share={share}
				data-share-style={shareStyle}
				data-spinner={spinner}
				data-spinner-color={spinColor}
				data-modal-title={modalTitle}
				data-title-position={titlePosition}
				data-navigation={navigation}
				data-title-style={titleStyle}
				data-ratio={ratio}
				data-numeration={numeration}
				data-tools-background={toolsBackground}
				className={`venobox ${blockId}`}
				href={`#modal-content-${blockId}`}
			>
				<RichText.Content value={triggerText} />
			</a>
			<div id={`modal-content-${blockId}`} className="modal-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
