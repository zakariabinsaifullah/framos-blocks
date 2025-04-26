<?php
    $containerClasses = ! empty( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $subtitle         = $attributes['subtitle'] ?? '';
    $subtitleClasses  = ! empty( $attributes['subtitleClasses'] ) ? implode( ' ', $attributes['subtitleClasses'] ) : '';
    $title            = $attributes['title'] ?? '';
    $titleClass       = ! empty( $attributes['titleClass'] ) ? implode( ' ', $attributes['titleClass'] ) : '';
    $headingLevel     = $attributes['headingLevel'] ?? 'h2';
    $desc             = $attributes['desc'] ?? '';
    $descClass        = ! empty( $attributes['descClass'] ) ? implode( ' ', $attributes['descClass'] ) : '';
    $photo            = $attributes['photo'] ?? null;
    $photoClass       = ! empty( $attributes['photoClass'] ) ? implode( ' ', $attributes['photoClass'] ) : '';
    $primaryButtonText = $attributes['primaryButtonText'] ?? '';
    $primaryButtonUrl  = $attributes['primaryButtonUrl'] ?? null;
    $primaryButtonClasses = ! empty( $attributes['primaryButtonClasses'] ) ? implode( ' ', $attributes['primaryButtonClasses'] ) : '';
    $secondaryButtonText = $attributes['secondaryButtonText'] ?? '';
    $secondaryButtonUrl  = $attributes['secondaryButtonUrl'] ?? null;
    $secondaryButtonClasses = ! empty( $attributes['secondaryButtonClasses'] ) ? implode( ' ', $attributes['secondaryButtonClasses'] ) : '';

    ?>
    <div <?php echo get_block_wrapper_attributes(); ?>>
        <div class="bg-white <?php echo esc_attr( $containerClasses ); ?>">
            <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#radialGradient)" fill-opacity="0.7" />
                        <defs>
                            <radialGradient id="radialGradient">
                                <stop stop-color="#7775D6" />
                                <stop offset="1" stop-color="#0098B0" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <<?php echo esc_html( $headingLevel ); ?> class="text-balance text-3xl font-semibold tracking-tight text-white! sm:text-4xl <?php echo esc_attr( $titleClass ); ?>">
                            <?php echo esc_html( $title ); ?>
                        </<?php echo esc_html( $headingLevel ); ?>>

                        <div class="mt-6 text-pretty text-lg/8 text-gray-300 <?php echo esc_attr( $descClass ); ?>">
                            <?php echo esc_html( $desc ); ?>
                        </div>

                        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a href="<?php echo esc_url( $primaryButtonUrl['url'] ?? '#' ); ?>"
                                <?php if ( ! empty( $primaryButtonUrl['opensInNewTab'] ) ) : ?>
                                    target="_blank" rel="noopener noreferrer"
                                <?php endif; ?>
                                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 no-underline! shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white <?php echo esc_attr( $primaryButtonClasses ); ?>">
                                <span><?php echo esc_html( $primaryButtonText ); ?></span>
                            </a>

                            <a href="<?php echo esc_url( $secondaryButtonUrl['url'] ?? '#' ); ?>"
                                <?php if ( ! empty( $secondaryButtonUrl['opensInNewTab'] ) ) : ?>
                                    target="_blank" rel="noopener noreferrer"
                                <?php endif; ?>
                                class="text-sm/6 font-semibold text-white! no-underline! <?php echo esc_attr( $secondaryButtonClasses ); ?>">
                                <span><?php echo esc_html( $secondaryButtonText ); ?></span>
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <div class="relative mt-16 h-80 lg:mt-8">
                        <?php if ( ! empty( $photo ) && ! empty( $photo['url'] ) ) : ?>
                            <img src="<?php echo esc_url( $photo['url'] ); ?>"
                                    alt="<?php echo esc_attr( $photo['alt'] ?? '' ); ?>"
                                    class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 <?php echo esc_attr( $photoClass ); ?>" />
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php