<?php
/**
 * Render callback function for the accordion block
 *
 */

    // Extract attributes
    $container_classes = isset($attributes['containerClasses']) ? $attributes['containerClasses'] : [];
    $heading = isset($attributes['heading']) ? $attributes['heading'] : '';
    $heading_level = isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h3';
    $heading_classes = isset($attributes['headingClasses']) ? $attributes['headingClasses'] : [];
    $heading_text_classes = isset($attributes['headingTextClasses']) ? $attributes['headingTextClasses'] : [];
    $body_classes = isset($attributes['bodyClasses']) ? $attributes['bodyClasses'] : [];

    // Handle class combinations
    $button_classes = 'accordion-head flex w-full items-start justify-between text-left text-gray-900 dark:text-white focus:outline-none border-0 bg-transparent shadow-none p-0';
    if (!empty($heading_classes) && is_array($heading_classes)) {
        $button_classes .= ' ' . implode(' ', $heading_classes);
    }

    $heading_tag_classes = 'text-base/7 font-semibold py-0 m-0';
    if (!empty($heading_text_classes) && is_array($heading_text_classes)) {
        $heading_tag_classes .= ' ' . implode(' ', $heading_text_classes);
    }

    $body_class_list = 'accordion-body hidden mt-2 pr-12 overflow-hidden text-gray-600 dark:text-gray-300 ml-0';
    if (!empty($body_classes) && is_array($body_classes)) {
        $body_class_list .= ' ' . implode(' ', $body_classes);
    }

    // Get inner blocks content properly
    $inner_blocks_content = '';

    // Method 1: Using inner_blocks property
    if (isset($block->inner_blocks) && !empty($block->inner_blocks)) {
        foreach ($block->inner_blocks as $inner_block) {
            $inner_blocks_content .= $inner_block->render();
        }
    } 
    // Method 2: Use block's inner content directly
    else if (isset($block->inner_content)) {
        $inner_blocks_content = implode('', $block->inner_content);
    }
    // Method 3: Fallback to content (may be empty)
    else {
        $inner_blocks_content = $content;
    }

    // Start output buffering
    // ob_start();
    ?>
    <div class="wp-block-framos-accordion py-6">
        <dt>
            <button 
                type="button" 
                class="<?php echo esc_attr($button_classes); ?>"
            >
                <<?php echo esc_attr($heading_level); ?> class="<?php echo esc_attr($heading_tag_classes); ?>">
                    <?php echo wp_kses_post($heading); ?>
                </<?php echo esc_attr($heading_level); ?>>
                <span class="ml-6 flex h-7 items-center">
                    <svg class="close-icon w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                    <svg 
                        class="open-icon hidden w-6 h-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                </span>
            </button>
        </dt>
        <dd class="<?php echo esc_attr($body_class_list); ?>">
            <?php echo $inner_blocks_content; ?>
        </dd>
    </div>
