<?php
/**
 * Template Name: Landing Page
 * 
 * The template for the landing page (same as frontpage)
 *
 * @package loopique
 */

get_header();

$hero = get_field('hero');
$sections = get_field('sections');
?>

<main id="primary" class="site-main">
    <?php
    if ($hero) :
        get_template_part('template-parts/hero', '', array('hero' => $hero, 'mouse' => have_rows('sections')) );
    endif;
    ?>
    <?php if (have_rows('sections')) : ?>
        <div id="sections">
            <?php
            while (have_rows('sections')) : $section = the_row(true);
                get_template_part('template-parts/section', get_row_layout(), array('section' => $section));
            endwhile;
            ?>
        </div>
    <?php endif; ?>
</main>
<?php
get_footer();
