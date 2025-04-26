<?php

	$containerClasses       = $attributes['containerClasses'] ?? [];
	$heading                = $attributes['heading'] ?? '';
	$headingLevel           = $attributes['headingLevel'] ?? 'h2';
	$headingClasses         = $attributes['headingClasses'] ?? [];
	$text                   = $attributes['text'] ?? '';
	$textClasses            = $attributes['textClasses'] ?? [];
	$sliderTitle            = $attributes['sliderTitle'] ?? '';
	$sliderTitleTag         = $attributes['sliderTitleTag'] ?? 'h3';
	$sliderTitleClasses     = $attributes['sliderTitleClasses'] ?? [];
	$sliderText             = $attributes['sliderText'] ?? '';
	$sliderTextClasses      = $attributes['sliderTextClasses'] ?? [];
	$sliderNavWrapperClasses = $attributes['sliderNavWrapperClasses'] ?? [];
	$prevClasses            = $attributes['prevClasses'] ?? [];
	$nextClasses            = $attributes['nextClasses'] ?? [];

	$block_wrapper_attributes = get_block_wrapper_attributes( [
		'class' => implode( ' ', (array) $containerClasses ),
	] );

	$heading_class_str         = implode( ' ', array_merge( [ 'text-3xl', 'font-bold', 'text-gray-900', 'mb-4' ], (array) $headingClasses ) );
	$text_class_str            = implode( ' ', array_merge( [ 'text-gray-600', 'max-w-3xl', 'mx-auto' ], (array) $textClasses ) );
	$slider_title_class_str    = implode( ' ', array_merge( [ 'text-2xl', 'font-bold', 'text-indigo-600', 'mb-2' ], (array) $sliderTitleClasses ) );
	$slider_text_class_str     = implode( ' ', array_merge( [ 'text-gray-700', 'mb-4' ], (array) $sliderTextClasses ) );
	$slider_nav_wrapper_class  = implode( ' ', array_merge( [ 'bg-gray-50', 'p-6', 'rounded-lg', 'h-full', 'box-border' ], (array) $sliderNavWrapperClasses ) );
	$prev_class_str            = implode( ' ', array_merge( [
		'prev-navigation', 'custom-nav-btn', 'w-10', 'h-10', 'rounded-full',
		'bg-white', 'border', 'border-gray-200', 'flex', 'items-center', 'justify-center',
		'text-indigo-600', 'shadow-sm', 'hover:bg-gray-50', 'hover:shadow', 'transition-all', 'duration-200'
	], (array) $prevClasses ) );
	$next_class_str            = implode( ' ', array_merge( [
		'next-navigation', 'custom-nav-btn', 'w-10', 'h-10', 'rounded-full',
		'bg-white', 'border', 'border-gray-200', 'flex', 'items-center', 'justify-center',
		'text-indigo-600', 'shadow-sm', 'hover:bg-gray-50', 'hover:shadow', 'transition-all', 'duration-200'
	], (array) $nextClasses ) );


	?>
	
	<div  <?php echo $block_wrapper_attributes; ?>>
		<div class="text-center mb-8">
			<?php if ( ! empty( $heading ) ) : ?>
				<<?php echo esc_attr( $headingLevel ); ?> class="<?php echo esc_attr( $heading_class_str ); ?>">
					<?php echo esc_html( $heading ); ?>
				</<?php echo esc_attr( $headingLevel ); ?>>
			<?php endif; ?>

			<?php if ( ! empty( $text ) ) : ?>
				<p class="<?php echo esc_attr( $text_class_str ); ?>">
					<?php echo esc_html( $text ); ?>
				</p>
			<?php endif; ?>
		</div>

		<div class="flex flex-col md:flex-row gap-6">
			<div class="w-full md:w-1/4">
				<div class="<?php echo esc_attr( $slider_nav_wrapper_class ); ?>">
					<?php if ( ! empty( $sliderTitle ) ) : ?>
						<<?php echo esc_attr( $sliderTitleTag ); ?> class="<?php echo esc_attr( $slider_title_class_str ); ?>">
							<?php echo esc_html( $sliderTitle ); ?>
						</<?php echo esc_attr( $sliderTitleTag ); ?>>
					<?php endif; ?>

					<?php if ( ! empty( $sliderText ) ) : ?>
						<p class="<?php echo esc_attr( $slider_text_class_str ); ?>">
							<?php echo esc_html( $sliderText ); ?>
						</p>
					<?php endif; ?>

					<div class="flex space-x-4 mt-6">
						<button class="<?php echo esc_attr( $prev_class_str ); ?>">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
						</button>
						<button class="<?php echo esc_attr( $next_class_str ); ?>">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div class="w-full md:w-3/4">
				<div class="swiper">
					<div class="swiper-wrapper">
						<?php echo $content; // Inner blocks (slides) ?>
					</div>
				</div>
			</div>
		</div>
	</div>

