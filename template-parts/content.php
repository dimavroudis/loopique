<?php
?>

<article class="detail animate-me fadeInLeft">
    <div class="detail__content">
        <h2 class="detail__title"><?php the_title() ?></h2>
        <p class="detail__excerpt"><?php the_excerpt(); ?></p>
    </div>
    <a class="detail__link" href="<?php the_permalink() ?>">
        <span class="screen-reader-link"><?php _e('Read more about ', 'loopique'); ?><?php the_title() ?></span>
    </a>
</article>