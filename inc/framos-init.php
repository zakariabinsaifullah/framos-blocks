<?php
/**
 * Framos Init class
 */

if( ! defined( 'ABSPATH' ) ) exit;

if( ! class_exists( 'Framos_Init' ) ) {

    class Framos_Init {

        // instance 
        private static $instance;

        /**
         * Constructor
         * 
         * @return void
         */
        public function __construct() {
            // register blocks category 
            add_filter( 'block_categories', [ $this, 'add_blocks_category' ], 10, 2 );
            add_action( 'init', [ $this, 'register_blocks' ] );
            // block editor assets 
            add_action( 'enqueue_block_editor_assets', [ $this, 'block_editor_assets' ] );
        }

        /**
         * Add blocks category
         * 
         * @param array $categories
         * @param WP_Post $post
         * @return array
         */
        public function add_blocks_category( $categories, $post ) {
            return array_merge(
                [
                    [
                        'slug' => 'framos-blocks',
                        'title' => __( 'Framos Blocks', 'framos-custom-blocks' ),
                        'icon' => null
                    ]
                ],
                $categories
            );
        }

        /**
         * Register blocks
         * 
         * @return void
         */
        public function register_blocks() {
            // get blocks list
            $blocks = require_once FRAMOS_PATH . 'inc/blocks.php';

            // check if blocks list is not empty
            if ( ! empty( $blocks ) ) {
                // register blocks
                foreach( $blocks as $block ) {
                    register_block_type( FRAMOS_PATH . 'build/blocks/' . $block );
                }
            }

        }

        /**
         * Block editor assets
         */
        public function block_editor_assets() {
            // styles
            wp_enqueue_style(
                'framos-blocks-editor-css',
                FRAMOS_URL . 'assets/css/editor.css',
                [],
                FRAMOS_VERSION,
                'all'
            );
        }

        /**
         * Get instance
         * 
         * @return Framos_Init
         */
        public static function get_instance() {
            if( null === self::$instance ) {
                self::$instance = new self();
            }

            return self::$instance;
        }
    }

    // initialize class
    Framos_Init::get_instance();
}