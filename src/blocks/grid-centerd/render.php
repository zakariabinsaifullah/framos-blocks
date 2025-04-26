<?php
/**
 * Server-side render callback for the Gutenberg block.
 *
 * @param array  $attributes The block attributes.
 * @param string $content    The block inner content (InnerBlocks).
 * @return string            Rendered HTML.
 */

	$subtitle         = $attributes['subtitle'] ?? '';
	$subtitleClass    = $attributes['subtitleClass'] ?? [];
	$heading          = $attributes['heading'] ?? '';
	$headingLevel     = $attributes['headingLevel'] ?? 'h2';
	$headingClasses   = $attributes['headingClasses'] ?? [];
	$desc             = $attributes['desc'] ?? '';
	$descClass        = $attributes['descClass'] ?? [];
	$containerClasses = $attributes['containerClasses'] ?? [];

	$block_wrapper_attributes = get_block_wrapper_attributes();

	$container_class_str  = implode( ' ', array_merge( [ 'bg-white', 'py-24', 'sm:py-32' ], (array) $containerClasses ) );
	$subtitle_class_str   = implode( ' ', array_merge( [ 'text-base/7', 'font-semibold', 'text-indigo-600' ], (array) $subtitleClass ) );
	$heading_class_str    = implode( ' ', array_merge( [ 'mt-2', 'text-pretty', 'text-4xl', 'font-semibold', 'tracking-tight', 'text-gray-900', 'sm:text-5xl', 'lg:text-balance' ], (array) $headingClasses ) );
	$desc_class_str       = implode( ' ', array_merge( [ 'mt-6', 'text-lg/8', 'text-gray-600' ], (array) $descClass ) );

	?>
	<div <?php echo $block_wrapper_attributes; ?>>
		<div class="<?php echo esc_attr( $container_class_str ); ?>">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					<?php if ( ! empty( $subtitle ) ) : ?>
						<h4 class="<?php echo esc_attr( $subtitle_class_str ); ?>">
							<?php echo esc_html( $subtitle ); ?>
						</h4>
					<?php endif; ?>

					<?php if ( ! empty( $heading ) ) : ?>
						<<?php echo esc_html( $headingLevel ); ?> class="<?php echo esc_attr( $heading_class_str ); ?>">
							<?php echo esc_html( $heading ); ?>
						</<?php echo esc_html( $headingLevel ); ?>>
					<?php endif; ?>

					<?php if ( ! empty( $desc ) ) : ?>
						<p class="<?php echo esc_attr( $desc_class_str ); ?>">
							<?php echo esc_html( $desc ); ?>
						</p>
					<?php endif; ?>
				</div>

				<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<div class="grid grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						<?php echo $content; ?>
					</div>
				</div>

			</div>
		</div>
	</div>

