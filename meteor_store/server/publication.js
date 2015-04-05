Meteor.publish('categories', function(){
    return Categories.find();
});

Meteor.publish('products', function(){
    return Products.find();
});

Meteor.publish('singleProduct', function(id){
    /*check(id, String);*/
    return Products.find(id);
});