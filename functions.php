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
 * Registers theme endpoints
 */
require get_template_directory() . '/inc/theme-endpoints.php';

/**
 * Custom Markup for comment forms
 */
require get_template_directory() . '/inc/custom-comments.php';
