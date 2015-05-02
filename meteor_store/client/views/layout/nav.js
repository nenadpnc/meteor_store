Template.nav.events({
    'click .cart-link': function(){
        Session.set('showBag', true);
    },
    'click .bag-close, click .overlay': function(){
        Session.set('showBag', false);
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

Template.nav.created = function(){
    Session.set('showBag', false);
};

Deps.autorun(function(){
    if (Session.get('showBag')) {
        $('#menu.panel').css({right: 0});
        $('.overlay').css({display: 'block'});
    } else {
        $('#menu.panel').css({right: '-500px'});
        $('.overlay').css({display: 'none'});
    }
});