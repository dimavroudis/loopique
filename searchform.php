<?php

/**
 * The template for the default search form
 *
 * @package loopique
 */
?>

<form role="search" action="<?php echo esc_url(home_url('/')); ?>" id="searchForm" method="get" class="form form--search">
	<div class="form__group">
		<label for="search"><?php esc_html_e('Search...', 'loopique') ?></label>
		<input class="form__input" type="search" id="search" value="<?php the_search_query(); ?>" name="s">
	</div>
	<button type="submit" class="btn form__btn"><?php esc_html_e('Search', 'loopique') ?></button>
</form>