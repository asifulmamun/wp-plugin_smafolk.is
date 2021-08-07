/* After Quantity - Button
 - Add Additional Text with iceland language
 - Add button for Quantity
 - Workable Function create for quantity
--------------------------- */



// Set Style
function after_quantity_extra_button_style(selector){

    // select default Add to card button for get style
    let addToCartBtton = getComputedStyle(document.querySelector('.single_add_to_cart_button'));

    // Style Add
    selector.style.backgroundColor = addToCartBtton.backgroundColor;
    selector.style.borderWidth = addToCartBtton.borderWidth;
    selector.style.color = addToCartBtton.color;
}

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


// Plus Button
const plusButton = document.getElementById('plus');
// if exist ID or Class
if(plusButton){
    plusButton_init();
}

function plusButton_init(){

    // styled
    after_quantity_extra_button_style(plusButton);

    // click
    plusButton.addEventListener('click', function(){
        let qty = get_form_value('input[type=number].qty');
        var incriment = ++qty;
    
        set_form_value('input[type=number].qty', incriment);
    });
    
    // hover
    plusButton.addEventListener('mouseover', function(){
        let get_active_color =  getComputedStyle(document.querySelector('.described>.row>div>div>ul>li:first-child>a')).backgroundColor;
        plusButton.style.backgroundColor = get_active_color;
    });
    
    // hover out
    plusButton.addEventListener('mouseout', function(){
        after_quantity_extra_button_style(plusButton);
    });    
}


// Minus Button
const minusButton = document.getElementById('minus');
// if exist ID or Class
if(minusButton){
    minusButton_init();
}
function minusButton_init(){

    // styled
    after_quantity_extra_button_style(minusButton);

    // click
    minusButton.addEventListener('click', function(){
        let qty = get_form_value('input[type=number].qty');
        if(qty > 1){
            var incriment = --qty;
        }else{
            var incriment = qty;
        }
        set_form_value('input[type=number].qty', incriment);
    });
    
    // hover
    minusButton.addEventListener('mouseover', function(){
        let get_active_color =  getComputedStyle(document.querySelector('.described>.row>div>div>ul>li:first-child>a')).backgroundColor;
        minusButton.style.backgroundColor = get_active_color;
    });
    
    // hover out
    minusButton.addEventListener('mouseout', function(){
        after_quantity_extra_button_style(minusButton);
    });
}



/**
 * - Single Product Page Translate
 * - Heading and Customize - Description | Additional Information | Reviews - Change
 */

// Description
let description = document.querySelector('.woocommerce-Tabs-panel--description>h2');
if(description && description.innerText == 'Description'){
    description.innerText = 'Lýsing';
}

// Additonal Information
let additonal_info_heading = document.querySelector('.woocommerce-Tabs-panel--additional_information>h2');
if(additonal_info_heading && additonal_info_heading.innerText == 'Additional information'){
    additonal_info_heading.innerText = 'Viðbótarupplýsingar';
}

// Reviews
let reviews_heading = document.querySelector('.woocommerce-Tabs-panel--reviews>#reviews>#comments>h2');
if(reviews_heading && reviews_heading.innerText == 'Reviews'){
    reviews_heading.innerText = 'Umsagnir';
}

// There are no reviews yet - text
let reviews_no_exist = document.querySelector('.woocommerce-Tabs-panel>#reviews>#comments>.woocommerce-noreviews');
if(reviews_no_exist && reviews_no_exist.innerText == 'There are no reviews yet.'){
    reviews_no_exist.innerText = 'Það eru engar umsagnir ennþá.';
}

// Reviews Star Init
let reviews_star_init = document.querySelector('#review_form>#respond>#reply-title');
let product_titile = document.querySelector('.product_title'); // get product titile
if(reviews_star_init && product_titile){
    reviews_star_init.innerText = 'Vertu fyrstur til að endurskoða' + ' "' + product_titile.innerText + '"';
}

// Your Rating
let your_rating = document.querySelector('#review_form>#respond>#commentform>.comment-form-rating>label');
if(your_rating){
    your_rating.innerHTML = 'Einkunn þín&nbsp;<span class="required">*</span>';
}

// Your Review
let your_review = document.querySelector('#review_form>#respond>#commentform>.comment-form-comment>label');
if(your_review){
    your_review.innerHTML = 'Umsögn þín&nbsp;<span class="required">*</span>';
}

// form submit comment
let form_submit = document.querySelector('#review_form>#respond>#commentform>.form-submit>input[type=submit]');
if(form_submit && form_submit.value == 'Submit'){
    form_submit.value = 'Sendu';
}

// Related Products
let related_products = document.querySelector('.related>h2');
if(related_products && related_products.innerText == 'RELATED PRODUCTS'){
    related_products.innerText = 'SKYLDAR VÖRUR';
}

// Reset Variation Button - Clear
let reset_variations = document.querySelector('.reset_variations');
if(reset_variations && reset_variations.innerText == 'Clear'){
    reset_variations.innerText = 'Hreinsa';
}