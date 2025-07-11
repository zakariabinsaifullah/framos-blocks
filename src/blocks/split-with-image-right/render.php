<?php
/**
 * Renders the block on the server.
 */
    // Extract block attributes
    $container_classes     = isset( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $hiring_text           = isset( $attributes['hiringText'] ) ? $attributes['hiringText'] : '';
    $hiring_classes        = isset( $attributes['hiringClasses'] ) ? implode( ' ', $attributes['hiringClasses'] ) : '';
    $option_text           = isset( $attributes['optionText'] ) ? $attributes['optionText'] : '';
    $option_url            = isset( $attributes['optionUrl'] ) ? $attributes['optionUrl'] : array( 'url' => '#' );
    $option_classes        = isset( $attributes['optionClasses'] ) ? implode( ' ', $attributes['optionClasses'] ) : '';
    $option_icon           = isset( $attributes['optionIcon'] ) ? $attributes['optionIcon'] : null;
    $heading               = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
    $heading_level         = isset( $attributes['headingLevel'] ) ? $attributes['headingLevel'] : 'h2';
    $heading_classes       = isset( $attributes['headingClasses'] ) ? implode( ' ', $attributes['headingClasses'] ) : '';
    $text                  = isset( $attributes['text'] ) ? $attributes['text'] : '';
    $text_classes          = isset( $attributes['textClasses'] ) ? implode( ' ', $attributes['textClasses'] ) : '';
    $primary_button_text   = isset( $attributes['primaryButtonText'] ) ? $attributes['primaryButtonText'] : '';
    $primary_button_url    = isset( $attributes['primaryButtonUrl'] ) ? $attributes['primaryButtonUrl'] : array( 'url' => '#' );
    $primary_button_classes = isset( $attributes['primaryButtonClasses'] ) ? implode( ' ', $attributes['primaryButtonClasses'] ) : '';
    $secondary_button_text = isset( $attributes['secondaryButtonText'] ) ? $attributes['secondaryButtonText'] : '';
    $secondary_button_url  = isset( $attributes['secondaryButtonUrl'] ) ? $attributes['secondaryButtonUrl'] : array( 'url' => '#' );
    $secondary_button_classes = isset( $attributes['secondaryButtonClasses'] ) ? implode( ' ', $attributes['secondaryButtonClasses'] ) : '';
    $split_image           = isset( $attributes['splitImage'] ) ? $attributes['splitImage'] : null;
    $split_image_classes   = isset( $attributes['splitImageClasses'] ) ? implode( ' ', $attributes['splitImageClasses'] ) : '';

    // Build the block classes
    $wrapper_attributes = get_block_wrapper_attributes();

    ?>
    <div <?php echo $wrapper_attributes; ?>>
        <div class="bg-white">
            <div class="relative isolate pt-14 <?php echo esc_attr( $container_classes ); ?>">
                <svg
                    class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                            width="200"
                            height="200"
                            x="50%"
                            y="-1"
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            stroke-width="0"
                        />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>

                <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <div class="flex">
                            <div class="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <span class="font-semibold text-indigo-600 <?php echo esc_attr( $hiring_classes ); ?>">
                                    <?php echo wp_kses_post( $hiring_text ); ?>
                                </span>
                                <span class="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
                                <a
                                    href="<?php echo esc_url( $option_url['url'] ?? '#' ); ?>"
                                    <?php if ( isset( $option_url['opensInNewTab'] ) && $option_url['opensInNewTab'] ) : ?>
                                        target="_blank" rel="noopener noreferrer"
                                    <?php endif; ?>
                                    class="flex items-center gap-x-1"
                                >
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <p class="<?php echo esc_attr( $option_classes ); ?>">
                                        <?php echo wp_kses_post( $option_text ); ?>
                                    </p>

                                    <?php if ( isset( $option_icon ) && isset( $option_icon['url'] ) ) : ?>
                                        <img class="size-5" src="<?php echo esc_url( $option_icon['url'] ); ?>" alt="<?php echo esc_attr( $option_icon['alt'] ?? '' ); ?>" />
                                    <?php endif; ?>
                                </a>
                            </div>
                        </div>

                        <<?php echo esc_attr( $heading_level ); ?> class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl <?php echo esc_attr( $heading_classes ); ?>">
                            <?php echo wp_kses_post( $heading ); ?>
                        </<?php echo esc_attr( $heading_level ); ?>>

                        <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 <?php echo esc_attr( $text_classes ); ?>">
                            <?php echo wp_kses_post( $text ); ?>
                        </p>
                        <div class="mt-10 flex items-center gap-x-6">
                            <a
                                href="<?php echo esc_url( isset( $primary_button_url['url'] ) ? $primary_button_url['url'] : '#' ); ?>"
                                <?php if ( isset( $primary_button_url['opensInNewTab'] ) && $primary_button_url['opensInNewTab'] ) : ?>
                                    target="_blank" rel="noopener noreferrer"
                                <?php endif; ?>
                                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 <?php echo esc_attr( $primary_button_classes ); ?>"
                            >
                                <span><?php echo wp_kses_post( $primary_button_text ); ?></span>
                            </a>

                            <a
                                href="<?php echo esc_url( isset( $secondary_button_url['url'] ) ? $secondary_button_url['url'] : '#' ); ?>"
                                <?php if ( isset( $secondary_button_url['opensInNewTab'] ) && $secondary_button_url['opensInNewTab'] ) : ?>
                                    target="_blank" rel="noopener noreferrer"
                                <?php endif; ?>
                                class="text-sm/6 font-semibold text-gray-900 <?php echo esc_attr( $secondary_button_classes ); ?>"
                            >
                                <span><?php echo wp_kses_post( $secondary_button_text ); ?></span>
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                        <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                            <defs>
                                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                    <rect width="316" height="684" rx="36" />
                                </clipPath>
                            </defs>
                            <path
                                fill="#4B5563"
                                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                            />
                            <path
                                fill="#343E4E"
                                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                            />
                            <foreignObject
                                width="316"
                                height="684"
                                transform="translate(24 24)"
                                clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                            >
                                <?php if ( isset( $split_image ) && isset( $split_image['url'] ) ) : ?>
                                    <img
                                        class="absolute inset-0 -z-10 size-full <?php echo esc_attr( $split_image_classes ); ?>"
                                        src="<?php echo esc_url( $split_image['url'] ); ?>"
                                        alt="<?php echo esc_attr( $split_image['alt'] ?? '' ); ?>"
                                    />
                                <?php endif; ?>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

