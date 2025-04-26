
<?php

	$image                = $attributes['image'] ?? null;
	$title                = $attributes['title'] ?? '';
	$description          = $attributes['description'] ?? '';
	$container_classes    = $attributes['containerClasses'] ?? [];
	$image_classes        = $attributes['imageClasses'] ?? [];
	$title_classes        = $attributes['titleClasses'] ?? [];
	$description_classes  = $attributes['descriptionClasses'] ?? [];

	$wrapper_classes = implode( ' ', array_merge(
		[ 'w-full', 'flex', 'justify-between', 'transition-all', 'duration-500', 'gap-5' ],
		(array) $container_classes
	));

	$image_class = implode( ' ', array_merge(
		[ 'tab-icon', 'max-w-full', 'w-8' ],
		(array) $image_classes
	));

	$title_class = implode( ' ', array_merge(
		[
			'text-lg', 'font-medium', 'text-gray-900', 'leading-7',
			'mb-2', 'capitalize', 'transition-all', 'duration-500', 'mt-0'
		],
		(array) $title_classes
	));

	$description_class = implode( ' ', array_merge(
		[
			'font-normal', 'text-gray-500', 'transition-all',
			'duration-500', 'leading-[1.8rem]', 'mb-0'
		],
		(array) $description_classes
	));

	$block_wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $wrapper_classes ] );

	
	?>
	<div <?php echo $block_wrapper_attributes; ?>>
		<div class="relative w-8 h-8">
			<?php if ( ! empty( $image['url'] ) ) : ?>
				<img
					src="<?php echo esc_url( $image['url'] ); ?>"
					alt="<?php echo esc_attr( $image['alt'] ?? '' ); ?>"
					class="<?php echo esc_attr( $image_class ); ?>"
				/>
			<?php endif; ?>
		</div>
		<div class="w-full">
			<?php if ( ! empty( $title ) ) : ?>
				<h4 class="<?php echo esc_attr( $title_class ); ?>">
					<?php echo esc_html( $title ); ?>
				</h4>
			<?php endif; ?>

			<?php if ( ! empty( $description ) ) : ?>
				<p class="<?php echo esc_attr( $description_class ); ?>">
					<?php echo esc_html( $description ); ?>
				</p>
			<?php endif; ?>
		</div>
	</div>

