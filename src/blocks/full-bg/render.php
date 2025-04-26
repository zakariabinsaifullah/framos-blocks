<?php
    $containerBgImage        = $attributes['containerBgImage'] ?? null;
    $containerClasses        = $attributes['containerClasses'] ?? [];
    $heading                 = $attributes['heading'] ?? '';
    $headingLevel            = $attributes['headingLevel'] ?? 'h2'; // default h2
    $headingClasses          = $attributes['headingClasses'] ?? [];
    $subHeading              = $attributes['subHeading'] ?? '';
    $subHeadingClasses       = $attributes['subHeadingClasses'] ?? [];
    $text                    = $attributes['text'] ?? '';
    $textClasses             = $attributes['textClasses'] ?? [];
    $primaryButtonText       = $attributes['primaryButtonText'] ?? '';
    $primaryButtonUrl        = $attributes['primaryButtonUrl'] ?? null;
    $primaryButtonClasses    = $attributes['primaryButtonClasses'] ?? [];
    $secondaryButtonText     = $attributes['secondaryButtonText'] ?? '';
    $secondaryButtonUrl      = $attributes['secondaryButtonUrl'] ?? null;
    $secondaryButtonClasses  = $attributes['secondaryButtonClasses'] ?? [];

    // Helper to join class arrays
    $get_classes = function( $base_classes, $custom_classes ) {
        $custom = is_array( $custom_classes ) && ! empty( $custom_classes ) ? implode( ' ', $custom_classes ) : '';
        return trim( $base_classes . ' ' . $custom );
    };

  
    ?>
    <div <?php echo get_block_wrapper_attributes(); ?>>
        <div class="<?php echo esc_attr( $get_classes( 'bg-gray-900', $containerClasses ) ); ?>">
            <div class="relative isolate overflow-hidden pt-14">
                <?php if ( ! empty( $containerBgImage['url'] ) ) : ?>
                    <img
                        src="<?php echo esc_url( $containerBgImage['url'] ); ?>"
                        alt="<?php echo esc_attr( $containerBgImage['alt'] ?? $heading ); ?>"
                        class="absolute inset-0 -z-10 size-full object-cover"
                    />
                <?php endif; ?>

                <!-- Top gradient shape -->
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
                        -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
                        opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 
                        85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 
                        47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 
                        27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);">
                    </div>
                </div>

                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                            <?php if ( ! empty( $subHeading ) ) : ?>
                                <div class="<?php echo esc_attr( $get_classes(
                                    'relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20',
                                    $subHeadingClasses
                                ) ); ?>">
                                    <?php echo esc_html( $subHeading ); ?>
                                </div>
                            <?php endif; ?>
                        </div>

                        <div class="text-center">
                            <?php if ( ! empty( $heading ) ) : ?>
                                <<?php echo esc_html( $headingLevel ); ?> 
                                    class="<?php echo esc_attr( $get_classes(
                                        'text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl',
                                        $headingClasses
                                    ) ); ?>">
                                    <?php echo esc_html( $heading ); ?>
                                </<?php echo esc_html( $headingLevel ); ?>>
                            <?php endif; ?>

                            <?php if ( ! empty( $text ) ) : ?>
                                <p class="<?php echo esc_attr( $get_classes(
                                    'mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8',
                                    $textClasses
                                ) ); ?>">
                                    <?php echo esc_html( $text ); ?>
                                </p>
                            <?php endif; ?>

                            <div class="mt-10 flex items-center justify-center gap-x-6">
                                <?php if ( ! empty( $primaryButtonText ) ) : ?>
                                    <a href="<?php echo esc_url( $primaryButtonUrl['url'] ?? '#' ); ?>"
                                        <?php if ( ! empty( $primaryButtonUrl['opensInNewTab'] ) ) : ?>
                                            target="_blank" rel="noopener noreferrer"
                                        <?php endif; ?>
                                        class="<?php echo esc_attr( $get_classes(
                                            'rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400',
                                            $primaryButtonClasses
                                        ) ); ?>">
                                        <?php echo esc_html( $primaryButtonText ); ?>
                                    </a>
                                <?php endif; ?>

                                <?php if ( ! empty( $secondaryButtonText ) ) : ?>
                                    <a href="<?php echo esc_url( $secondaryButtonUrl['url'] ?? '#' ); ?>"
                                        <?php if ( ! empty( $secondaryButtonUrl['opensInNewTab'] ) ) : ?>
                                            target="_blank" rel="noopener noreferrer"
                                        <?php endif; ?>
                                        class="<?php echo esc_attr( $get_classes(
                                            'text-sm/6 font-semibold text-white',
                                            $secondaryButtonClasses
                                        ) ); ?>">
                                        <?php echo esc_html( $secondaryButtonText ); ?>
                                        <span aria-hidden="true">→</span>
                                    </a>
                                <?php endif; ?>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Bottom gradient shape -->
                <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] 
                        -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
                        opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 
                        85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 
                        47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 
                        27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);">
                    </div>
                </div>

            </div>
        </div>
    </div>

