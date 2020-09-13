<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package loopique
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<a class="skip-link screen-reader-link" href="#primary"><?php esc_html_e('Skip to content', 'loopique'); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-header__container container">
			<div class="site-branding">
				<?php the_custom_logo(); ?>
			</div>
			<button class="burger burger-trigger" aria-controls="site-navigation" aria-expanded="false" aria-label="<?php esc_html_e('Toggle Navigation', 'project_parenting'); ?>">
				<div class="burger__wrapper" aria-hidden="true">
					<span class="burger__line"></span>
					<span class="burger__line"></span>
					<span class="burger__line"></span>
				</div>
			</button>
			<nav id="site-navigation" class="main-navigation">
				<?php
				wp_nav_menu(
					array(
						'theme_location'  => 'menu-1',
						'menu_id'         => 'primary-menu',
						'container_class' => 'menu-wrapper',
						'depth'           => 1,
					)
				);
				?>
				<div class="dropdown dropdown--language">
					<div class="dropdown__label">EN</div>
					<ul class="dropdown__list">
						<li><a class="dropdown__option dropdown__option--active">EN</a></li>
						<li><a class="dropdown__option" href="#">EL</a></li>
					</ul>

				</div>
			</nav>
		</div>
	</header>