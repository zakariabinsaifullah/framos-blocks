<?php
/**
 * Server-side rendering for the block.
 *
 * @param array $attributes Block attributes.
 * @return string Rendered HTML.
 */

	$container_classes  = $attributes['containerClasses'] ?? [];
	$subtitle           = $attributes['subtitle'] ?? '';
	$subtitle_classes   = $attributes['subtitleClasses'] ?? [];
	$title              = $attributes['title'] ?? '';
	$title_class        = $attributes['titleClass'] ?? [];
	$heading_level      = $attributes['headingLevel'] ?? 'h2';
	$desc               = $attributes['desc'] ?? '';
	$desc_class         = $attributes['descClass'] ?? [];
	$photo              = $attributes['photo'] ?? [];
	$photo_size         = $attributes['photoSize'] ?? '';
	$photo_class        = $attributes['photoClass'] ?? [];

	$wrapper_attributes = get_block_wrapper_attributes();

	$outer_classes = implode( ' ', array_merge(
		[ 'overflow-hidden', 'bg-white', 'py-24', 'sm:py-32' ],
		(array) $container_classes
	));

	$subtitle_class = implode( ' ', array_merge(
		[ 'text-base/7', 'font-semibold', 'text-indigo-600' ],
		(array) $subtitle_classes
	));

	$title_classes = implode( ' ', array_merge(
		[ 'mt-2', 'text-pretty', 'text-4xl', 'font-semibold', 'tracking-tight', 'text-gray-900', 'sm:text-5xl' ],
		(array) $title_class
	));

	$desc_classes = implode( ' ', array_merge(
		[ 'mt-6', 'text-lg/8', 'text-gray-600' ],
		(array) $desc_class
	));

	$photo_classes = implode( ' ', array_merge(
		[
			'w-[48rem]', 'max-w-none', 'rounded-xl', 'shadow-xl',
			'ring-1', 'ring-gray-400/10', 'sm:w-[57rem]',
			!empty( $photo['id'] ) ? 'wp-image-' . intval( $photo['id'] ) : ''
		],
		(array) $photo_class
	));

	// Determine image URL (handle photoSize if available)
	$photo_url = '';
	if ( ! empty( $photo['sizes'] ) && ! empty( $photo_size ) && ! empty( $photo['sizes'][ $photo_size ]['url'] ) ) {
		$photo_url = $photo['sizes'][ $photo_size ]['url'];
	} elseif ( ! empty( $photo['url'] ) ) {
		$photo_url = $photo['url'];
	}


	?>
	<div <?php echo $wrapper_attributes; ?>>
		<div class="<?php echo esc_attr( $outer_classes ); ?>">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:ml-auto lg:pl-4 lg:pt-4">
						<div class="lg:max-w-lg">
							<?php if ( ! empty( $subtitle ) ) : ?>
								<h5 class="<?php echo esc_attr( $subtitle_class ); ?>">
									<?php echo esc_html( $subtitle ); ?>
								</h5>
							<?php endif; ?>

							<?php if ( ! empty( $title ) ) : ?>
								<<?php echo tag_escape( $heading_level ); ?> class="<?php echo esc_attr( $title_classes ); ?>">
									<?php echo esc_html( $title ); ?>
								</<?php echo tag_escape( $heading_level ); ?>>
							<?php endif; ?>

							<?php if ( ! empty( $desc ) ) : ?>
								<p class="<?php echo esc_attr( $desc_classes ); ?>">
									<?php echo esc_html( $desc ); ?>
								</p>
							<?php endif; ?>

							<dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
								<?php echo $content; // innerBlocks content ?>
							</dl>
						</div>
					</div>
					<div class="flex items-start justify-end lg:order-first">
						<?php if ( ! empty( $photo_url ) ) : ?>
							<figure>
								<img
									src="<?php echo esc_url( $photo_url ); ?>"
									alt="<?php echo esc_attr( $photo['alt'] ?? $title ); ?>"
									class="<?php echo esc_attr( $photo_classes ); ?>"
									width="2432"
									height="1442"
								/>
							</figure>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</div>

