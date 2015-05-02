Template.productIndex.helpers({
    products: function(){
        return Products.find();
    },
    settings: function(){
        return {
            showFilter: true,
            rowsPerPage: 100,
            fields: [
                { key: 'name', label: 'Product'},
                { key: 'manufacturer', label: 'Brand'},
                { key: 'category', label: 'Category'},
                { key: 'year', label: 'Year'},
                {
                    key: 'sizes.0.price',
                    label: 'Price $',
                    fn: function(value, object){
                        return value.toFixed(2);
                    }
                }
            ]
        };
    },
    currentProduct: function(){
        return Template.instance().currentProduct.get();
    }
});

Template.productIndex.events({
    'click .reactive-table tr': function () {
        Router.go('productDetails', { _id: this._id });
    },
    'mouseover .reactive-table tbody tr': function(e, template){
        template.currentProduct.set(this);
    }
});

Template.productIndex.created = function(){
    this.currentProduct = new ReactiveVar(Products.find().fetch()[0]);
};