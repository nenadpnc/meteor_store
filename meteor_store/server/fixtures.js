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

var product = {
    name: 'Black Porcelain Bowl',
    manufacturer: 'Hasami Porcelain',
    category: 'Home',
    thumbSrc: 'images/thumbs/yes_dtldysi-443x500-430x480.jpg',
    description: 'Made in Japan from unglazed porcelain with a texture and organic feel that is unique to Hasami. Every dish and oak lid stacks on top of each other which creates a very organized display. Oak lid not included. Designed by Takuhiro Shinomoto.',
    sizes: [
        { name: 'Small', inStock: 5, price: 24, materials: 'H:2.12" x W: 5.66" x D: 5.66"'},
        { name: 'Medium', inStock: 5, price: 36, materials: 'H:2.12" x W: 7.33" x D: 7.33"'},
        { name: 'Extra Large', inStock: 5, price: 85, materials: 'H:2.12" x W: 10" x D: 10"'},
        { name: 'Extra Small', inStock: 5, price: 16, materials: 'H:2.87" x W: 3.33" x D: 3.33"'}
    ],
    year: '2010',
    images: []
};

if (Products.find().count() === 0) {
    for (var j = 0; j < 23; j++) {
        Products.insert(product);
    }
}

if (Categories.find().count() === 0) {
    for (var i = 0; i < categories.length; i++) {
        Categories.insert({
            name: categories[i].name,
            productsCount: categories[i].productsCount
        });
    }
}