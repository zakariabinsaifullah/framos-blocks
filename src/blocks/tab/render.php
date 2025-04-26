<?php
/**
 * Render callback function for the tab content block
 *
 */

    // Extract attributes
    $tab_id = isset($attributes['tabId']) ? $attributes['tabId'] : '';
    $tab_parent_id = isset($attributes['tabParentId']) ? $attributes['tabParentId'] : '';
    $container_classes = isset($attributes['containerClasses']) ? $attributes['containerClasses'] : [];

    // Handle class combinations
    $container_class_list = 'single-tab w-full! grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 lg:w-2/3';
    if (!empty($container_classes) && is_array($container_classes)) {
        $container_class_list .= ' ' . implode(' ', $container_classes);
    }

    // Inner blocks content
    $inner_blocks_content = $content;

    ?>
    <div class="wp-block-framos-tab hidden" data-tab-id="<?php echo esc_attr($tab_id); ?>" data-tab-parent-id="<?php echo esc_attr($tab_parent_id); ?>">
        <div 
            class="<?php echo esc_attr($container_class_list); ?>"
            data-tab-id="<?php echo esc_attr($tab_id); ?>"
            data-tab-parent-id="<?php echo esc_attr($tab_parent_id); ?>"
        >
            <?php echo $inner_blocks_content; ?>
        </div>
    </div>