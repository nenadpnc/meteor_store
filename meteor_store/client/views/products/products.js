Template.productsCategories.helpers({
    categories: function(){
        return Categories.find();
    }
});

Template.productsGrid.helpers({
    products: function(){
        return Products.find();
    }
});

Template.product.helpers({
    productPrice: function(){
        return this.sizes[0].price.toFixed(2);
    }
});