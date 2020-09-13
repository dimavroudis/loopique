<?php

/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package loopique
 */

get_header();
?>

<main id="primary" class="site-main">

	<?php if (have_posts()) : ?>

		<header class="post-header">
			<div class="container">
				<h1>
					<?php
					printf(esc_html__('Search Results for: %s', 'loopique'), '<span>' . get_search_query() . '</span>');
					?>
				</h1>
			</div>
		</header>

		<div class="post-content container">

			<?php while (have_posts()) : the_post(); ?>

				<?php get_template_part('template-parts/content', get_post_type()); ?>

			<?php endwhile; ?>

			<?php the_posts_navigation(); ?>

		</div>

	<?php else : ?>

		<header class="post-header">
			<div class="container">
				<h1>
					<?php
					printf(esc_html__('No search results found for: %s', 'loopique'), '<span>' . get_search_query() . '</span>');
					?>
				</h1>
			</div>
		</header>
		<div class="post-content container">
			<p><?php esc_html_e('Maybe try a different?', 'loopique'); ?></p>
			<?php get_search_form(); ?>
		</div>

	<?php endif; ?>

</main>

<?php
get_footer();
