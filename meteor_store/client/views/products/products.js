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