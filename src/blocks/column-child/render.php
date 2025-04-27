<?php
/**
 * Render callback function for the feature block
 *
 */
    // Extract attributes
    $title = isset($attributes['title']) ? $attributes['title'] : 'Deploy faster';
    $title_classes = isset($attributes['titleClasses']) ? $attributes['titleClasses'] : [];
    $text = isset($attributes['text']) ? $attributes['text'] : 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.';
    $text_classes = isset($attributes['textClasses']) ? $attributes['textClasses'] : [];
    $button_text = isset($attributes['ButtonText']) ? $attributes['ButtonText'] : 'Get started';
    $button_url = isset($attributes['ButtonUrl']) ? $attributes['ButtonUrl'] : [];
    $button_classes = isset($attributes['ButtonClasses']) ? $attributes['ButtonClasses'] : [];
    $btn_icon = isset($attributes['BtnIcon']) ? $attributes['BtnIcon'] : [];
    $btn_icon_classes = isset($attributes['BtnIconClasses']) ? $attributes['BtnIconClasses'] : [];
    $image = isset($attributes['image']) ? $attributes['image'] : [];
    $image_classes = isset($attributes['imageClasses']) ? $attributes['imageClasses'] : [];

    // Handle class combinations
    $title_class_list = '';
    if (!empty($title_classes) && is_array($title_classes)) {
        $title_class_list = implode(' ', $title_classes);
    }

    $text_class_list = 'flex-auto';
    if (!empty($text_classes) && is_array($text_classes)) {
        $text_class_list .= ' ' . implode(' ', $text_classes);
    }

    $button_class_list = 'text-sm/6 font-semibold text-indigo-600';
    if (!empty($button_classes) && is_array($button_classes)) {
        $button_class_list .= ' ' . implode(' ', $button_classes);
    }

    $btn_icon_class_list = 'size-5';
    if (!empty($btn_icon_classes) && is_array($btn_icon_classes)) {
        $btn_icon_class_list .= ' ' . implode(' ', $btn_icon_classes);
    }

    $image_class_list = 'size-5 flex-none text-indigo-600';
    if (!empty($image_classes) && is_array($image_classes)) {
        $image_class_list .= ' ' . implode(' ', $image_classes);
    }

    // Button URL and attributes
    $button_url_attr = !empty($button_url['url']) ? esc_url($button_url['url']) : '#';
    $button_target_attr = !empty($button_url['opensInNewTab']) ? ' target="_blank" rel="noopener noreferrer"' : '';

    ?>
    <div class="flex flex-col">
        <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
            <?php if (!empty($image) && !empty($image['url'])) : ?>
                <img 
                    src="<?php echo esc_url($image['url']); ?>" 
                    alt="<?php echo esc_attr(!empty($image['alt']) ? $image['alt'] : ''); ?>"
                    class="<?php echo esc_attr($image_class_list); ?>"
                />
            <?php endif; ?>
            <span class="<?php echo esc_attr($title_class_list); ?>">
                <?php echo wp_kses_post($title); ?>
            </span>
        </dt>
        <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
            <p class="<?php echo esc_attr($text_class_list); ?>">
                <?php echo wp_kses_post($text); ?>
            </p>
            <p class="mt-6">
                <a 
                    href="<?php echo $button_url_attr; ?>"
                    <?php echo $button_target_attr; ?>
                    class="<?php echo esc_attr($button_class_list); ?>"
                >
                    <span><?php echo wp_kses_post($button_text); ?></span>
                    <?php if (!empty($btn_icon) && !empty($btn_icon['url'])) : ?>
                        <span aria-hidden="true">
                            <img 
                                src="<?php echo esc_url($btn_icon['url']); ?>" 
                                alt="<?php echo esc_attr(!empty($btn_icon['alt']) ? $btn_icon['alt'] : ''); ?>"
                                class="<?php echo esc_attr($btn_icon_class_list); ?>"
                            />
                        </span>
                    <?php endif; ?>
                </a>
            </p>
        </dd>
    </div>