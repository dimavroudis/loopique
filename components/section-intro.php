<?php

$section = $args['section'];
?>


<section class="section section--intro">
    <div class="container">
        <h2 class="section__title"><?php echo $section['section_title'] ?></h2>
        <div class="row">
            <div class="col col--6">
                <?php if ($section['image']) : ?>
                    <img src="<?php echo  $section['image']['url']; ?>" alt="<?php echo  $section['image']['alt']; ?>" />
                <?php endif; ?>
            </div>
            <div class="col col--6">
                <div class="section__content">
                    <?php if ($section['heading']) : ?>
                        <h3 class="section__heading"><?php echo $section['heading'] ?></h3>
                    <?php endif; ?>
                    <?php if ($section['content']) : ?>
                        <div class="section__text"><?php echo $section['content'] ?></div>
                    <?php endif; ?>
                </div>
                <?php if ($section['button']) : ?>
                    <a class="btn" href="<?php echo $section['button']['url'] ?>" target="<?php echo esc_attr($section['button']['target'] ? $section['button']['target'] : '_self') ?>">
                        <?php echo $section['button']['title'] ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>