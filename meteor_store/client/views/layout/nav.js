Template.nav.events({
    'click .cart-link': function(e, template){
        template.shoppingBag.css({ right: 0 });
        template.overlay.css({ display: 'block' });
    },
    'click .bag-close, click .overlay': function(e, template){
        template.shoppingBag.css({ right: '-500px' });
        template.overlay.css({ display: 'none' });
    }
});

Template.nav.helpers({
    productsInBag: function(){
        var count = 0;
        (Session.get('productsInBag') || []).forEach(function(product){
            count += product.quantity;
        });
        return count;
    }
});

Template.nav.rendered = function(){
    this.shoppingBag = $('#menu.panel');
    this.overlay = $('.overlay');
};