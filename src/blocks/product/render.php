<?php
/**
 * Render callback for the custom block.
 *
 * @param array  $attributes The block attributes.
 * @param string $content    The inner block content (from InnerBlocks).
 * @return string            Rendered HTML output.
 */

	$containerClasses = $attributes['containerClasses'] ?? [];
	$subtitle         = $attributes['subtitle'] ?? '';
	$subtitleClasses  = $attributes['subtitleClasses'] ?? [];
	$title            = $attributes['title'] ?? '';
	$titleClass       = $attributes['titleClass'] ?? [];
	$headingLevel     = $attributes['headingLevel'] ?? 'h2';
	$desc             = $attributes['desc'] ?? '';
	$descClass        = $attributes['descClass'] ?? [];
	$photo            = $attributes['photo'] ?? [];
	$photoSize        = $attributes['photoSize'] ?? '';
	$photoClass       = $attributes['photoClass'] ?? [];

	$block_wrapper_attributes = get_block_wrapper_attributes();

	$container_class_str = implode( ' ', array_merge(
		[ 'overflow-hidden', 'bg-white', 'py-24', 'sm:py-32' ],
		(array) $containerClasses
	) );

	$subtitle_class_str = implode( ' ', array_merge(
		[ 'text-base/7', 'font-semibold', 'text-indigo-600' ],
		(array) $subtitleClasses
	) );

	$title_class_str = implode( ' ', array_merge(
		[ 'mt-2', 'text-pretty', 'text-4xl', 'font-semibold', 'tracking-tight', 'text-gray-900', 'sm:text-5xl' ],
		(array) $titleClass
	) );

	$desc_class_str = implode( ' ', array_merge(
		[ 'mt-6', 'text-lg/8', 'text-gray-600' ],
		(array) $descClass
	) );

	$photo_class_str = implode( ' ', array_merge(
		[ 'w-[48rem]', 'max-w-none', 'rounded-xl', 'shadow-xl', 'ring-1', 'ring-gray-400/10', 'sm:w-[57rem]', 'md:-ml-4', 'lg:-ml-0' ],
		(array) $photoClass
	) );

	$photo_url = '';
	if ( ! empty( $photo['sizes'][ $photoSize ]['url'] ) ) {
		$photo_url = $photo['sizes'][ $photoSize ]['url'];
	} elseif ( ! empty( $photo['url'] ) ) {
		$photo_url = $photo['url'];
	}

	
	?>
	<div <?php echo $block_wrapper_attributes; ?>>
		<div class="<?php echo esc_attr( $container_class_str ); ?>">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:pr-8 lg:pt-4">
						<div class="lg:max-w-lg">
							<?php if ( ! empty( $subtitle ) ) : ?>
								<h5 class="<?php echo esc_attr( $subtitle_class_str ); ?>">
									<?php echo esc_html( $subtitle ); ?>
								</h5>
							<?php endif; ?>

							<?php if ( ! empty( $title ) ) : ?>
								<<?php echo esc_attr( $headingLevel ); ?> class="<?php echo esc_attr( $title_class_str ); ?>">
									<?php echo esc_html( $title ); ?>
								</<?php echo esc_attr( $headingLevel ); ?>>
							<?php endif; ?>

							<?php if ( ! empty( $desc ) ) : ?>
								<p class="<?php echo esc_attr( $desc_class_str ); ?>">
									<?php echo esc_html( $desc ); ?>
								</p>
							<?php endif; ?>
						</div>

						<div class="btns-group">
							<?php echo $content; ?>
						</div>
					</div>

					<?php if ( $photo_url ) : ?>
						<figure>
							<img
								src="<?php echo esc_url( $photo_url ); ?>"
								alt="<?php echo esc_attr( $photo['alt'] ?? $title ); ?>"
								class="<?php echo esc_attr( $photo_class_str . ' wp-image-' . ( $photo['id'] ?? '' ) ); ?>"
								width="2432"
								height="1442"
							/>
						</figure>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

