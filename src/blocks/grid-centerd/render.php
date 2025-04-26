<?php
/**
 * Renders the block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the block content.
 */

    // Extract block attributes
    $subtitle         = isset( $attributes['subtitle'] ) ? $attributes['subtitle'] : '';
    $subtitle_class   = isset( $attributes['subtitleClass'] ) ? implode( ' ', $attributes['subtitleClass'] ) : '';
    $heading_level    = isset( $attributes['headingLevel'] ) ? $attributes['headingLevel'] : 'h2';
    $heading          = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
    $heading_classes  = isset( $attributes['headingClasses'] ) ? implode( ' ', $attributes['headingClasses'] ) : '';
    $desc             = isset( $attributes['desc'] ) ? $attributes['desc'] : '';
    $desc_class       = isset( $attributes['descClass'] ) ? implode( ' ', $attributes['descClass'] ) : '';
    $container_classes = isset( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';

    // Get inner blocks content
    $inner_blocks = '';
    if ( isset( $block->inner_blocks ) && !empty( $block->inner_blocks ) ) {
        foreach ( $block->inner_blocks as $inner_block ) {
            $inner_blocks .= $inner_block->render();
        }
    }

    // Build the block classes
    $wrapper_attributes = get_block_wrapper_attributes();
    
    // Start output buffering
    ob_start();
    ?>
    <div <?php echo $wrapper_attributes; ?>>
        <div class="bg-white py-24 sm:py-32 <?php echo esc_attr( $container_classes ); ?>">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <?php if ( !empty( $subtitle ) ) : ?>
                        <h4 class="text-base/7 font-semibold text-indigo-600 <?php echo esc_attr( $subtitle_class ); ?>">
                            <?php echo wp_kses_post( $subtitle ); ?>
                        </h4>
                    <?php endif; ?>
                    
                    <?php if ( !empty( $heading ) ) : ?>
                        <<?php echo esc_attr( $heading_level ); ?> class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance <?php echo esc_attr( $heading_classes ); ?>">
                            <?php echo wp_kses_post( $heading ); ?>
                        </<?php echo esc_attr( $heading_level ); ?>>
                    <?php endif; ?>
                    
                    <?php if ( !empty( $desc ) ) : ?>
                        <p class="mt-6 text-lg/8 text-gray-600 <?php echo esc_attr( $desc_class ); ?>">
                            <?php echo wp_kses_post( $desc ); ?>
                        </p>
                    <?php endif; ?>
                </div>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">       
                    <div class="grid grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <?php echo $inner_blocks; ?>
                    </div>
                </div>

            </div>
        </div>
    </div>
