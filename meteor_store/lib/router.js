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

Router.route('/about', function () {
    this.render('about');
});