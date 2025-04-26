<?php

	$containerClasses  = $attributes['containerClasses'] ?? [];
	$heading           = $attributes['heading'] ?? '';
	$headingLevel      = $attributes['headingLevel'] ?? 'h2';
	$headingClasses    = $attributes['headingClasses'] ?? [];
	$subTitle          = $attributes['subTitle'] ?? '';
	$subTitleClasses   = $attributes['subTitleClasses'] ?? [];
	$text              = $attributes['text'] ?? '';
	$textClasses       = $attributes['textClasses'] ?? [];

	$block_wrapper_attributes = get_block_wrapper_attributes();

	$container_class_str  = implode( ' ', array_merge( [ 'mx-auto', 'max-w-7xl', 'px-6', 'lg:px-8' ], (array) $containerClasses ) );
	$heading_class_str    = implode( ' ', array_merge( [ 'text-base/7', 'font-semibold', 'text-indigo-600' ], (array) $headingClasses ) );
	$sub_title_class_str  = implode( ' ', array_merge( [ 'mt-2', 'text-pretty', 'text-4xl', 'font-semibold', 'tracking-tight', 'text-gray-900', 'sm:text-5xl', 'lg:text-balance' ], (array) $subTitleClasses ) );
	$text_class_str       = implode( ' ', array_merge( [ 'mt-6', 'text-lg/8', 'text-gray-600' ], (array) $textClasses ) );

	
	?>
	<div <?php echo $block_wrapper_attributes; ?>>
		<div class="bg-white py-24 sm:py-32">
			<div class="<?php echo esc_attr( $container_class_str ); ?>">
				<div class="mx-auto max-w-2xl lg:text-center">
					<?php if ( ! empty( $heading ) ) : ?>
						<<?php echo esc_attr( $headingLevel ); ?> class="<?php echo esc_attr( $heading_class_str ); ?>">
							<?php echo esc_html( $heading ); ?>
						</<?php echo esc_attr( $headingLevel ); ?>>
					<?php endif; ?>

					<?php if ( ! empty( $subTitle ) ) : ?>
						<p class="<?php echo esc_attr( $sub_title_class_str ); ?>">
							<?php echo esc_html( $subTitle ); ?>
						</p>
					<?php endif; ?>

					<?php if ( ! empty( $text ) ) : ?>
						<p class="<?php echo esc_attr( $text_class_str ); ?>">
							<?php echo esc_html( $text ); ?>
						</p>
					<?php endif; ?>
				</div>

				<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						<?php echo $content; ?>
					</dl>
				</div>
			</div>
		</div>
	</div>

