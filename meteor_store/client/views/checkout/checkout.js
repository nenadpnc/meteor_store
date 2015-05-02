Template.checkout.helpers({
    productsInBag: function (){
        return Session.get('productsInBag');
    },
    subtotal: function(){
        return checkSubtotal();
    },
    total: function(){
        return (parseFloat(checkSubtotal()) + Template.instance().currentTax.get()).toFixed(2);
    }
});

Template.checkout.events({
    'change .qty': function(e){
        var products = Session.get('productsInBag');
        var self = this;
        var currQuantity = parseInt($(e.target).val());
        if (self.size.inStock < currQuantity) {
            sAlert.info('You exceeded stock limit for this product.');
            $(e.target).val(parseInt(self.quantity));
            return;
        }
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === self.id && products[i].size.id === self.size.id) {
                products[i].quantity = currQuantity;
                break;
            }
        }
        Session.set('productsInBag', products);
    },
    'click .item-remove': function(){
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
    },
    'change input[type="radio"].shipping_method': function(e, template){
        var tax = parseFloat($(e.target).val());
        template.currentTax.set(tax);
    },
    'click #continueShopping': function(){
        Router.go('/');
    }
});

Template.checkout.created = function () {
    this.currentTax = new ReactiveVar(31.73);
};

function checkSubtotal(){
    var products = Session.get('productsInBag') || [];
    var subtotal = 0;
    for(var i = 0; i < products.length; i++){
        subtotal += products[i].size.price * products[i].quantity;
    }

    return subtotal.toFixed(2);
}