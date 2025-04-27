<?php
/**
 * Render callback for your custom block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner blocks content.
 * @return string Block frontend HTML.
 */
    // Extract attributes safely
    $container_classes    = ! empty( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $heading              = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
    $heading_level        = isset( $attributes['headingLevel'] ) ? $attributes['headingLevel'] : 'h2';
    $heading_classes      = ! empty( $attributes['headingClasses'] ) ? implode( ' ', $attributes['headingClasses'] ) : '';
    $title                = isset( $attributes['title'] ) ? $attributes['title'] : '';
    $title_classes        = ! empty( $attributes['titleClasses'] ) ? implode( ' ', $attributes['titleClasses'] ) : '';
    ?>

    <div <?php echo get_block_wrapper_attributes(); ?>>
        <div class="py-24 sm:py-32 <?php echo esc_attr( $container_classes ); ?>">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-none">
                    <div class="text-center">
                        <?php if ( ! empty( $heading ) ) : ?>
                            <<?php echo esc_html( $heading_level ); ?> class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl <?php echo esc_attr( $heading_classes ); ?>">
                                <?php echo wp_kses_post( $heading ); ?>
                            </<?php echo esc_html( $heading_level ); ?>>
                        <?php endif; ?>

                        <?php if ( ! empty( $title ) ) : ?>
                            <p class="mt-4 text-lg/8 text-gray-600 <?php echo esc_attr( $title_classes ); ?>">
                                <?php echo wp_kses_post( $title ); ?>
                            </p>
                        <?php endif; ?>
                    </div>

                    <div class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        <?php echo $content; ?>
                    </div>

                </div>
            </div>
        </div>
    </div>

