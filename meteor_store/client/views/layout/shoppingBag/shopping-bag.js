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

Template.shoppingBag.events({
    'click #checkout': function(){
        if(Meteor.user() && Session.get('productsInBag').length){
            Session.set('showBag', false);
            Router.go('checkout');
        }else{
            if(!Meteor.user()){
                sAlert.error('You need to log in before checkout.');
            }
            if(!Session.get('productsInBag').length){
                sAlert.info('Shopping bag is empty.');
            }
        }
    }
});