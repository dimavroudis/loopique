<?php

$section = $args['section'];
?>


<section class="section section--slider">
    <div class="container">
        <h2 class="section__title"><?php echo $section['section_title'] ?></h2>
        <div class="section__header">
            <h3 class="section__heading"><?php echo $section['heading'] ?></h3>
            <div class="carousel__nav">
                <button type="button" data-carousel-nav="prev" aria-label="<?php _e('Previous Slide', 'loopique'); ?>"><</button>
                <button type="button" data-carousel-nav="next" aria-label="<?php _e('Next Slide', 'loopique'); ?>">></button>
            </div>
        </div>
        <div class="row">
            <div class="carousel">
                <div class="carousel__wrapper">
                    <?php if ($section['slider']) :  ?>
                        <?php foreach ($section['slider'] as $slide) : ?>
                            <div class="carousel__slide">
                                <div class="card">
                                    <div class="card__body">
                                        <?php if ($slide['image']) :  ?>
                                            <img class="card__image" src="<?php echo $slide['image']['sizes']['card']; ?>" alt="<?php echo $slide['image']['alt']; ?>" />
                                        <?php endif; ?>
                                        <div class="card__content"><?php echo $slide['content'] ?></div>
                                        <?php if ($slide['link']) : ?>
                                            <a class="card__link" href=" <?php echo $slide['link']; ?>">
                                                <span class="screen-reader-text"><?php _e('Read more', 'loopique'); ?></span>
                                            </a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>

                </div>


            </div>
        </div>
    </div>
</section>