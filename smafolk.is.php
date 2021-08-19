<?php
/**
 * Plugin Name:       Smafolk Core - Addon for Feb Slim theme
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Site Core Function. Customize some feature without touch theme. Addon for Feb Slim theme.
 * Version:           1.0.2
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



/* Enqueue scripts and styles.
---------------------------- */
add_action('wp_enqueue_scripts', 'smafolk_custom_scripts');
add_action('wp_enqueue_scripts', function(){

    // css
    wp_enqueue_style('smafolk_customize_core_plugin', esc_url( plugins_url( 'assets/css/smafolk_core_plugin.css', __FILE__ ) ));

    // js only single product
	wp_enqueue_script( 'smafolk_customize_core_plugin_product_page', esc_url( plugins_url( 'assets/js/smafolk_core_plugin.js', __FILE__ ) ), array(), _S_VERSION, true );

}, 99);



/* Before Quantity
---------- */
add_action('woocommerce_before_quantity_input_field', 'wc_text_before_quantity');
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



/* After Quantity
---------- */
add_action('woocommerce_after_quantity_input_field', 'wc_text_after_quantity');
function wc_text_after_quantity() {

    // For All
    if ( is_product() && has_term( array(), 'product_cat' ) ) {
        echo '<div class="after_quantity">';
            echo '<span id="plus">+</span>';
            echo '<span id="minus">-</span>';
        echo '</div>';
    }
}



/* Change Btn - Add To Cart Text
-------------------------------- */
function add_to_cart_iceland(){
    
    // Single Page Add To Cart Button
    add_filter( 'add_to_cart_text', 'woo_custom_single_add_to_cart_text' );                // < 2.1
    add_filter( 'woocommerce_product_single_add_to_cart_text', 'woo_custom_single_add_to_cart_text' );  // 2.1 +
    function woo_custom_single_add_to_cart_text() {
    
        return __( 'Setja í körfu', 'woocommerce' );
    
    }

    // All Products Add To Cart Button
    add_filter( 'woocommerce_product_add_to_cart_text', 'woocommerce_custom_product_add_to_cart_text' );  
    function woocommerce_custom_product_add_to_cart_text() {
        
        return __( 'Setja í körfu', 'woocommerce' );
        
    }

    // Select Option Button for All Products
    add_filter( 'woocommerce_product_add_to_cart_text', function( $text ) {
        global $product;
        if ( $product->is_type( 'variable' ) ) {
            $text = $product->is_purchasable() ? __( 'Veldu Valkostir', 'woocommerce' ) : __( 'Read more', 'woocommerce' );
        }
        return $text;
    }, 10 );
}
add_to_cart_iceland();



/* Description | Additional Information | Reviews Button Change
---------------------------------------------------------------- */
add_filter( 'woocommerce_product_tabs', 'filter_product_tabs', 98 );
function filter_product_tabs( $tabs ) {

    global $product;

    if ( isset($tabs['description']['callback']) ) {
        $tabs['description']['title'] = __( 'Lýsing' ); // Rename the description tab
        $tabs['description']['priority'] = 5; // Description
    }

    if ( isset($tabs['additional_information']['callback']) ) {
        $tabs['additional_information']['title'] = __( 'Viðbótarupplýsingar' ); // Rename the additional information tab
        $tabs['additional_information']['priority'] = 10;   // Additional information
    }

    if ( isset($tabs['reviews']['callback']) ) {
        $tabs['reviews']['title'] = __( 'Umsagnir' ) . ' (' . $product->get_review_count() . ') ';  // Rename the reviews tab
        $tabs['reviews']['priority'] = 15; // Reviews
    }

    return $tabs;
}


/* Translate Coupon over all page
------------------------------------ */
add_filter( 'gettext', 'bt_rename_coupon_field_on_cart', 10, 3 );
add_filter( 'woocommerce_coupon_error', 'bt_rename_coupon_label', 10, 3 );
add_filter( 'woocommerce_coupon_message', 'bt_rename_coupon_label', 10, 3 );
add_filter( 'woocommerce_cart_totals_coupon_label', 'bt_rename_coupon_label',10, 1 );
add_filter( 'woocommerce_checkout_coupon_message', 'bt_rename_coupon_message_on_checkout' );
/**
 * WooCommerce
 * Change Coupon Text
 * @param string $text
 * @return string
 * @link https://gist.github.com/maxrice/8551024
 */

function bt_rename_coupon_field_on_cart( $translated_text, $text, $text_domain ) {
	// bail if not modifying frontend woocommerce text
	if ( is_admin() || 'woocommerce' !== $text_domain ) {
		return $translated_text;
	}
	if ( 'Coupon:' === $text ) {
		$translated_text = 'Afsláttarmiði:';
	}

	if ('Coupon has been removed.' === $text){
		$translated_text = 'Afsláttarmiði hefur verið fjarlægður.';
	}

	if ( 'Apply coupon' === $text ) {
		$translated_text = 'Notaðu afsláttarmiða';
	}

	if ( 'Coupon code' === $text ) {
		$translated_text = 'Afsláttarmiði';
	
	} 

	return $translated_text;
}

// Rename the "Have a Coupon?" message on the checkout page
function bt_rename_coupon_message_on_checkout() {
	return 'Ertu með afsláttarmiða kóða?' . ' ' . __( 'Smelltu hér til að slá inn kóðann þinn', 'woocommerce' ) . '';
}

function bt_rename_coupon_label( $err, $err_code=null, $something=null ){
	$err = str_ireplace("Coupon","Afsláttarmiði",$err);
	return $err;
}

/* woocommerce extra function change - Include PHP file
-------------- */
require_once 'woo_extra_functions.php';