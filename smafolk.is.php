<?php
/**
 * Plugin Name:       Smafolk Core
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Site Core Function. Customize some feature without touch theme.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Al Mamun - asifulmamun
 * Author URI:        https://asifulmamun.info
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       my-basics-plugin
 * Domain Path:       /languages
**/

/**
 * Enqueue scripts and styles.
 */
add_action('wp_enqueue_scripts', function(){

    // css
    wp_enqueue_style('smafolk_customize_core_plugin', esc_url( plugins_url( 'assets/css/smafolk.css', __FILE__ ) ));


    // js only single product
    if ( is_product() && has_term( array(), 'product_cat' ) ) {
	    wp_enqueue_script( 'smafolk_customize_core_plugin_product_page', esc_url( plugins_url( 'assets/js/smafolk_product_customize.js', __FILE__ ) ), array(), _S_VERSION, true );
    }

}, 99);
add_action('wp_enqueue_scripts', 'smafolk_custom_scripts');


/* Before Quantity
---------- */
function wc_text_before_quantity() {

    // For All
    if ( is_product() && has_term( array(), 'product_cat' ) ) {
        echo '<span class="before_quantity">';
        echo 'Velja magn';
        echo '</span>';
    }

    // /* 
    //     // Specific Category (Cloth, Underwear), if need more add with array.
    // */
    // if ( is_product() && has_term( array('Cloth', 'Underwear'), 'product_cat' ) ) {
    //     echo 'pair';
    // }

    // /* 
    //     // Specific Tag (Pajaor, cloth), if need more add with array.
    // */
    // if ( is_product() && has_term( array('Pajaor', 'cloth'), 'product_tag' ) ) {
    //     echo 'pair';
    // }
}
add_action('woocommerce_before_quantity_input_field', 'wc_text_before_quantity');




/* After Quantity
---------- */
function wc_text_after_quantity() {

    // For All
    if ( is_product() && has_term( array(), 'product_cat' ) ) {
        echo '<div class="after_quantity">';
            echo '<span id="plus">+</span>';
            echo '<span id="minus">-</span>';
        echo '</div>';
    }
}
add_action('woocommerce_after_quantity_input_field', 'wc_text_after_quantity');





?>