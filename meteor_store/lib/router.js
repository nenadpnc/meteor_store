Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'products',
    waitOn: function () {
        return [
            Meteor.subscribe('categories'),
            Meteor.subscribe('products')
        ];
    }
});

Router.route('/product/:_id', {
    name: 'productDetails',
    waitOn: function () {
        return Meteor.subscribe('singleProduct', this.params._id);
    },
    data: function(){
        return Products.findOne(this.params._id);
    }
});

Router.route('/product-index', {
    name: 'productIndex',
    waitOn: function () {
        return Meteor.subscribe('products');
    }
});

Router.route('/checkout', {
    name: 'checkout'
});

var requireLogin = function() {
    if (! Meteor.user() || !Session.get('productsInBag')) {
        if(Meteor.loggingIn()){
            this.render('loading');
        }else{
            this.render('accessDenied');
        }
    }else{
        this.next();
    }
};

Router.before(requireLogin, {only: 'checkout'});