<?php
/**
 * Render callback function for the CTA block
 *
 */

// Extract attributes
$container_classes        = isset($attributes['containerClasses']) ? $attributes['containerClasses'] : [];
$heading                  = isset($attributes['heading']) ? $attributes['heading'] : '';
$heading_level            = isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2';
$heading_classes          = isset($attributes['headingClasses']) ? $attributes['headingClasses'] : [];
$text                     = isset($attributes['text']) ? $attributes['text'] : '';
$text_classes             = isset($attributes['textClasses']) ? $attributes['textClasses'] : [];
$primary_button_text      = isset($attributes['primaryButtonText']) ? $attributes['primaryButtonText'] : '';
$primary_button_url       = isset($attributes['primaryButtonUrl']) ? $attributes['primaryButtonUrl'] : [];
$primary_button_classes   = isset($attributes['primaryButtonClasses']) ? $attributes['primaryButtonClasses'] : [];
$secondary_button_text    = isset($attributes['secondaryButtonText']) ? $attributes['secondaryButtonText'] : '';
$secondary_button_url     = isset($attributes['secondaryButtonUrl']) ? $attributes['secondaryButtonUrl'] : [];
$secondary_button_classes = isset($attributes['secondaryButtonClasses']) ? $attributes['secondaryButtonClasses'] : [];

// Handle class combinations
$container_class_list = 'relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16';
if (!empty($container_classes) && is_array($container_classes)) {
    $container_class_list .= ' ' . implode(' ', $container_classes);
}

$heading_class_list = 'mx-auto max-w-2xl text-2xl md:text-3xl font-bold tracking-tight text-white! sm:text-4xl';
if (!empty($heading_classes) && is_array($heading_classes)) {
    $heading_class_list .= ' ' . implode(' ', $heading_classes);
}

$text_class_list = 'mx-auto mt-6 max-w-xl text-md md:text-lg leading-normal text-white';
if (!empty($text_classes) && is_array($text_classes)) {
    $text_class_list .= ' ' . implode(' ', $text_classes);
}

$primary_button_class_list = 'btn-main rounded-xl bg-primary px-11 py-2.5 text-base border-0 border-t-[3px] text-white shadow-sm hover:bg-framosDarkBlue dark:bg-primary dark:text-white w-full sm:w-auto justify-center flex items-center border-t border-primary100 dark:border-primary100 hover:border-primary hover:text-white';
if (!empty($primary_button_classes) && is_array($primary_button_classes)) {
    $primary_button_class_list .= ' ' . implode(' ', $primary_button_classes);
}

$secondary_button_class_list = 'text-sm font-semibold leading-6 text-white hover:text-primary';
if (!empty($secondary_button_classes) && is_array($secondary_button_classes)) {
    $secondary_button_class_list .= ' ' . implode(' ', $secondary_button_classes);
}

// Primary button URL and attributes
$primary_button_url_attr    = !empty($primary_button_url['url']) ? esc_url($primary_button_url['url']) : '#';
$primary_button_target_attr = !empty($primary_button_url['opensInNewTab']) ? ' target="_blank" rel="noopener noreferrer"' : '';

// Secondary button URL and attributes
$secondary_button_url_attr    = !empty($secondary_button_url['url']) ? esc_url($secondary_button_url['url']) : '#';
$secondary_button_target_attr = !empty($secondary_button_url['opensInNewTab']) ? ' target="_blank" rel="noopener noreferrer"' : '';
?>
<div>
    <div class="mx-auto max-w-6xl py-12 px-0 md:px-6">
        <div class="<?php echo esc_attr($container_class_list); ?>">
            <<?php echo esc_attr($heading_level); ?> class="<?php echo esc_attr($heading_class_list); ?>">
                <?php echo wp_kses_post($heading); ?>
            </<?php echo esc_attr($heading_level); ?>>
            
            <p class="<?php echo esc_attr($text_class_list); ?>">
                <?php echo wp_kses_post($text); ?>
            </p>

            <div class="mt-10 flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-6">
                <a 
                    href="<?php echo $primary_button_url_attr; ?>"
                    <?php echo $primary_button_target_attr; ?>
                    class="<?php echo esc_attr($primary_button_class_list); ?>"
                >
                    <span><?php echo wp_kses_post($primary_button_text); ?></span>
                    <div class="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                        >
                            <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </a>
                <a 
                    href="<?php echo $secondary_button_url_attr; ?>"
                    <?php echo $secondary_button_target_attr; ?>
                    class="<?php echo esc_attr($secondary_button_class_list); ?>"
                >
                    <span><?php echo wp_kses_post($secondary_button_text); ?></span>
                    <span aria-hidden="true">→</span>
                </a>
            </div>
            <svg
                viewBox="0 0 1024 1024"
                class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stop-color="#7775D6" />
                        <stop offset="1" stop-color="#0098b0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    </div>
</div>

