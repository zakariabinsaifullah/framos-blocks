<?php
/**
 * Render function for the FAQ block
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The block content.
 * @param WP_Block $block      The block instance.
 * @return string The rendered output.
 */

    $faqs = $attributes['faqs'] ?? [];
    $container_classes = !empty($attributes['containerClasses']) ? implode(' ', $attributes['containerClasses']) : '';
    $heading = $attributes['heading'] ?? '';
    $heading_level = $attributes['headingLevel'] ?? 'h2';
    $heading_classes = !empty($attributes['headingClasses']) ? implode(' ', $attributes['headingClasses']) : '';
    $sub_heading = $attributes['subHeading'] ?? '';
    $sub_heading_level = $attributes['subHeadingLevel'] ?? 'h3';
    $sub_heading_classes = !empty($attributes['subHeadingClasses']) ? implode(' ', $attributes['subHeadingClasses']) : '';
    $question_tag = $attributes['questionTag'] ?? 'h4';
    $question_classes = !empty($attributes['questionClasses']) ? implode(' ', $attributes['questionClasses']) : '';
    $question_text_classes = !empty($attributes['questionTextClasses']) ? implode(' ', $attributes['questionTextClasses']) : '';
    $answer_classes = !empty($attributes['answerClasses']) ? implode(' ', $attributes['answerClasses']) : '';
    $answer_text_classes = !empty($attributes['answerTextClasses']) ? implode(' ', $attributes['answerTextClasses']) : '';
    
    // Block props classes
    $wrapper_classes = 'wp-block-framos-faqs .faqs-wrapper';
    if (!empty($container_classes)) {
        $wrapper_classes .= ' ' . $container_classes;
    }
    
    ob_start();
    ?>
    <div class="<?php echo esc_attr($wrapper_classes); ?>">
        <?php if (!empty($heading)) : ?>
            <<?php echo esc_attr($heading_level); ?> class="<?php echo esc_attr('text-3xl font-bold text-center text-gray-900 mb-6 mt-0 ' . $heading_classes); ?>">
                <?php echo wp_kses_post($heading); ?>
            </<?php echo esc_attr($heading_level); ?>>
        <?php endif; ?>
        
        <?php if (!empty($sub_heading)) : ?>
            <<?php echo esc_attr($sub_heading_level); ?> class="<?php echo esc_attr('mt-0 mb-6 text-center ' . $sub_heading_classes); ?>">
                <?php echo wp_kses_post($sub_heading); ?>
            </<?php echo esc_attr($sub_heading_level); ?>>
        <?php endif; ?>
        
        <div class="faqs-wrapper">
            <?php if (!empty($faqs)) : ?>
                <?php foreach ($faqs as $index => $faq) : ?>
                    <div class="faq-item py-6 relative <?php echo $index === 0 ? 'first:pt-0' : ''; ?> <?php echo $index === count($faqs) - 1 ? 'last:pb-0' : ''; ?>">
                        <<?php echo esc_attr($question_tag); ?> class="faq-question m-0!">
                            <button 
                                type="button" 
                                class="flex w-full items-center justify-between text-left text-gray-900 bg-transparent border-0 p-0 cursor-pointer faq-button <?php echo esc_attr($question_classes); ?>"
                            >
                                <span class="text-base font-semibold leading-7 <?php echo esc_attr($question_text_classes); ?>">
                                    <?php echo wp_kses_post($faq['question']); ?>
                                </span>
                                <span class="ml-6 flex h-7 items-center">
                                    <svg 
                                        class="size-6 close-icon" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke-width="1.5" 
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <svg 
                                        class="size-6 hidden open-icon" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke-width="1.5" 
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                </span>
                            </button>
                        </<?php echo esc_attr($question_tag); ?>>
                        <div class="mt-2 pr-12 overflow-hidden hidden faq-answer transition-all duration-300 ease-out <?php echo esc_attr($answer_classes); ?>">
                            <p class="text-base leading-7 text-gray-600 m-0! <?php echo esc_attr($answer_text_classes); ?>">
                                <?php echo wp_kses_post($faq['answer']); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php else : ?>
                <p><?php _e('No FAQs added yet.', 'framos'); ?></p>
            <?php endif; ?>
        </div>
    </div>
