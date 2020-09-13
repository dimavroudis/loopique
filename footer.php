<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package loopique
 */

?>

<footer id="colophon" class="site-footer">
	<div class="container">
		<div class="site-contact">

			<div class="row">
				<div class="col col--6">
					<h2 class="site-contact__title"><?php echo get_theme_mod('footer_title') ?></h2>
					<p class="site-contact__text"><?php echo get_theme_mod('footer_content') ?></p>
				</div>
			</div>
			<form class="form form--footer" id="contactForm">
				<div class="row">
					<div class="col col--6">
						<div class="form__group">
							<label for="contactFirstName"><?php _e('Name', 'loopique'); ?>*</label>
							<input id="contactFirstName" class="form__input" name="fname" type="text" required>
						</div>
						<div class="form__group">
							<label for="contactLastName"><?php _e('Last Name', 'loopique'); ?>*</label>
							<input id="contactLastName" class="form__input" name="lname" type="text" required>
						</div>
					</div>
					<div class="col col--6">
						<div class="form__group">
							<label for="contactEmail"><?php _e('Email', 'loopique'); ?>*</label>
							<input id="contactEmail" class="form__input" name="email" type="email" required>
						</div>
						<div class="form__group form__group--last">
							<label for="contactMessage"><?php _e('Your Message ', 'loopique'); ?>*</label>
							<textarea id="contactMessage" row="1" class="form__input" name="message" type="text" required></textarea>
						</div>
						<p class="form__hint">*mandatory fields</p>
						<div class="form__gdpr">
							<div class="form__checkbox">
								<input type="checkbox" id="contactGDPR" name="gdpr" required>
								<label for="contactGDPR"><span class="screen-reader-text"><?php _e('I have read and agreed with the terms & conditions', 'loopique'); ?></span></label>
							</div>
							<div class="microinfo">
								<h3 class="microinfo__title"><?php _e('I have read and agreed with the terms & conditions', 'loopique'); ?></h3>
								<p class="microinfo__content">
									<?php _e('Your personal data will be used to process your message and to provide you with a better user experience on our website and for anything else listed in our privacy policy.', 'loopique'); ?>
								</p>
							</div>
						</div>
						<button type="submit" class="btn form__btn">
							<?php _e('Submit ', 'loopique'); ?>
						</button>
						<div class="form__message"></div>
					</div>
				</div>
			</form>
		</div>


	</div>
	<div class="site-copyright">
	</div>
</footer>

<?php wp_footer(); ?>

</body>

</html>