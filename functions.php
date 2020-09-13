<?php
/**
 * loopique functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package loopique
 */


/**
 * Adds theme_supports and enqueues assets
 */
require get_template_directory() . '/inc/theme-setup.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';
