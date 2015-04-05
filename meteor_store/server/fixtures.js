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

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var thumbsArray = [
    'images/thumbs/yes_dtldysi-443x500-430x480.jpg',
    'images/thumbs/yes_thumbs_aalto_vase-430x480.jpg',
    'images/thumbs/yes_thumbs_black_bowl-443x500-430x4800.jpg',
    'images/thumbs/yes_thumbs_helvetica_book-430x480.jpg',
    'images/thumbs/yes_thumbs_sphrical_vase-430x480.jpg',
    'images/thumbs/yes_thumbs_blockitecture-430x480.jpg',
    'images/thumbs/yes_thumbs_boskee_cube-430x480.jpg',
    'images/thumbs/yes_thumbs_cast_iron_birds-430x480.jpg',
    'images/thumbs/yes_thumbs_hasami_lids-430x480.jpg',
    'images/thumbs/yes_thumbs_Truck_Nest_Book-430x480.jpg',
    'images/thumbs/yes_thumbs_yanagi_tea_kettle-430x480.jpg',
    'images/thumbs/yes_thumbs_analog_alarm_clock-430x480.jpg'
];

var categoryArray = ['Home', 'Office', 'Children', 'Books & magazines', 'Outdoor'];

if (Products.find().count() === 0) {
    for (var j = 0; j < 50; j++) {
        Products.insert({
            name: Fake.word(),
            manufacturer: Fake.word(),
            thumbSrc: Fake.fromArray(thumbsArray),
            category: Fake.fromArray(categoryArray),
            description: Fake.paragraph(3),
            sizes: [
                { name: 'Small', inStock: randomIntFromInterval(1, 25), price: randomIntFromInterval(15, 25), materials: 'H:2.12" x W: 5.66" x D: 5.66"'},
                { name: 'Medium', inStock: randomIntFromInterval(1, 25), price: randomIntFromInterval(26, 67), materials: 'H:2.12" x W: 7.33" x D: 7.33"'},
                { name: 'Extra Large', inStock: randomIntFromInterval(1, 25), price: randomIntFromInterval(68, 250), materials: 'H:2.12" x W: 10" x D: 10"'},
                { name: 'Extra Small', inStock: randomIntFromInterval(1, 25), price: randomIntFromInterval(5, 15), materials: 'H:2.87" x W: 3.33" x D: 3.33"'}
            ],
            year: Fake.fromArray(['2010', '2011', '2012', '2013', '2014']),
            images: []
        });
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