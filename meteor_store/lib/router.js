Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){
        return [Meteor.subscribe('categories'), Meteor.subscribe('products')];
    }
});

Router.map(function(){
    this.route('products', { path: '/' });

    this.route('about', { path: '/about' });
});