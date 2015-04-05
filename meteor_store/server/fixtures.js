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
    price: 16.00,
    category: 'Home',
    thumbSrc: 'images/thumbs/yes_dtldysi-443x500-430x480.jpg',
    description: 'Made in Japan from unglazed porcelain with a texture and organic feel that is unique to Hasami. Every dish and oak lid stacks on top of each other which creates a very organized display. Oak lid not included. Designed by Takuhiro Shinomoto.',
    sizes: [
        { name: 'small', inStock: 5},
        { name: 'medium', inStock: 5},
        { name: 'large', inStock: 5}
    ],
    year: '2010',
    materials: 'H:2.12" x W: 5.66" x D: 5.66"',
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