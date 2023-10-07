<?php
/**
 * Plugin Name:       Popup Modal Block
 * Description:       A block to display modals and popups in your pages.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            The Grafika Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       popup-modal-block
 *
 * @package           popup-modal-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function modal_block_init() {
	$blocks = array(
		'modal'         => '',
		'modal-trigger' => '',
	);

	foreach ( $blocks as $dir => $render_callback ) :
		$args = array();
		if ( ! empty( $render_callback ) ) :
			$args['render_callback'] = $render_callback;
		endif;
		register_block_type( __DIR__ . '/blocks/build/' . $dir, $args );
	endforeach;
}
add_action( 'init', 'modal_block_init' );

function progress_bar_block_enqueue() {
    wp_enqueue_script(
		$handle    = 'progress-bar-block',
		$src       = plugin_dir_url( __FILE__ ) . '/blocks/build/progress-bar/progressbar.js',
		$deps      = array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		$ver       = '1.0.0',
		$in_footer = true
	);
}
add_action( 'wp_enqueue_scripts', 'progress_bar_block_enqueue' );
add_action( 'enqueue_block_editor_assets', 'progress_bar_block_enqueue' );

