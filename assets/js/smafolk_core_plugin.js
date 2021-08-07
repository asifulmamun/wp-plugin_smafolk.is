/* After Quantity - Button
 - Add Additional Text with iceland language
 - Add button for Quantity
 - Workable Function create for quantity
--------------------------- */

// Get form value
function get_form_value(selector) {
    let form_id = document.querySelector(selector);
    return form_id.value;
}

// Set form value
function set_form_value(selector, setQty) {
    let form_id = document.querySelector(selector);
    form_id.value = setQty;
}

// Set Style
function after_quantity_extra_button_style(selector) {

    // select default Add to card button for get style
    let addToCartBtton = getComputedStyle(document.querySelector('.single_add_to_cart_button'));

    // Style Add
    selector.style.backgroundColor = addToCartBtton.backgroundColor;
    selector.style.borderWidth = addToCartBtton.borderWidth;
    selector.style.color = addToCartBtton.color;
}


// Plus Button
const plusButton = document.getElementById('plus');
// if exist ID or Class
if (plusButton) {
    plusButton_init();
}
function plusButton_init() {

    // styled
    after_quantity_extra_button_style(plusButton);

    // click
    plusButton.addEventListener('click', function () {
        let qty = get_form_value('input[type=number].qty');
        var incriment = ++qty;

        set_form_value('input[type=number].qty', incriment);
    });

    // hover
    plusButton.addEventListener('mouseover', function () {
        let get_active_color = getComputedStyle(document.querySelector('.described>.row>div>div>ul>li:first-child>a')).backgroundColor;
        plusButton.style.backgroundColor = get_active_color;
    });

    // hover out
    plusButton.addEventListener('mouseout', function () {
        after_quantity_extra_button_style(plusButton);
    });
}

// Minus Button
const minusButton = document.getElementById('minus');
// if exist ID or Class
if (minusButton) {
    minusButton_init();
}
function minusButton_init() {

    // styled
    after_quantity_extra_button_style(minusButton);

    // click
    minusButton.addEventListener('click', function () {
        let qty = get_form_value('input[type=number].qty');
        if (qty > 1) {
            var incriment = --qty;
        } else {
            var incriment = qty;
        }
        set_form_value('input[type=number].qty', incriment);
    });

    // hover
    minusButton.addEventListener('mouseover', function () {
        let get_active_color = getComputedStyle(document.querySelector('.described>.row>div>div>ul>li:first-child>a')).backgroundColor;
        minusButton.style.backgroundColor = get_active_color;
    });

    // hover out
    minusButton.addEventListener('mouseout', function () {
        after_quantity_extra_button_style(minusButton);
    });
}



/* Translate - Customize
------------------------- */

// Translate Function by selector - (Selector ID/Class, Authontication for match word, Translated word)
function translate_by_selector_with_auth(selector, auth, translate) {
    let element = document.querySelector(selector);
    if (element && element.innerText == auth) {
        element.innerText = translate;
    }
}

// Translate Placeholder Function by  - (Selector ID/Class, Authontication for match word, Translated word)
function translate_placeholder_by_selector_with_auth(selector, auth, translate) {
    let element = document.querySelector(selector);
    if (element && element.placeholder == auth) {
        element.placeholder = translate;
    }
}


// Translate - Single Product Page
function translate_single_product_page() {

    // Description
    translate_by_selector_with_auth('.woocommerce-Tabs-panel--description>h2', 'Description', 'Lýsing');

    // Additonal Information
    translate_by_selector_with_auth('.woocommerce-Tabs-panel--additional_information>h2', 'Additional information', 'Viðbótarupplýsingar');

    // Reviews
    translate_by_selector_with_auth('.woocommerce-Tabs-panel--reviews>#reviews>#comments>h2', 'Reviews', 'Umsagnir');

    // There are no reviews yet - text
    translate_by_selector_with_auth('.woocommerce-Tabs-panel>#reviews>#comments>.woocommerce-noreviews', 'There are no reviews yet.', 'Það eru engar umsagnir ennþá.');

    // Reviews Star Init
    let reviews_star_init = document.querySelector('#review_form>#respond>#reply-title');
    let product_titile = document.querySelector('.product_title'); // get product titile
    if (reviews_star_init && product_titile) {
        reviews_star_init.innerText = 'Vertu fyrstur til að endurskoða' + ' "' + product_titile.innerText + '"';
    }

    // Your Rating
    let your_rating = document.querySelector('#review_form>#respond>#commentform>.comment-form-rating>label');
    if (your_rating) {
        your_rating.innerHTML = 'Einkunn þín&nbsp;<span class="required">*</span>';
    }

    // Your Review
    let your_review = document.querySelector('#review_form>#respond>#commentform>.comment-form-comment>label');
    if (your_review) {
        your_review.innerHTML = 'Umsögn þín&nbsp;<span class="required">*</span>';
    }

    // form submit comment
    let form_submit = document.querySelector('#review_form>#respond>#commentform>.form-submit>input[type=submit]');
    if (form_submit && form_submit.value == 'Submit') {
        form_submit.value = 'Sendu';
    }

    // Related Products
    translate_by_selector_with_auth('.related>h2', 'RELATED PRODUCTS', 'SKYLDAR VÖRUR');

    // Reset Variation Button - Clear
    translate_by_selector_with_auth('.reset_variations', 'Clear', 'Hreinsa');


    /* Woo Commerce Messege
    ----------------------- */
    translate_by_selector_with_auth('.woocommerce-notices-wrapper>.woocommerce-message>a', 'View cart', 'Skoða körfu');
}

// Tranlate - Cart Page
function translate_cart_page() {
    // Product
    translate_by_selector_with_auth('.product-name', 'Product', 'Vara');

    // Price
    translate_by_selector_with_auth('.product-price', 'Price', 'Verð');

    // Quantity
    translate_by_selector_with_auth('.product-quantity', 'Quantity', 'Magn');

    // Sub-total
    translate_by_selector_with_auth('.product-subtotal', 'Subtotal', 'Undirsumma');

    // Apply Coupon then refresh
    if (document.querySelector('.coupon>button')) {
        document.querySelector('.coupon>button').addEventListener('click', function () {

            setTimeout(() => {
                location.reload();
            }, 3000);

        });
    }

    // Remove Coupon Button
    translate_by_selector_with_auth('.woocommerce-remove-coupon', '[Remove]', '[Fjarlægðu]');
    if (document.querySelector('.woocommerce-remove-coupon')) {
        document.querySelector('.woocommerce-remove-coupon').addEventListener('click', function () {

            setTimeout(() => {
                location.reload();
            }, 3000);

        });
    }

    // Update cart translate & refresh
    translate_by_selector_with_auth('.update_cart', 'Update cart', 'Uppfæra körfu');
    if (document.querySelector('.update_cart')) {
        document.querySelector('.update_cart').addEventListener('click', function () {

            setTimeout(() => {
                location.reload();
            }, 3000);

        });
    }

    // Cart total
    translate_by_selector_with_auth('.cart_totals>h2', 'CART TOTALS', 'VEGNAHLUTAR');

    // Cart Sub-total
    translate_by_selector_with_auth('.cart-subtotal>th', 'Subtotal', 'Undirsumma');

    // Shipping
    translate_by_selector_with_auth('.woocommerce-shipping-totals>th', 'Shipping', 'Sending');

    // Shiping to
    let get_shipping_dest = document.querySelector('.woocommerce-shipping-destination>strong');
    let shipping_dest = document.querySelector('.woocommerce-shipping-destination');
    if (get_shipping_dest && shipping_dest) {
        shipping_dest.innerHTML = 'Sending til&nbsp;<b>' + get_shipping_dest.innerText + '</b>';
    }

    // Shipping Address Change
    translate_by_selector_with_auth('.woocommerce-shipping-calculator>.shipping-calculator-button', 'Change address', 'Skiptu um heimilisfang');

    // Cart Total
    translate_by_selector_with_auth('.order-total>th', 'Total', 'Samtals');

    // Process to Checkout
    translate_by_selector_with_auth('.wc-proceed-to-checkout>.checkout-button', 'Proceed to checkout', 'Haltu áfram að afgreiðslu');

    // Address Update
    translate_by_selector_with_auth('.woocommerce-shipping-calculator>.shipping-calculator-form>p>button', 'Update', 'Uppfærsla');
    if (document.querySelector('.woocommerce-shipping-calculator>.shipping-calculator-form>p>button')) {
        document.querySelector('.woocommerce-shipping-calculator>.shipping-calculator-form>p>button').addEventListener('click', function () {

            setTimeout(() => {
                location.reload();
            }, 3000);

        });
    }
}

/* Triger for Translate
----------------------- */
translate_single_product_page(); // single product page
translate_cart_page(); // Cart Page
