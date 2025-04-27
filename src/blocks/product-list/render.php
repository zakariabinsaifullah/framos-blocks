<?php
/**
 * Render callback function for the list item block
 *
 */
    // Extract attributes
    $list_text = isset($attributes['listText']) ? $attributes['listText'] : '';
    $list_class = isset($attributes['listClass']) ? $attributes['listClass'] : [];
    $icon = isset($attributes['icon']) ? $attributes['icon'] : [];
    $icon_class = isset($attributes['iconClass']) ? $attributes['iconClass'] : [];

    // Handle class combinations
    $list_class_list = 'inline';
    if (!empty($list_class) && is_array($list_class)) {
        $list_class_list .= ' ' . implode(' ', $list_class);
    }

    $icon_class_list = 'absolute left-1 top-1 size-5 text-indigo-600';
    if (!empty($icon_class) && is_array($icon_class)) {
        $icon_class_list .= ' ' . implode(' ', $icon_class);
    }

    ?>
    <div>
        <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                    <?php if (!empty($icon) && !empty($icon['url'])) : ?>
                        <img 
                            src="<?php echo esc_url($icon['url']); ?>" 
                            alt="<?php echo esc_attr(!empty($icon['alt']) ? $icon['alt'] : ''); ?>"
                            class="<?php echo esc_attr($icon_class_list); ?>"
                        />
                    <?php endif; ?>
                </dt>

                <span class="<?php echo esc_attr($list_class_list); ?>">
                    <?php echo wp_kses_post($list_text); ?>
                </span>
            </div>
        </dl>
    </div>