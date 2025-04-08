<?php

/**
 * Schema Markup for FAQs
 */

 add_filter( 'render_block_framos/faqs', 'framos_faqs_schema_markup', 10, 2 );
 function framos_faqs_schema_markup( $block_content, $block ) {
    $attrs = $block['attrs'] ?? [];

    $faqs = $attrs['faqs'] ?? [];

    if ( ! empty( $faqs ) ) {
        $schema = [
            '@context' => 'https://schema.org',
            '@type'    => 'FAQPage',
            'mainEntity' => []
        ];

        foreach ( $faqs as $faq ) {
            $schema['mainEntity'][] = [
                '@type' => 'Question',
                'name'  => $faq['question'],
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text'  => $faq['answer']
                ]
            ];
        }

        $block_content .= '<script type="application/ld+json">' . wp_json_encode( $schema ) . '</script>';
    }
    return $block_content;
 }


