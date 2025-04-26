<?php

    $container_classes     = !empty( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $heading               = $attributes['heading'] ?? '';
    $heading_level         = $attributes['headingLevel'] ?? 'h2';
    $heading_classes       = !empty( $attributes['headingClasses'] ) ? implode( ' ', $attributes['headingClasses'] ) : '';
    $text                  = $attributes['text'] ?? '';
    $text_classes          = !empty( $attributes['textClasses'] ) ? implode( ' ', $attributes['textClasses'] ) : '';
    $primary_button_text   = $attributes['primaryButtonText'] ?? '';
    $primary_button_url    = $attributes['primaryButtonUrl']['url'] ?? '#';
    $primary_new_tab       = $attributes['primaryButtonUrl']['opensInNewTab'] ?? false;
    $primary_button_classes= !empty( $attributes['primaryButtonClasses'] ) ? implode( ' ', $attributes['primaryButtonClasses'] ) : '';
    $secondary_button_text = $attributes['secondaryButtonText'] ?? '';
    $secondary_button_url  = $attributes['secondaryButtonUrl']['url'] ?? '#';
    $secondary_new_tab     = $attributes['secondaryButtonUrl']['opensInNewTab'] ?? false;
    $secondary_button_classes = !empty( $attributes['secondaryButtonClasses'] ) ? implode( ' ', $attributes['secondaryButtonClasses'] ) : '';
    $offset_image          = $attributes['offsetImage'] ?? null;
    $offset_image_classes  = !empty( $attributes['offsetImageClasses'] ) ? implode( ' ', $attributes['offsetImageClasses'] ) : '';


    ?>
    <div <?php echo get_block_wrapper_attributes(); ?>>
        <div class="bg-white">
            <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 <?php echo esc_attr( $container_classes ); ?>">
                <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"></div>
                <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        
                        <<?php echo esc_html( $heading_level ); ?> class="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto <?php echo esc_attr( $heading_classes ); ?>">
                            <?php echo wp_kses_post( $heading ); ?>
                        </<?php echo esc_html( $heading_level ); ?>>

                        <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p class="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 <?php echo esc_attr( $text_classes ); ?>">
                                <?php echo wp_kses_post( $text ); ?>
                            </p>

                            <div class="mt-10 flex items-center gap-x-6">
                                <a href="<?php echo esc_url( $primary_button_url ); ?>"
                                   <?php if ( $primary_new_tab ) : ?>target="_blank" rel="noopener noreferrer"<?php endif; ?>
                                   class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 <?php echo esc_attr( $primary_button_classes ); ?>">
                                    <span><?php echo esc_html( $primary_button_text ); ?></span>
                                </a>

                                <a href="<?php echo esc_url( $secondary_button_url ); ?>"
                                   <?php if ( $secondary_new_tab ) : ?>target="_blank" rel="noopener noreferrer"<?php endif; ?>
                                   class="text-sm/6 font-semibold text-gray-900 <?php echo esc_attr( $secondary_button_classes ); ?>">
                                    <span><?php echo esc_html( $secondary_button_text ); ?></span>
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                        <?php if ( $offset_image && !empty( $offset_image['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $offset_image['url'] ); ?>"
                                 alt="<?php echo esc_attr( $offset_image['alt'] ?? '' ); ?>"
                                 class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 <?php echo esc_attr( $offset_image_classes ); ?>" />
                        <?php else : ?>
                            <div class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"></div>
                        <?php endif; ?>

                    </div>
                </div>
                <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
            </div>
        </div>
    </div>

