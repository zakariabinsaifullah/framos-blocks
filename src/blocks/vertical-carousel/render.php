<?php
/**
 * Render callback function for the hero slider block
 *
 */
    // Extract attributes
    $container_classes = isset($attributes['containerClasses']) ? $attributes['containerClasses'] : [];
    $heading = isset($attributes['heading']) ? $attributes['heading'] : '';
    $heading_level = isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2';
    $heading_classes = isset($attributes['headingClasses']) ? $attributes['headingClasses'] : [];
    $text = isset($attributes['text']) ? $attributes['text'] : '';
    $text_classes = isset($attributes['textClasses']) ? $attributes['textClasses'] : [];
    $primary_button_text = isset($attributes['primaryButtonText']) ? $attributes['primaryButtonText'] : '';
    $primary_button_url = isset($attributes['primaryButtonUrl']) ? $attributes['primaryButtonUrl'] : [];
    $primary_button_classes = isset($attributes['primaryButtonClasses']) ? $attributes['primaryButtonClasses'] : [];
    $pb_text_classes = isset($attributes['pbTextClasses']) ? $attributes['pbTextClasses'] : [];
    $secondary_button_text = isset($attributes['secondaryButtonText']) ? $attributes['secondaryButtonText'] : '';
    $secondary_button_url = isset($attributes['secondaryButtonUrl']) ? $attributes['secondaryButtonUrl'] : [];
    $secondary_button_classes = isset($attributes['secondaryButtonClasses']) ? $attributes['secondaryButtonClasses'] : [];
    $sb_text_classes = isset($attributes['sbTextClasses']) ? $attributes['sbTextClasses'] : [];
    $slider_wrapper_classes = isset($attributes['sliderWrapperClasses']) ? $attributes['sliderWrapperClasses'] : [];
    $slider_one_images = isset($attributes['sliderOneImages']) ? $attributes['sliderOneImages'] : [];
    $slider_two_images = isset($attributes['sliderTwoImages']) ? $attributes['sliderTwoImages'] : [];
    $slider_one_classes = isset($attributes['sliderOneClasses']) ? $attributes['sliderOneClasses'] : [];
    $slider_two_classes = isset($attributes['sliderTwoClasses']) ? $attributes['sliderTwoClasses'] : [];

    // Handle class combinations
    $container_class_list = 'wp-block-framos-vertical-carousel w-full lg:h-screen';
    if (!empty($container_classes) && is_array($container_classes)) {
        $container_class_list .= ' ' . implode(' ', $container_classes);
    }

    $heading_class_list = 'lg:max-w-lg text-gray-900 xl:text-6xl text-5xl font-bold font-manrope xl:leading-normal leading-snug lg:text-start text-center';
    if (!empty($heading_classes) && is_array($heading_classes)) {
        $heading_class_list .= ' ' . implode(' ', $heading_classes);
    }

    $text_class_list = 'lg:max-w-2xl text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center';
    if (!empty($text_classes) && is_array($text_classes)) {
        $text_class_list .= ' ' . implode(' ', $text_classes);
    }

    $primary_button_class_list = 'sm:w-fit w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex';
    if (!empty($primary_button_classes) && is_array($primary_button_classes)) {
        $primary_button_class_list .= ' ' . implode(' ', $primary_button_classes);
    }

    $pb_text_class_list = 'px-2 py-px text-white text-base font-semibold leading-relaxed';
    if (!empty($pb_text_classes) && is_array($pb_text_classes)) {
        $pb_text_class_list .= ' ' . implode(' ', $pb_text_classes);
    }

    $secondary_button_class_list = 'sm:w-fit w-full px-5 py-2.5 bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex';
    if (!empty($secondary_button_classes) && is_array($secondary_button_classes)) {
        $secondary_button_class_list .= ' ' . implode(' ', $secondary_button_classes);
    }

    $sb_text_class_list = 'px-2 py-px text-gray-900 text-base font-semibold leading-relaxed';
    if (!empty($sb_text_classes) && is_array($sb_text_classes)) {
        $sb_text_class_list .= ' ' . implode(' ', $sb_text_classes);
    }

    $slider_wrapper_class_list = 'xl:col-span-5 lg:col-span-6 col-span-12 justify-center items-center gap-14 flex lg:h-[800px] h-[400px] overflow-hidden relative flex-row';
    if (!empty($slider_wrapper_classes) && is_array($slider_wrapper_classes)) {
        $slider_wrapper_class_list .= ' ' . implode(' ', $slider_wrapper_classes);
    }

    $slider_one_class_list = 'swiper-wrapper w-fit h-fit flex gap-8';
    if (!empty($slider_one_classes) && is_array($slider_one_classes)) {
        $slider_one_class_list .= ' ' . implode(' ', $slider_one_classes);
    }

    $slider_two_class_list = 'swiper-wrapper w-fit h-fit flex gap-8';
    if (!empty($slider_two_classes) && is_array($slider_two_classes)) {
        $slider_two_class_list .= ' ' . implode(' ', $slider_two_classes);
    }

    ?>
    <section class="<?php echo esc_attr($container_class_list); ?>">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:h-screen">
            <div class="w-full justify-start items-center gap-7 grid lg:grid-cols-12 grid-cols-1 lg:h-full">
                <div class="xl:col-span-7 lg:col-span-6 col-span-12 lg:pr-10 lg:py-10 py-4 flex-col justify-center items-start lg:gap-11 gap-7 inline-flex">
                    <div class="flex-col justify-start items-start gap-3 flex">
                        <<?php echo esc_attr($heading_level); ?> class="<?php echo esc_attr($heading_class_list); ?>">
                            <?php echo wp_kses_post($heading); ?>
                        </<?php echo esc_attr($heading_level); ?>>
                        
                        <p class="<?php echo esc_attr($text_class_list); ?>">
                            <?php echo wp_kses_post($text); ?>
                        </p>
                    </div>
                    <div class="w-full lg:justify-start justify-center items-center gap-5 flex sm:flex-row flex-col">
                        <button class="<?php echo esc_attr($primary_button_class_list); ?>">
                            <span class="<?php echo esc_attr($pb_text_class_list); ?>">
                                <?php echo wp_kses_post($primary_button_text); ?>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M7.50295 4.99609L12.5032 9.9963L7.5 14.9994"
                                    stroke="white"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                        <button class="<?php echo esc_attr($secondary_button_class_list); ?>">
                            <span class="<?php echo esc_attr($sb_text_class_list); ?>">
                                <?php echo wp_kses_post($secondary_button_text); ?>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="<?php echo esc_attr($slider_wrapper_class_list); ?>">
                    <div class="swiper-container w-fit">
                        <div class="<?php echo esc_attr($slider_one_class_list); ?>">
                            <?php if (!empty($slider_one_images) && is_array($slider_one_images)) : ?>
                                <?php foreach ($slider_one_images as $image) : ?>
                                    <div class="swiper-slide w-[200px] h-[310px]">
                                        <img 
                                            src="<?php echo esc_url($image['url']); ?>" 
                                            alt="gallery-image" 
                                            class="w-[200px] h-[310px] object-cover" 
                                        />
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="swiper-container1 w-[200px]">
                        <div class="<?php echo esc_attr($slider_two_class_list); ?>">
                            <?php if (!empty($slider_two_images) && is_array($slider_two_images)) : ?>
                                <?php foreach ($slider_two_images as $image) : ?>
                                    <div class="swiper-slide w-[200px] h-[310px]">
                                        <img 
                                            src="<?php echo esc_url($image['url']); ?>" 
                                            alt="gallery-image" 
                                            class="w-[200px] h-[310px] object-cover" 
                                        />
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>