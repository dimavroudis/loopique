<?php

/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package loopique
 */

if (!defined('LOOPIQUE_VERSION')) {
	// Replace the version number of the theme on each release.
	define('LOOPIQUE_VERSION', '1.0.0');
}

if (!function_exists('loopique_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function loopique_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on loopique, use a find and replace
		 * to change 'loopique' to the name of your theme in all the template files.
		 */
		load_theme_textdomain('loopique', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		add_image_size('card', 460, 315, true); // 220 pixels wide by 180 pixels tall, hard crop mode

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__('Primary', 'loopique'),
				'menu-2' => esc_html__('Secondary', 'loopique'),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 60,
				'width'       => 168,
				'flex-width'  => false,
				'flex-height' => true,
			)
		);
	}
endif;
add_action('after_setup_theme', 'loopique_setup');

/**
 * Add customizer sections and fields
 */
function loopique_customize_register($wp_customize)
{
	$wp_customize->add_section('footer', array(
		'title'      => __('Footer', 'mytheme'),
		'priority'   => 30,
	));

	$wp_customize->add_setting('footer_title', array(
		'default'   => '',
		'transport' => 'refresh',
		'sanitize_callback' => 'sanitize_text_field',
	));

	$wp_customize->add_control(new WP_Customize_Control($wp_customize, 'footer_title', array(
		'label'      => __('Title', 'mytheme'),
		'section'    => 'footer',
		'settings'   => 'footer_title',
	)));

	$wp_customize->add_setting('footer_content', array(
		'default'   => '',
		'transport' => 'refresh',
		'sanitize_callback' => 'sanitize_textarea_field',
	));

	$wp_customize->add_control(new WP_Customize_Control($wp_customize, 'footer_content', array(
		'label'      => __('Description', 'mytheme'),
		'type'       => 'textarea',
		'section'    => 'footer',
		'settings'   => 'footer_content',
	)));
}
add_action('customize_register', 'loopique_customize_register');

/**
 * Enqueue scripts and styles.
 */
function loopique_scripts()
{
	wp_enqueue_style('loopique-style', get_template_directory_uri() . '/assets/css/main.css', array(), LOOPIQUE_VERSION);
	wp_enqueue_style('loopique-google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap', false);

	wp_enqueue_script('loopique-main', get_template_directory_uri() . '/assets/js/main.js', array('loopique-runtime'), LOOPIQUE_VERSION, true);
	wp_enqueue_script('loopique-runtime', get_template_directory_uri() . '/assets/js/runtime.js', array(), LOOPIQUE_VERSION, true);
}
add_action('wp_enqueue_scripts', 'loopique_scripts');
