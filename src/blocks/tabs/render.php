<?php
/**
 * Render callback function for the tabs block
 *
 */

    // Extract attributes
    $tab_titles = isset($attributes['tabTitles']) ? $attributes['tabTitles'] : 
        [    
            [
            'id'    => '1',
            'title' => 'Auto Tracking',
            'icon'  => '',
        ],
        [
            'id'    => '2',
            'title' => 'Powerful Analytic',
            'icon'  => '',
        ],
        [
            'id'    => '3',
            'title' => 'Live Project Report',
            'icon'  => '',
        ],
        [
            'id'    => '4',
            'title' => 'Customization',
            'icon'  => '',
        ]]; 
    $tab_child_count = isset($attributes['tabChildCount']) ? $attributes['tabChildCount'] : 0;
    $tab_title_classes = isset($attributes['tabTitleClasses']) ? $attributes['tabTitleClasses'] : [];
    $ti_title = isset($attributes['tiTitle']) ? $attributes['tiTitle'] : 'Grow faster with pro’s help';
    $ti_description = isset($attributes['tiDescription']) ? $attributes['tiDescription'] : 'We are here to help you grow your business. Our team of experts is ready to assist you with any questions or concerns you may have.';
    $ti_button_text = isset($attributes['tiButtonText']) ? $attributes['tiButtonText'] : 'Get Started';
    $ti_button_link = isset($attributes['tiButtonLink']) ? $attributes['tiButtonLink'] : [];
    $ti_title_classes = isset($attributes['tiTitleClasses']) ? $attributes['tiTitleClasses'] : [];
    $ti_desc_classes = isset($attributes['tiDescClasses']) ? $attributes['tiDescClasses'] : [];
    $ti_btn_classes = isset($attributes['tiBtnClasses']) ? $attributes['tiBtnClasses'] : [];
    $card_classes = isset($attributes['cardClasses']) ? $attributes['cardClasses'] : [];

    // Handle class combinations
    $tab_title_class_list = 'group flex items-center justify-center gap-4 py-8 px-4 text-base font-normal text-gray-500 transition-all duration-500 w-full border-t-0 border-l-0 border-r-0 bg-transparent border-b-2 border-solid border-transparent whitespace-nowrap xl:w-64 lg:w-56 xl:text-xl hover:text-gray-900 hover:border-indigo-600 tab-active:border-b-indigo-600 tab-active:text-gray-900 tablink active';
    if (!empty($tab_title_classes) && is_array($tab_title_classes)) {
        $tab_title_class_list .= ' ' . implode(' ', $tab_title_classes);
    }

    $card_class_list = 'text-center box-border w-full bg-gray-50 rounded-2xl p-8 lg:max-w-none lg:max-w-xs lg:w-1/3';
    if (!empty($card_classes) && is_array($card_classes)) {
        $card_class_list .= ' ' . implode(' ', $card_classes);
    }

    $ti_title_class_list = 'text-lg text-gray-900 font-medium mb-4 mt-0!';
    if (!empty($ti_title_classes) && is_array($ti_title_classes)) {
        $ti_title_class_list .= ' ' . implode(' ', $ti_title_classes);
    }

    $ti_desc_class_list = 'text-sm text-gray-500 leading-6 mb-11 mt-0!';
    if (!empty($ti_desc_classes) && is_array($ti_desc_classes)) {
        $ti_desc_class_list .= ' ' . implode(' ', $ti_desc_classes);
    }

    $ti_btn_class_list = 'bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white! no-underline! font-semibold';
    if (!empty($ti_btn_classes) && is_array($ti_btn_classes)) {
        $ti_btn_class_list .= ' ' . implode(' ', $ti_btn_classes);
    }

    // Button URL and attributes
    $button_url = !empty($ti_button_link['url']) ? esc_url($ti_button_link['url']) : '#';
    $button_target_attr = !empty($ti_button_link['opensInNewTab']) ? ' target="_blank" rel="noopener noreferrer"' : '';

    // Inner blocks content
    $inner_blocks_content = $content;

    ?>
    <div  <?php echo get_block_wrapper_attributes(); ?>>
        <div class="tabs">
            <div class="block">
                <ul class="tab-tiltes flex border-b border-gray-200 space-x-3 transition-all duration-300 -mb-px overflow-x-auto m-0 p-0">
                    <?php if (!empty($tab_titles)) : ?>
                        <?php foreach ($tab_titles as $index => $item) : ?>
                            <li class="list-none" data-title-tab-id="<?php echo esc_attr($item['id']); ?>" role="button">
                                <button
                                    href="javascript:void(0)"
                                    class="<?php echo esc_attr($tab_title_class_list); ?>"
                                    data-tab="tabs-with-underline-1"
                                    role="tab"
                                >
                                    <?php if (!empty($item['icon'])) : ?>
                                        <img
                                            src="<?php echo esc_url($item['icon']); ?>"
                                            alt="tab icon"
                                            class="tab-icon max-w-full w-8"
                                        />
                                    <?php endif; ?>
                                    <span class="tab-title-text"><?php echo wp_kses_post($item['title']); ?></span>
                                </button>
                            </li>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </div>
            <div class="mt-16">
                <div class="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-28">
                    <div class="<?php echo esc_attr($card_class_list); ?>">
                        <h4 class="<?php echo esc_attr($ti_title_class_list); ?>">
                            <?php echo wp_kses_post($ti_title); ?>
                        </h4>
                        <p class="<?php echo esc_attr($ti_desc_class_list); ?>">
                            <?php echo wp_kses_post($ti_description); ?>
                        </p>
                        <a 
                            href="<?php echo $button_url; ?>"
                            <?php echo $button_target_attr; ?>
                            class="<?php echo esc_attr($ti_btn_class_list); ?>"
                        >
                            <span><?php echo wp_kses_post($ti_button_text); ?></span>
                        </a>
                    </div>
                    <div class="tabs-content">
                        <?php echo $inner_blocks_content; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>