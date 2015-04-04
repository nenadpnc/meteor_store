Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){
        return Meteor.subscribe('categories');
    }
});

Router.map(function(){
    this.route('products', { path: '/' });

    this.route('about', { path: '/about' });
});