/* After Quantity - Button
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


// Minus Button
const minusButton = document.getElementById('minus');
after_quantity_extra_button_style(minusButton);

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