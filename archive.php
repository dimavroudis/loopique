<?php

/**
 * The template for displaying archive pages
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
		<div class="container post-content">

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
