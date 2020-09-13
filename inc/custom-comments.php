<?php

/**
 * Comment layout.
 *
 * @package loopique
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;


/**
 * Creates the comments form.
 *
 * @param string $fields Form fields.
 *
 * @return array
 */
add_filter('comment_form_default_fields', 'loopique_comment_form_fields');
function loopique_comment_form_fields($fields)
{
	$commenter = wp_get_current_commenter();
	$req       = get_option('require_name_email');
	$aria_req  = ($req ? " aria-required='true'" : '');
	$html5     = current_theme_supports('html5', 'comment-form') ? 1 : 0;
	$consent  = empty($commenter['comment_author_email']) ? '' : ' checked="checked"';
	$fields    = array(
		'author'  => '<div class="form__group comment-form-author"><label for="author">' . esc_html__(
			'Name',
			'loopique'
		) . ($req ? ' <span class="required">*</span>' : '') . '</label> ' .
			'<input class="form__input" required id="author" name="author" type="text" value="' . esc_attr($commenter['comment_author']) . '" size="30"' . $aria_req . '></div>',
		'email'   => '<div class="form__group comment-form-email"><label for="email">' . esc_html__(
			'Email',
			'loopique'
		) . ($req ? ' <span class="required">*</span>' : '') . '</label> ' .
			'<input class="form__input" required id="email" name="email" ' . ($html5 ? 'type="email"' : 'type="text"') . ' value="' . esc_attr($commenter['comment_author_email']) . '" size="30"' . $aria_req . '></div>',
		'url'     => '<div class="form__group comment-form-url"><label for="url">' . esc_html__(
			'Website',
			'loopique'
		) . '</label> ' .
			'<input class="form__input" id="url" name="url" ' . ($html5 ? 'type="url"' : 'type="text"') . ' value="' . esc_attr($commenter['comment_author_url']) . '" size="30"></div>',
		'cookies' => '<div class="comment-form-cookies-consent form__checkbox"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"' . $consent . ' /> ' .
			'<label class="form-check-label custom-control-label" for="wp-comment-cookies-consent">' . esc_html__('Save my name, email, and website in this browser for the next time I comment', 'loopique') . '</label></div>',
	);

	return $fields;
}


/**
 * Builds the form.
 *
 * @param string $args Arguments for form's fields.
 *
 * @return mixed
 */
add_filter('comment_form_defaults', 'loopique_comment_form');
function loopique_comment_form($args)
{
	$args['comment_field'] = '<div class="form__group comment-form-comment">
	    <label for="comment">' . _x('Comment', 'noun', 'loopique') . (' <span class="required">*</span>') . '</label>
	    <textarea class="form__input" id="comment" name="comment" required aria-required="true" cols="45" rows="8"></textarea>
	    </div>';
	$args['class_submit']  = 'btn form__btn'; 
	return $args;
}

/**
 * Enable form validation
 */
function enable_comment_form_validation() {
	if ( comments_open() && current_theme_supports( 'html5' ) ) {
		echo '<script>document.getElementById("commentform").removeAttribute("novalidate");</script>' . PHP_EOL;
	}
}
add_action( 'wp_footer', 'enable_comment_form_validation' );