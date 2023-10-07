import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	BlockControls,
	InspectorAdvancedControls,
	useSetting,
	RichText,
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	ToggleControl,
	SelectControl,
	ColorPalette,
	TextControl,
	/* eslint-disable */
	__experimentalUnitControl as UnitControl,
	/* eslint-enable */
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;

	const {
		blockId,
		modalTitle,
		share,
		navigation,
		navKeyboard,
		navTouch,
		numeration,
		overlayClose,
		popup,
		ratio,
		shareStyle,
		spinColor,
		spinner,
		titlePosition,
		titleStyle,
		toolsBackground,
		autoplay,
		toolsColor,
		triggerText,
		bgcolor,
		overlayColor,
		maxWidth,
	} = attributes;

	useEffect(() => {
		if (!blockId) {
			setAttributes({ blockId: clientId });
		}
	});

	const [isModalOpen, setIsModalOpen] = useState(true);

	const blockProps = useBlockProps({ className: 'modal' });

	const colors = useSetting('color.palette') || [];

	const onChangeTriggerText = (newTriggerText) => {
		setAttributes({ triggerText: newTriggerText });
	};

	const onChangeNavigation = (newNavigation) => {
		setAttributes({ navigation: newNavigation });
	};

	const onChangeAutoplay = (newAutoplay) => {
		setAttributes({ autoplay: newAutoplay });
	};

	const onChangeNavKeyboard = (newNavKeyboard) => {
		setAttributes({ navKeyboard: newNavKeyboard });
	};

	const onChangeNavTouch = (newNavTouch) => {
		setAttributes({ navTouch: newNavTouch });
	};

	const onChangeNumeration = (newNumeration) => {
		setAttributes({ numeration: newNumeration });
	};

	const onChangeOverlayClose = (newOverlayClose) => {
		setAttributes({ overlayClose: newOverlayClose });
	};

	const onChangePopup = (newPopup) => {
		setAttributes({ popup: newPopup });
	};

	const onChangeModalTitle = (newTitle) => {
		setAttributes({ modalTitle: newTitle });
	};

	const onChangeSpinner = (newSpinner) => {
		setAttributes({ spinner: newSpinner });
	};

	const onChangeShare = (newShare) => {
		setAttributes({ share: newShare });
	};

	const onChangeRatio = (newRatio) => {
		setAttributes({ ratio: newRatio });
	};

	const onChangeToolsBackground = (newToolsBackground) => {
		setAttributes({ toolsBackground: newToolsBackground });
	};

	const onChangeSpinColor = (newSpinColor) => {
		setAttributes({ spinColor: newSpinColor });
	};

	const onChangeToolsColor = (newToolsColor) => {
		setAttributes({ toolsColor: newToolsColor });
	};

	const onChangeTitlePosition = (newTitlePosition) => {
		setAttributes({ titlePosition: newTitlePosition });
	};

	const onChangeTitleStyle = (newTitleStyle) => {
		setAttributes({ titleStyle: newTitleStyle });
	};
	const onChangeShareStyle = (newShareStyle) => {
		setAttributes({ shareStyle: newShareStyle });
	};
	const onChangeBgcolor = (newBgcolor) => {
		setAttributes({ bgcolor: newBgcolor });
	};
	const onChangeOverlayColor = (newOverlayColor) => {
		setAttributes({ overlayColor: newOverlayColor });
	};

	const onChangeMaxWidth = (newMaxWidth) => {
		setAttributes({ maxWidth: newMaxWidth });
	};

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="Overlay">
						<SelectControl
							label={__('Preloader type', 'popup-modal-block')}
							value={spinner}
							options={[
								{
									label: __('Plane', 'popup-modal-block'),
									value: 'plane',
								},
								{
									label: __('Chase', 'popup-modal-block'),
									value: 'chase',
								},
								{
									label: __('Bounce', 'popup-modal-block'),
									value: 'bounce',
								},
								{
									label: __('Pulse', 'popup-modal-block'),
									value: 'pulse',
								},
								{
									label: __('Wave', 'popup-modal-block'),
									value: 'wave',
								},
								{
									label: __('Flow', 'popup-modal-block'),
									value: 'flow',
								},
								{
									label: __('Swing', 'popup-modal-block'),
									value: 'swing',
								},
								{
									label: __('Circle', 'popup-modal-block'),
									value: 'circle',
								},
								{
									label: __(
										'Fading Circle',
										'popup-modal-block'
									),
									value: 'circle-fade',
								},
								{
									label: __('grid', 'popup-modal-block'),
									value: 'grid',
								},
								{
									label: __('Fold', 'popup-modal-block'),
									value: 'fold',
								},
								{
									label: __('Wander', 'popup-modal-block'),
									value: 'wander',
								},
							]}
							onChange={onChangeSpinner}
							__nextHasNoMarginBottom
						/>
						<ColorPalette
							colors={colors}
							value={spinColor}
							onChange={onChangeSpinColor}
							disableCustomColors
						/>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title={__('Overlay Title', 'popup-modal-block')}>
						<TextControl
							label={__('Overlay Title', 'popup-modal-block')}
							value={modalTitle}
							onChange={onChangeModalTitle}
						/>
						{modalTitle && (
							<>
								<SelectControl
									label={__(
										'Sharing buttons style',
										'popup-modal-block'
									)}
									value={titlePosition}
									options={[
										{
											label: __(
												'Top',
												'popup-modal-block'
											),
											value: 'top',
										},
										{
											label: __(
												'Bottom',
												'popup-modal-block'
											),
											value: 'bottom',
										},
									]}
									onChange={onChangeTitlePosition}
									__nextHasNoMarginBottom
								/>
								<SelectControl
									label={__(
										'Title style',
										'popup-modal-block'
									)}
									value={titleStyle}
									options={[
										{
											label: __(
												'Block',
												'popup-modal-block'
											),
											value: 'block',
										},
										{
											label: __(
												'Pill',
												'popup-modal-block'
											),
											value: 'pill',
										},
										{
											label: __(
												'Transparent',
												'popup-modal-block'
											),
											value: 'transparent',
										},
										{
											label: __(
												'Bar',
												'popup-modal-block'
											),
											value: 'bar',
										},
									]}
									onChange={onChangeTitleStyle}
									__nextHasNoMarginBottom
								/>
							</>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<InspectorAdvancedControls>
				<UnitControl
					isUnitSelectTabbable
					label={__(
						'Set the width of the modal',
						'popup-modal-block'
					)}
					onChange={onChangeMaxWidth}
					value={maxWidth}
				/>
				<ToggleControl
					label={__('Automatic play for videos', 'popup-modal-block')}
					value={autoplay}
					checked={autoplay}
					onChange={onChangeAutoplay}
				/>
				<ToggleControl
					label={__('Show navigation arrows', 'popup-modal-block')}
					value={navigation}
					checked={navigation}
					onChange={onChangeNavigation}
				/>
				<ToggleControl
					label={__(
						'Enable keyboard navigation',
						'popup-modal-block'
					)}
					value={navKeyboard}
					checked={navKeyboard}
					onChange={onChangeNavKeyboard}
				/>
				<ToggleControl
					label={__(
						'Enable swipe touch or drag',
						'popup-modal-block'
					)}
					value={navTouch}
					checked={navTouch}
					onChange={onChangeNavTouch}
				/>
				<ToggleControl
					label={__('Show gallery counter', 'popup-modal-block')}
					value={numeration}
					checked={numeration}
					onChange={onChangeNumeration}
				/>
				<ToggleControl
					label={__(
						'Enable closing when the overlay is clicked',
						'popup-modal-block'
					)}
					value={overlayClose}
					checked={overlayClose}
					onChange={onChangeOverlayClose}
				/>
				<ToggleControl
					label={__(
						'Show modal automatically when the page loads.',
						'popup-modal-block'
					)}
					value={popup}
					checked={popup}
					onChange={onChangePopup}
				/>
				<ToggleControl
					label={__(
						'Enable sharing buttons for images and videos',
						'popup-modal-block'
					)}
					value={share}
					checked={share}
					onChange={onChangeShare}
				/>
				{share && (
					<SelectControl
						label={__('Sharing buttons style', 'popup-modal-block')}
						value={shareStyle}
						options={[
							{
								label: __('Block', 'popup-modal-block'),
								value: 'block',
							},
							{
								label: __('Pills', 'popup-modal-block'),
								value: 'pill',
							},
							{
								label: __('Transparent', 'popup-modal-block'),
								value: 'transparent',
							},
							{
								label: __('Bar', 'popup-modal-block'),
								value: 'bar',
							},
						]}
						onChange={onChangeShareStyle}
						__nextHasNoMarginBottom
					/>
				)}
				<SelectControl
					label="Aspect ratio"
					help={__(
						'Aspect ratio applied to iframes and videos',
						'popup-modal-block'
					)}
					value={ratio}
					options={[
						{
							label: __('Square', 'popup-modal-block'),
							value: '1x1',
						},
						{
							label: __('Standard', 'popup-modal-block'),
							value: '4x3',
						},
						{
							label: __('Widescreen', 'popup-modal-block'),
							value: '16x9',
						},
						{
							label: __('Extra Wide', 'popup-modal-block'),
							value: '21x9',
						},
						{
							label: __('Full', 'popup-modal-block'),
							value: 'full',
						},
					]}
					onChange={onChangeRatio}
					__nextHasNoMarginBottom
				/>
				<ColorPalette
					colors={colors}
					value={toolsBackground}
					help={__(
						'Select the background color for the title and share buttons',
						'custom-modal-block'
					)}
					onChange={onChangeToolsBackground}
					enableAlpha
					disableCustomColors
				/>
				<ColorPalette
					colors={colors}
					value={toolsColor}
					help={__(
						'Select the text and icon color for the title, share buttons and gallery navigation where applicable',
						'custom-modal-block'
					)}
					onChange={onChangeToolsColor}
					disableCustomColors
				/>
				<ColorPalette
					colors={colors}
					value={bgcolor}
					help={__(
						'Select the modal background coolor',
						'custom-modal-block'
					)}
					onChange={onChangeBgcolor}
					disableCustomColors
				/>
				<ColorPalette
					colors={colors}
					value={overlayColor}
					help={__('Backdrop color', 'custom-modal-block')}
					onChange={onChangeOverlayColor}
					enableAlpha
				/>
			</InspectorAdvancedControls>

			<BlockControls
				controls={[
					{
						icon: 'visibility',
						title: __(
							'Click to preview or hide this modal',
							'custom-modal-block'
						),
						onClick: () => setIsModalOpen(!isModalOpen),
						isActive: isModalOpen,
					},
				]}
			/>

			<div {...blockProps}>
				<RichText
					id={blockId}
					data-vbtype="inline"
					data-overlay-color={overlayColor}
					onChange={onChangeTriggerText}
					value={triggerText}
					title="My Description"
					className="venobox"
					tagname="a"
					placeholder={__('Trigger text', 'custom-modal-block')}
					data-href={`#${blockId} `}
				/>
				{isModalOpen && (
					<div id={blockId} className="editor-modal-content">
						<InnerBlocks />
					</div>
				)}
			</div>
		</>
	);
}
