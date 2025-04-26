<?php
/**
 * Renders the feature list item block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the block content.
 */
    // Extract block attributes
    $list_text    = isset( $attributes['listText'] ) ? $attributes['listText'] : '';
    $list_class   = isset( $attributes['listClass'] ) ? implode( ' ', $attributes['listClass'] ) : '';
    $heading_level = isset( $attributes['headingLevel'] ) ? $attributes['headingLevel'] : 'h3';
    $list_desc    = isset( $attributes['listDesc'] ) ? $attributes['listDesc'] : '';
    $li_des_class = isset( $attributes['liDesClass'] ) ? implode( ' ', $attributes['liDesClass'] ) : '';
    $icon         = isset( $attributes['icon'] ) ? $attributes['icon'] : null;
    $icon_class   = isset( $attributes['iconClass'] ) ? implode( ' ', $attributes['iconClass'] ) : '';

    // Build the block classes
    $wrapper_attributes = get_block_wrapper_attributes();
    
    // Start output buffering
    ob_start();
    ?>
    <div <?php echo $wrapper_attributes; ?>>
        <div class="relative pl-16">
            <dt class="text-base/7 font-semibold text-gray-900">
                <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg">
                    <?php if ( isset( $icon ) && isset( $icon['url'] ) ) : ?>
                        <img 
                            src="<?php echo esc_url( $icon['url'] ); ?>" 
                            alt="<?php echo esc_attr( $icon['alt'] ?? '' ); ?>" 
                            class="size-6 text-white <?php echo esc_attr( $icon_class ); ?>"
                        />
                    <?php endif; ?>
                </div>
                <?php if ( !empty( $list_text ) ) : ?>
                    <dd class="<?php echo esc_attr( $list_class ); ?>">
                        <?php echo wp_kses_post( $list_text ); ?>
                    </dd>
                <?php endif; ?>
            </dt>

            <?php if ( !empty( $list_desc ) ) : ?>
                <dd class="mt-2 text-base/7 text-gray-600 <?php echo esc_attr( $li_des_class ); ?>">
                    <?php echo wp_kses_post( $list_desc ); ?>
                </dd>
            <?php endif; ?>
           
        </div>
    </div>

