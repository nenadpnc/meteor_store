var categories = [
    {
        name: 'Office',
        productsCount: 27
    },
    {
        name: 'Books & magazines',
        productsCount: 40
    },
    {
        name: 'Home',
        productsCount: 48
    },
    {
        name: 'Children',
        productsCount: 23
    },
    {
        name: 'Outdoor',
        productsCount: 10
    }
];

if(Categories.find().count() === 0){
    for(var i = 0; i < categories.length; i++){
        Categories.insert({
            name: categories[i].name,
            productsCount: categories[i].productsCount
        });
    }
}