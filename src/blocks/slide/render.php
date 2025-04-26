<?php


    $container_classes = ! empty( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $heading           = $attributes['heading'] ?? '';
    $heading_level     = $attributes['headingLevel'] ?? 'h2';
    $heading_classes   = ! empty( $attributes['headingClasses'] ) ? implode( ' ', $attributes['headingClasses'] ) : '';
    $text              = $attributes['text'] ?? '';
    $text_classes      = ! empty( $attributes['textClasses'] ) ? implode( ' ', $attributes['textClasses'] ) : '';
    $image             = $attributes['image'] ?? null;

    // Make sure heading level is safe
    $allowed_headings = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
    $heading_tag = in_array( $heading_level, $allowed_headings, true ) ? $heading_level : 'h2';

  
    ?>
    <div <?php echo get_block_wrapper_attributes( [ 'class' => 'swiper-slide' ] ); ?>>
        <div class="<?php echo esc_attr( trim( 'border border-gray-100 p-6 rounded-lg h-full ' . $container_classes ) ); ?>">
            <div class="flex mb-4">
                <?php if ( $image && ! empty( $image['url'] ) ) : ?>
                    <img
                        src="<?php echo esc_url( $image['url'] ); ?>"
                        alt="<?php echo esc_attr( $image['alt'] ?? '' ); ?>"
                        class="<?php echo esc_attr( 'wp-image-' . intval( $image['id'] ) . ' w-1/3 h-auto' ); ?>"
                    />
                <?php endif; ?>
            </div>

            <<?php echo esc_html( $heading_tag ); ?> class="<?php echo esc_attr( trim( 'text-xl font-semibold text-gray-800 mb-2 ' . $heading_classes ) ); ?>">
                <?php echo wp_kses_post( $heading ); ?>
            </<?php echo esc_html( $heading_tag ); ?>>

            <p class="<?php echo esc_attr( trim( 'mx-auto mt-6 max-w-xl text-md md:text-lg leading-normal ' . $text_classes ) ); ?>">
                <?php echo wp_kses_post( $text ); ?>
            </p>
        </div>
    </div>

