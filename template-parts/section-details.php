<?php

/**
 * The template for the last section
 *
 * @package loopique
 */

$section = $args['section'];

?>


<section class="section section--details">
    <div class="section__background-image" <?php echo $section['image'] ? 'style="background-image: url(\'' . $section['image'] . '\'"' : '' ?>>
    </div>
    <div class="section__content container">
        <h2 class="container section__title"><?php echo $section['section_title'] ?></h2>
        <div class="<?php echo $section['items']? 'details': 'details details--empty'; ?>">
            <div class="details__header">
                <div class="row">
                    <?php if ($section['heading']) : ?>
                        <h3 class="details__heading col col--6"><?php echo $section['heading'] ?></h3>
                    <?php endif; ?>

                    <?php if ($section['content']) : ?>
                        <div class="details__text col col--6"> <?php echo $section['content'] ?></div>
                    <?php endif; ?>
                </div>
            </div>
            <div class="details__wrapper">
                <?php if ($section['items']) :  ?>
                    <?php foreach ($section['items'] as $item) : ?>
                        <div class="detail animate-me fadeInUp">
                            <div class="detail__content">
                                <h4 class="detail__title"><?php echo $item['title'] ?></h4>
                                <p class="detail__text"><?php echo $item['content'] ?></p>
                            </div>
                            <?php if ($item['link']) : ?>
                                <a class="detail__link" href="<?php echo $item['link'] ?>">
                                    <span class="screen-reader-link"><?php _e('Read more about ', 'loopique'); ?><?php echo $item['title'] ?></span>
                                </a>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>

    </div>
    <div class="section__footer container">
        <?php if ($section['button']) : ?>
            <a class="btn" href="<?php echo $section['button']['url'] ?>" target="<?php echo esc_attr($section['button']['target'] ? $section['button']['target'] : '_self') ?>">
                <?php echo $section['button']['title'] ?>
            </a>
        <?php endif; ?>
    </div>


</section>