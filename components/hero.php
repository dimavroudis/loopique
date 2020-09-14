<?php

$hero = $args['hero'] ?  $args['hero'] :  get_field('hero');
?>

<div class="hero"  style="background-image: url(<?php echo $hero['background'] ?>)">
    <div class="container hero__container" > 
        <div class="hero__content " data-animate-parent=".hero">
            <?php if ($hero['title']) {
                echo '<h1 class="hero__title">' . $hero['title'] . '</h1>';
            } ?>
            <?php if ($hero['subtitle']) {
                echo '<p class="hero__subtitle">' . $hero['subtitle'] . '</p>';
            } ?>
            <?php
            if ($hero['button']) {
                echo '<a class="btn hero__btn" target="' . esc_attr($hero['button']['target'] ? $hero['button']['target'] : '_self') . '" href="' . $hero['button']['url'] . '">' . $hero['button']['title'] . '</a>';
            }
            ?>
        </div>
    </div>
    <a class="scroll-trigger" href="#sections">
        <span class="screen-reader-text"><?php _e('Scroll Down', 'loopique'); ?></span>
        <div class="mouse">
            <div class="mouse__line">
            </div>
        </div>
    </a>
</div>