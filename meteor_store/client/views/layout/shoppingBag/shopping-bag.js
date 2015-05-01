Template.shoppingBag.helpers({
    subtotal: function(){
        var products = Session.get('productsInBag') || [];
        var subtotal = 0;
        for(var i = 0; i < products.length; i++){
            subtotal += products[i].size.price * products[i].quantity;
        }

        return subtotal;
    }
});