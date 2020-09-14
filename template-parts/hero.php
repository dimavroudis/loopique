<?php

/**
 * The template for hero section
 *
 * @package loopique
 */

$hero = $args['hero'] ?  $args['hero'] :  get_field('hero');
?>

<div class="hero" style="background-image: url(<?php echo $hero['background'] ?>)">
    <div class="container hero__container">
        <div class="hero__content " data-animate-parent=".hero">
            <?php if ($hero['title']) : ?>
                <h1 class="hero__title"><?php echo $hero['title'] ?></h1>
            <?php endif ?>
            <?php if ($hero['subtitle']) : ?>
                <p class="hero__subtitle"><?php echo $hero['subtitle'] ?></p>
            <?php endif ?>
            <?php if ($hero['button']) : ?>
                <a class="btn hero__btn" target="<?php echo esc_attr($hero['button']['target'] ? $hero['button']['target'] : '_self') ?>" href="<?php echo  $hero['button']['url'] ?>"><?php echo  $hero['button']['title'] ?></a>';
            <?php endif ?>
        </div>
    </div>
    <?php if ($args['mouse']) : ?>
        <a class="scroll-trigger" href="#sections">
            <span class="screen-reader-text"><?php _e('Scroll Down', 'loopique'); ?></span>
            <div class="mouse">
                <div class="mouse__line">
                </div>
            </div>
        </a>
    <?php endif ?>
</div>