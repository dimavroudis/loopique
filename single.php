<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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
			<div class="post-content  container">

				<?php the_content() ?>

				<?php the_post_navigation(
					array(
						'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'loopique') . '</span> <span class="nav-title">%title</span>',
						'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'loopique') . '</span> <span class="nav-title">%title</span>',
					)
				); ?>


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
