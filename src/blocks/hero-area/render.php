<?php
/**
 * Render callback for your block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Inner blocks content.
 * @return string Block HTML.
 */

    // Extract attributes
    $containerClasses        = isset( $attributes['containerClasses'] ) ? implode( ' ', $attributes['containerClasses'] ) : '';
    $subtitle                = isset( $attributes['subtitle'] ) ? $attributes['subtitle'] : '';
    $subtitleClasses         = isset( $attributes['subtitleClasses'] ) ? implode( ' ', $attributes['subtitleClasses'] ) : '';
    $title                   = isset( $attributes['title'] ) ? $attributes['title'] : '';
    $titleClass              = isset( $attributes['titleClass'] ) ? implode( ' ', $attributes['titleClass'] ) : '';
    $headingLevel            = isset( $attributes['headingLevel'] ) ? $attributes['headingLevel'] : 'h2';
    $desc                    = isset( $attributes['desc'] ) ? $attributes['desc'] : '';
    $descClass               = isset( $attributes['descClass'] ) ? implode( ' ', $attributes['descClass'] ) : '';
    $photo                   = isset( $attributes['photo'] ) ? $attributes['photo'] : null;
    $photoClass              = isset( $attributes['photoClass'] ) ? implode( ' ', $attributes['photoClass'] ) : '';
    $primaryButtonText       = isset( $attributes['primaryButtonText'] ) ? $attributes['primaryButtonText'] : '';
    $primaryButtonUrl        = isset( $attributes['primaryButtonUrl'] ) ? $attributes['primaryButtonUrl'] : null;
    $primaryButtonClasses    = isset( $attributes['primaryButtonClasses'] ) ? implode( ' ', $attributes['primaryButtonClasses'] ) : '';
    $secondaryButtonText     = isset( $attributes['secondaryButtonText'] ) ? $attributes['secondaryButtonText'] : '';
    $secondaryButtonUrl      = isset( $attributes['secondaryButtonUrl'] ) ? $attributes['secondaryButtonUrl'] : null;
    $secondaryButtonClasses  = isset( $attributes['secondaryButtonClasses'] ) ? implode( ' ', $attributes['secondaryButtonClasses'] ) : '';

    ?>

    <div <?php echo get_block_wrapper_attributes(); ?>>
        <section class="relative pt-4 lg:pt-12 lg:pb-12 <?php echo esc_attr( $containerClasses ); ?>">
            <div class="w-full max-w-7xl mx-auto px-4 lg:px-8">

                <?php if ( $subtitle ) : ?>
                    <p class="text-sm font-medium text-black text-center mb-5 <?php echo esc_attr( $subtitleClasses ); ?>">
                        <?php echo esc_html( $subtitle ); ?>
                    </p>
                <?php endif; ?>

                <?php if ( $title ) : ?>
                    <<?php echo esc_html( $headingLevel ); ?> class="font-manrope font-semibold text-5xl leading-tight text-center mb-5 <?php echo esc_attr( $titleClass ); ?>">
                        <?php echo esc_html( $title ); ?>
                    </<?php echo esc_html( $headingLevel ); ?>>
                <?php endif; ?>

                <?php if ( $desc ) : ?>
                    <p class="text-sm font-normal text-gray-500 text-center mb-10 max-w-2xl mx-auto <?php echo esc_attr( $descClass ); ?>">
                        <?php echo esc_html( $desc ); ?>
                    </p>
                <?php endif; ?>

                <div class="flex flex-col min-[550px]:flex-row items-center justify-center gap-8 pb-10 sm:pb-14">
                    <?php if ( $primaryButtonText ) : ?>
                        <a href="<?php echo esc_url( $primaryButtonUrl['url'] ?? '#' ); ?>"
                           <?php if ( ! empty( $primaryButtonUrl['opensInNewTab'] ) ) : ?>target="_blank" rel="noopener noreferrer"<?php endif; ?>
                           class="bg-gray-900 max-[550px]:w-full text-white! no-underline! rounded-xl cursor-pointer font-medium text-center shadow-xs transition-all duration-500 py-3 px-8 text-sm hover:bg-gray-800 <?php echo esc_attr( $primaryButtonClasses ); ?>">
                            <span><?php echo esc_html( $primaryButtonText ); ?></span>
                        </a>
                    <?php endif; ?>

                    <?php if ( $secondaryButtonText ) : ?>
                        <a href="<?php echo esc_url( $secondaryButtonUrl['url'] ?? '#' ); ?>"
                           <?php if ( ! empty( $secondaryButtonUrl['opensInNewTab'] ) ) : ?>target="_blank" rel="noopener noreferrer"<?php endif; ?>
                           class="py-3 px-8 max-[550px]:w-full text-center no-underline! rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-200 hover:shadow-gray-300 hover:border-gray-200 <?php echo esc_attr( $secondaryButtonClasses ); ?>">
                            <span><?php echo esc_html( $secondaryButtonText ); ?></span>
                            <span aria-hidden="true">→</span>
                        </a>
                    <?php endif; ?>
                </div>

                <?php if ( $photo && ! empty( $photo['url'] ) ) : ?>
                    <div class="p-2.5 border border-gray-300 rounded-3xl mb-6">
                        <img src="<?php echo esc_url( $photo['url'] ); ?>"
                             alt="<?php echo esc_attr( $photo['alt'] ?? '' ); ?>"
                             class="block w-full h-auto rounded-2xl object-cover <?php echo esc_attr( $photoClass ); ?>" />
                    </div>
                    
                <?php endif; ?>

                <div class="flex flex-row lg:flex-nowrap items-center justify-around md:justify-between gap-x-6 gap-y-9 py-10 flex-wrap">
                    <?php echo $content; ?>
                </div>
               
            </div>
           
        </section>
    </div>