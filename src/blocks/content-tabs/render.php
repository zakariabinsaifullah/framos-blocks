<?php
/**
 * Render callback function for the header block
 *
 */

    // Extract attributes
    $container_classes = isset($attributes['containerClasses']) ? $attributes['containerClasses'] : [];
    $subtitle = isset($attributes['subtitle']) ? $attributes['subtitle'] : 'Global Work Automation Hub';
    $subtitle_classes = isset($attributes['subtitleClasses']) ? $attributes['subtitleClasses'] : [];
    $title = isset($attributes['title']) ? $attributes['title'] : 'Elevate Your Workforce Globally';
    $title_class = isset($attributes['titleClass']) ? $attributes['titleClass'] : [];
    $heading_level = isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2';
    $desc = isset($attributes['desc']) ? $attributes['desc'] : 'Revolutionize your workforce with our seamless hiring solutions. Find and attract top talent globally while optimizing your recruitment process for success.';
    $desc_class = isset($attributes['descClass']) ? $attributes['descClass'] : [];
        // Handle class combinations
    $container_class_list = 'relative pt-4 lg:pt-12 lg:pb-12';
    if (!empty($container_classes) && is_array($container_classes)) {
        $container_class_list .= ' ' . implode(' ', $container_classes);
    }

    $subtitle_class_list = 'text-sm font-medium text-black text-center mb-5';
    if (!empty($subtitle_classes) && is_array($subtitle_classes)) {
        $subtitle_class_list .= ' ' . implode(' ', $subtitle_classes);
    }

    $title_class_list = 'font-manrope font-semibold text-5xl leading-tight text-center mb-5';
    if (!empty($title_class) && is_array($title_class)) {
        $title_class_list .= ' ' . implode(' ', $title_class);
    }

    $desc_class_list = 'text-sm font-normal text-gray-500 text-center mb-10 max-w-2xl mx-auto';
    if (!empty($desc_class) && is_array($desc_class)) {
        $desc_class_list .= ' ' . implode(' ', $desc_class);
    }

    // Inner blocks content
    $inner_blocks_content = $content;

    ?>
    <section class="<?php echo esc_attr($container_class_list); ?>">
        <div class="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <?php if (!empty($subtitle)) : ?>
                <p class="<?php echo esc_attr($subtitle_class_list); ?>">
                    <?php echo wp_kses_post($subtitle); ?>
                </p>
            <?php endif; ?>

            <?php if (!empty($title)) : ?>
                <<?php echo esc_attr($heading_level); ?> class="<?php echo esc_attr($title_class_list); ?>">
                    <?php echo wp_kses_post($title); ?>
                </<?php echo esc_attr($heading_level); ?>>
            <?php endif; ?>

            <?php if (!empty($desc)) : ?>
                <p class="<?php echo esc_attr($desc_class_list); ?>">
                    <?php echo wp_kses_post($desc); ?>
                </p>
            <?php endif; ?>
            <?php echo $inner_blocks_content; ?>
        </div>
    </section>