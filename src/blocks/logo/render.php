<?php
// Attributes
	$icon      = $attributes['icon'] ?? null;
	$logo_link = $attributes['logoLink'] ?? null;
	$logo_class = $attributes['logoClass'] ?? '';

	$url     = $logo_link['url'] ?? '#';
	$open_new_tab = $logo_link['opensInNewTab'] ?? false;


	?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
		<a
			href="<?php echo esc_url( $url ); ?>"
			class="text-gray-600 transition-all duration-500 hover:text-red-600 <?php echo esc_attr( $logo_class ); ?>"
			<?php if ( $open_new_tab ) : ?>
				target="_blank" rel="noopener noreferrer"
			<?php endif; ?>
		>
			<?php if ( $icon && ! empty( $icon['url'] ) ) : ?>
				<img
					src="<?php echo esc_url( $icon['url'] ); ?>"
					alt="<?php echo esc_attr( $icon['alt'] ?? 'Icon' ); ?>"
					class="max-w-full"
				/>
			<?php endif; ?>
		</a>
	</div>

