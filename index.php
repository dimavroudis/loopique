<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package loopique
 */

get_header();
?>

<main id="primary" class="site-main">

	<?php if (have_posts()) : ?>

		<header class="post-header">
			<div class="container">
				<?php
				the_archive_title('<h1 class="page-title">', '</h1>');
				the_archive_description('<div class="archive-description">', '</div>');
				?>
			</div>
		</header>
		<div class="post-content  container">

			<?php while (have_posts()) : the_post(); ?>

				<?php get_template_part('template-parts/content', get_post_type()); ?>

			<?php endwhile; ?>

			<?php the_posts_navigation(); ?>

		</div>

	<?php else : ?>

		<?php get_template_part('template-parts/content', 'none'); ?>

	<?php endif; ?>

</main><!-- #main -->

<?php
get_footer();

