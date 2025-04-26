<?php


    $container_classes         = !empty( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $subtitle                  = $attributes['subtitle'] ?? '';
    $subtitle_classes          = !empty( $attributes['subtitleClasses'] ) ? implode( ' ', $attributes['subtitleClasses'] ) : '';
    $title                     = $attributes['title'] ?? '';
    $title_classes             = !empty( $attributes['titleClass'] ) ? implode( ' ', $attributes['titleClass'] ) : '';
    $heading_level             = $attributes['headingLevel'] ?? 'h2';
    $desc                      = $attributes['desc'] ?? '';
    $desc_classes              = !empty( $attributes['descClass'] ) ? implode( ' ', $attributes['descClass'] ) : '';
    $photo                     = $attributes['photo'] ?? null;
    $photo_classes             = !empty( $attributes['photoClass'] ) ? implode( ' ', $attributes['photoClass'] ) : '';
    $primary_button_text       = $attributes['primaryButtonText'] ?? '';
    $primary_button_url        = $attributes['primaryButtonUrl']['url'] ?? '#';
    $primary_button_new_tab    = $attributes['primaryButtonUrl']['opensInNewTab'] ?? false;
    $primary_button_classes    = !empty( $attributes['primaryButtonClasses'] ) ? implode( ' ', $attributes['primaryButtonClasses'] ) : '';

    $allowed_headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    $heading_tag = in_array( $heading_level, $allowed_headings, true ) ? $heading_level : 'h2';

  
    ?>

    <div <?php echo get_block_wrapper_attributes(); ?>>
        <div class="<?php echo esc_attr( trim( 'relative bg-gray-900 ' . $container_classes ) ); ?>">
            <div class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <?php if ( $photo && ! empty( $photo['url'] ) ) : ?>
                    <img
                        src="<?php echo esc_url( $photo['url'] ); ?>"
                        alt="<?php echo esc_attr( $photo['alt'] ?? '' ); ?>"
                        class="<?php echo esc_attr( trim( 'size-full object-cover ' . $photo_classes ) ); ?>"
                    />
                <?php endif; ?>

                <svg
                    viewBox="0 0 926 676"
                    aria-hidden="true"
                    class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
                >
                    <path
                        fill="url(#gradient-1)"
                        fill-opacity=".4"
                        d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                    />
                    <defs>
                        <linearGradient
                            id="gradient-1"
                            x1="926.392"
                            x2="-109.635"
                            y1=".176"
                            y2="321.024"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#776FFF" />
                            <stop offset="1" stop-color="#FF4694" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-24 box-border">

                    <?php if ( $subtitle ) : ?>
                        <p class="<?php echo esc_attr( trim( 'text-base/7 font-semibold text-indigo-400 mt-0 mb-0 ' . $subtitle_classes ) ); ?>">
                            <?php echo wp_kses_post( $subtitle ); ?>
                        </p>
                    <?php endif; ?>

                    <<?php echo esc_attr( $heading_tag ); ?> class="<?php echo esc_attr( trim( 'mt-2 text-4xl font-semibold tracking-tight text-white! sm:text-5xl ' . $title_classes ) ); ?>">
                        <?php echo wp_kses_post( $title ); ?>
                    </<?php echo esc_attr( $heading_tag ); ?>>

                    <?php if ( $desc ) : ?>
                        <p class="<?php echo esc_attr( trim( 'mt-6 text-base/7 text-gray-300 mt-0 mb-0 ' . $desc_classes ) ); ?>">
                            <?php echo wp_kses_post( $desc ); ?>
                        </p>
                    <?php endif; ?>

                    <?php if ( $primary_button_text ) : ?>
                        <div class="mt-8">
                            <a href="<?php echo esc_url( $primary_button_url ); ?>"
                               <?php if ( $primary_button_new_tab ) : ?>target="_blank" rel="noopener noreferrer"<?php endif; ?>
                               class="<?php echo esc_attr( trim( 'inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white! no-underline! shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ' . $primary_button_classes ) ); ?>"
                            >
                                <span><?php echo esc_html( $primary_button_text ); ?></span>
                            </a>
                        </div>
                    <?php endif; ?>

                </div>
            </div>

        </div>
    </div>


