<?php

/**
 * Plugin Name:       Vidiwoo
 * Plugin URI:        https://nevin.hashnode.dev/vidiwoo
 * Description:       Videos in WooCommerce gallery using html tag
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            nevin-riot
 * Author URI:        https://nevin.hashnode.dev/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/nevin-riot/vidiwoo
 */

 // Desactivar wp-mediaelement para los videos
 function deregister_media_elements(){
    wp_deregister_script('wp-mediaelement');
    wp_deregister_style('wp-mediaelement');
 }
 add_action('wp_enqueue_scripts','deregister_media_elements');