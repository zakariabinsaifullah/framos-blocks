<?php
/**
 * Render callback function for the image accordion block
 *
 */

    // Extract attributes
    $container_classes = isset($attributes['containerClasses']) ? $attributes['containerClasses'] : [];
    $heading = isset($attributes['heading']) ? $attributes['heading'] : '';
    $heading_level = isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2';
    $heading_classes = isset($attributes['headingClasses']) ? $attributes['headingClasses'] : [];
    $text = isset($attributes['text']) ? $attributes['text'] : '';
    $text_classes = isset($attributes['textClasses']) ? $attributes['textClasses'] : [];
    $image = isset($attributes['image']) ? $attributes['image'] : [];
    $layout_classes = isset($attributes['layoutClasses']) ? $attributes['layoutClasses'] : [];
    $content_side_classes = isset($attributes['contentSideClasses']) ? $attributes['contentSideClasses'] : [];
    $image_side_classes = isset($attributes['imageSideClasses']) ? $attributes['imageSideClasses'] : [];
    $change_order = isset($attributes['changeOrder']) ? $attributes['changeOrder'] : false;

    // Handle class combinations
    $block_classes = 'wp-block-framos-content-image py-6';
    if (!empty($container_classes) && is_array($container_classes)) {
        $block_classes .= ' ' . implode(' ', $container_classes);
    }

    $layout_class_list = 'mx-auto flex max-w-2xl flex-col lg:flex-row lg:max-w-none lg:items-center gap-8';
    if ($change_order) {
        $layout_class_list .= ' lg:flex-row-reverse';
    }
    if (!empty($layout_classes) && is_array($layout_classes)) {
        $layout_class_list .= ' ' . implode(' ', $layout_classes);
    }

    $content_side_class_list = 'w-full lg:w-1/2';
    if (!empty($content_side_classes) && is_array($content_side_classes)) {
        $content_side_class_list .= ' ' . implode(' ', $content_side_classes);
    }

    $image_side_class_list = 'w-full lg:w-1/2';
    if (!empty($image_side_classes) && is_array($image_side_classes)) {
        $image_side_class_list .= ' ' . implode(' ', $image_side_classes);
    }

    $heading_class_list = 'text-balance text-3xl font-semibold tracking-tight sm:text-4xl';
    if (!empty($heading_classes) && is_array($heading_classes)) {
        $heading_class_list .= ' ' . implode(' ', $heading_classes);
    }

    $text_class_list = 'mt-6 text-base text-gray-600 dark:text-gray-300';
    if (!empty($text_classes) && is_array($text_classes)) {
        $text_class_list .= ' ' . implode(' ', $text_classes);
    }

    // Inner blocks content will be in $content with the hybrid approach
    $inner_blocks_content = $content;

    ?>
    <div class="<?php echo esc_attr($block_classes); ?>">
        <div class="mx-auto max-w-7xl">
            <div class="relative isolate overflow-hidden py-20 sm:rounded-3xl sm:py-12 lg:py-24">
                <div class="<?php echo esc_attr($layout_class_list); ?>">
                    <div class="<?php echo esc_attr($content_side_class_list); ?>">
                        <<?php echo esc_attr($heading_level); ?> class="<?php echo esc_attr($heading_class_list); ?>">
                            <?php echo wp_kses_post($heading); ?>
                        </<?php echo esc_attr($heading_level); ?>>
                        
                        <p class="<?php echo esc_attr($text_class_list); ?>">
                            <?php echo wp_kses_post($text); ?>
                        </p>
                        
                        <div class="max-w-xl lg:mt-2 lg:max-w-lg lg:border-t lg:border-gray-900/10 lg:pt-2">
                            <dl class="framos-accordions mt-8 divide-y divide-gray-900/10">
                                <?php echo $inner_blocks_content; ?>
                            </dl>
                        </div>
                    </div>
                    
                    <div class="<?php echo esc_attr($image_side_class_list); ?>">
                        <?php if (!empty($image) && !empty($image['url'])) : ?>
                            <img 
                                src="<?php echo esc_url($image['url']); ?>" 
                                alt="<?php echo esc_attr(!empty($image['alt']) ? $image['alt'] : $heading); ?>"
                                class="relative -z-20 w-full max-w-full rounded-xl shadow-xl ring-1 ring-white/10" 
                            />
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>