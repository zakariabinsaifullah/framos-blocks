<?php
/**
 * Render function for the CTA Block with Left Image
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The block content.
 * @param WP_Block $block      The block instance.
 * @return string The rendered output.
 */
    // Extract attributes
    $container_classes = !empty($attributes['containerClasses']) ? implode(' ', $attributes['containerClasses']) : '';
    $heading = $attributes['heading'] ?? '';
    $heading_level = $attributes['headingLevel'] ?? 'h2';
    $heading_classes = !empty($attributes['headingClasses']) ? implode(' ', $attributes['headingClasses']) : '';
    $sub_title = $attributes['subTitle'] ?? '';
    $sub_title_classes = !empty($attributes['subTitleClasses']) ? implode(' ', $attributes['subTitleClasses']) : '';
    $text = $attributes['text'] ?? '';
    $text_classes = !empty($attributes['textClasses']) ? implode(' ', $attributes['textClasses']) : '';
    $primary_button_text = $attributes['primaryButtonText'] ?? '';
    $primary_button_url = $attributes['primaryButtonUrl'] ?? [];
    $primary_button_classes = !empty($attributes['primaryButtonClasses']) ? implode(' ', $attributes['primaryButtonClasses']) : '';
    $left_image = $attributes['leftImage'] ?? [];
    $left_image_classes = !empty($attributes['leftImageClasses']) ? implode(' ', $attributes['leftImageClasses']) : '';
    
    ob_start();
    ?>
    <div <?php echo get_block_wrapper_attributes(); ?>>
        <div class="relative bg-gray-900 <?php echo esc_attr($container_classes); ?>">
            <div class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <?php if (!empty($left_image) && !empty($left_image['url'])) : ?>
                    <img
                        class="size-full object-cover <?php echo esc_attr($left_image_classes); ?>"
                        src="<?php echo esc_url($left_image['url']); ?>"
                        alt="<?php echo !empty($left_image['alt']) ? esc_attr($left_image['alt']) : ''; ?>"
                    />
                <?php else : ?>
                    <img
                        src="https://placehold.co/400x300"
                        alt="image"
                        class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                    />
                <?php endif; ?>
            </div>
            <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                    <?php if (!empty($heading)) : ?>
                        <<?php echo esc_attr($heading_level); ?> class="text-base/7 font-semibold text-indigo-400 <?php echo esc_attr($heading_classes); ?>">
                            <?php echo wp_kses_post($heading); ?>
                        </<?php echo esc_attr($heading_level); ?>>
                    <?php endif; ?>

                    <?php if (!empty($sub_title)) : ?>
                        <p class="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl <?php echo esc_attr($sub_title_classes); ?>">
                            <?php echo wp_kses_post($sub_title); ?>
                        </p>
                    <?php endif; ?>

                    <?php if (!empty($text)) : ?>
                        <p class="mt-6 text-base/7 text-gray-300 <?php echo esc_attr($text_classes); ?>">
                            <?php echo wp_kses_post($text); ?>
                        </p>
                    <?php endif; ?>

                    <?php if (!empty($primary_button_text)) : ?>
                        <div class="mt-8">
                            <a
                                href="<?php echo !empty($primary_button_url['url']) ? esc_url($primary_button_url['url']) : '#'; ?>"
                                <?php if (!empty($primary_button_url['opensInNewTab'])) : ?>
                                    target="_blank"
                                    rel="noopener noreferrer"
                                <?php endif; ?>
                                class="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white <?php echo esc_attr($primary_button_classes); ?>"
                            >
                                <span><?php echo wp_kses_post($primary_button_text); ?></span>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

