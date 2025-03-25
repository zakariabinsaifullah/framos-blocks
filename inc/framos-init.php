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
            // block assets 
            add_action( 'enqueue_block_assets', [ $this, 'block_assets' ] );
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
            foreach( $blocks as $block ) {
                $block_path = FRAMOS_PATH . 'build/blocks/' . $block;
                if ( file_exists( $block_path ) ) {
                    register_block_type( $block_path );
                }

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
         * Block assets
         */
        public function block_assets() {
            wp_register_style( 'framos-swiper', FRAMOS_URL . 'assets/css/swiper-bundle.min.css', [], FRAMOS_VERSION, 'all' );
            wp_register_script( 'framos-swiper', FRAMOS_URL . 'assets/js/swiper-bundle.min.js', [], FRAMOS_VERSION, true );
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
