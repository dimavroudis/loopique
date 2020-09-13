<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package loopique
 */

get_header();
?>

<main id="primary" class="site-main">

	<div class="hero" style="background-image: url(<?php echo $hero['background'] ?>)">
		<div class="container">
			<div class="hero__content">
				<h1 class="hero__title"><?php esc_html_e('Oops! That page can&rsquo;t be found.', 'loopique'); ?></h1>
				<p class="hero__subtitle"><?php esc_html_e('It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'loopique'); ?></p>
				<?php get_search_form(); ?>
			</div>
		</div>
	</div>

</main>

<?php
get_footer();
