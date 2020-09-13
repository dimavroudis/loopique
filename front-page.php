<?php

/**
 * The template for the homepage
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
        get_template_part('components/hero', '', array('hero' => $hero));
    endif;
    ?>
    <?php if (have_rows('sections')) : ?>
        <div id="sections">
            <?php
            while (have_rows('sections')) : $section = the_row(true);
                get_template_part('components/section', get_row_layout(), array('section' => $section));
            endwhile;
            ?>
        </div>
    <?php endif; ?>
</main>
<?php
get_footer();
