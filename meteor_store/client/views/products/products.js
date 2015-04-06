Template.productsCategories.helpers({
    categories: function(){
        return Categories.find();
    }
});

Template.productsCategories.helpers({
    allProductsCount: function(){
        return Products.find().count();
    }
});

Template.productsCategories.events({
    'click .shop-cat-link': function(){
        if(this.name){
            Session.set('productByCategory', Products.find({ category: this.name }).fetch());
        }else{
            Session.set('productByCategory', Products.find().fetch());
        }
    }
});

Template.productsGrid.helpers({
    products: function(){
        return Session.get('productByCategory');
    }
});

Template.product.helpers({
    productPrice: function(){
        return this.sizes[0].price.toFixed(2);
    }
});

Template.productsGrid.created = function(){
    Session.set('productByCategory', Products.find().fetch());
};