<?php
/**
 * Plugin Name: Framos Custom Blocks
 * Plugin URI:
 * Description: Custom Gutenberg blocks for FRAMOS
 * Version: 1.0.0
 * Author: FRAMOS
 * Author URI: 
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: framos-custom-blocks
 * Domain Path: /languages
 * 
 */

if( ! defined( 'ABSPATH' ) ) exit;

// constants
define( 'FRAMOS_VERSION', '1.0.0' );
define( 'FRAMOS_PATH', plugin_dir_path( __FILE__ ) );
define( 'FRAMOS_URL', plugin_dir_url( __FILE__ ) );
define( 'FRAMOS_DIR', plugin_basename( __FILE__ ) );

// include files
require_once FRAMOS_PATH . 'inc/framos-init.php';
require_once FRAMOS_PATH . 'inc/faqs.php';

