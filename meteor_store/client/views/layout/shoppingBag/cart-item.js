Template.cartItem.helpers({
    cartItems: function () {
        return Session.get('productsInBag');
    }
});

Template.cartItem.events({
    'click .alter-line-amount-decrease': function () {
        var products = Session.get('productsInBag');
        var self = this;
        var i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === self.id && products[i].size.id === self.size.id) {
                if (self.quantity <= 1) {
                    products.splice(i, 1);
                } else {
                    products[i].quantity--;
                }
                break;
            }
        }
        Session.set('productsInBag', products);
    },
    'click .alter-line-amount-increase': function () {
        var products = Session.get('productsInBag');
        var self = this;
        if (self.size.inStock === self.quantity) {
            sAlert.info('You reached stock limit for this product');
            return;
        }
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === self.id && products[i].size.id === self.size.id) {
                products[i].quantity++;
                break;
            }
        }
        Session.set('productsInBag', products);
    },
    'click .slide-cart-line-remove': function () {
        var products = Session.get('productsInBag');
        var self = this;
        var i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === self.id && products[i].size.id === self.size.id) {
                products.splice(i, 1);
                break;
            }
        }
        Session.set('productsInBag', products);
    }
});