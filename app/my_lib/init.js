/**
 * Created by tiny on 14-9-9.
 */
function init() {
    localStorage.getItem('cart_items') || (localStorage.cart_items = JSON.stringify([]));
}

var get_cart_items_length = function() {
    return JSON.parse(localStorage.cart_items).length;
} ;

function add_product(barcode) {
    var cart_items = JSON.parse(localStorage.cart_items);
    cart_items.push(barcode);
    localStorage.cart_items = JSON.stringify(cart_items);


    refresh_product_list();
}

function refresh_product_list() {
//    var refresh_page = document.getElementById("product_list_page");
//    console.log("find refresh page");
//    if (refresh_page) {
//        var scope = angular.element(refresh_page).scope();
//        console.log("ggggg");
//        scope.$apply(function () {
//            console.log("bbbb")
//            var cart_items = JSON.parse(localStorage.cart_items);
//            scope.cart_count= cart_items.length;
//        })
//    }
}