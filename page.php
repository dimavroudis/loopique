<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package loopique
 */

get_header();
?>

<main id="primary" class="site-main">

	<?php while (have_posts()) : the_post(); ?>
		<article>
			<header class="post-header">
				<div class="container">
					<h1><?php the_title() ?></h1>
				</div>
			</header>
			<div class="container post-content">

				<?php the_content() ?>

				<?php
				if (comments_open() || get_comments_number()) :
					comments_template();
				endif;
				?>
			</div>
		</article>
	<?php endwhile;
	?>
	</div>
</main>

<?php
get_footer();
