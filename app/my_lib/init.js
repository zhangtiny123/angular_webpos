/**
 * Created by tiny on 14-9-9.
 */
function init() {
    localStorage.getItem('cart_items') || (localStorage.cart_items = JSON.stringify([]));
}

var get_cart_items_length = function() {
    return JSON.parse(localStorage.cart_items).length;
} ;