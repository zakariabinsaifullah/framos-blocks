<?php
/**
 * Render callback for your custom block.
 *
 * @param array  $attributes Block attributes.
 * @param string $content    Block inner content (not used here).
 * @return string Block frontend HTML.
 */
    // Extract attributes safely
    $container_classes = ! empty( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $desc              = isset( $attributes['desc'] ) ? $attributes['desc'] : '';
    $desc_classes      = ! empty( $attributes['descClasses'] ) ? implode( ' ', $attributes['descClasses'] ) : '';
    $count             = isset( $attributes['count'] ) ? $attributes['count'] : '';
    $count_classes     = ! empty( $attributes['countClasses'] ) ? implode( ' ', $attributes['countClasses'] ) : '';
    ?>

    <div <?php echo get_block_wrapper_attributes(); ?>>
        <div class="flex flex-col bg-gray-400/5 p-8 <?php echo esc_attr( $container_classes ); ?>">
            
            <?php if ( ! empty( $desc ) ) : ?>
                <dt class="text-sm/6 font-semibold text-gray-600 <?php echo esc_attr( $desc_classes ); ?>">
                    <?php echo wp_kses_post( $desc ); ?>
                </dt>
            <?php endif; ?>

            <?php if ( ! empty( $count ) ) : ?>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 m-0 <?php echo esc_attr( $count_classes ); ?>">
                    <?php echo wp_kses_post( $count ); ?>
                </dd>
            <?php endif; ?>

        </div>
    </div>
