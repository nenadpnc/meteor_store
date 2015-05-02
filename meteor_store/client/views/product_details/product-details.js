Template.productDetails.helpers({
    currentSize: function () {
        return Template.instance().currentSize.get();
    }
});

Template.productDetails.events({
    'change #size': function (e, template) {
        var index = $(e.target).val();
        template.currentSize.set(this.sizes[index]);
    },
    'click #addToBag': function (e, template) {
        var productsInBag = Session.get('productsInBag') || [];
        var product = {
            id: template.data._id,
            name: template.data.name,
            quantity: 1,
            size: template.currentSize.get(),
            thumbSrc: template.data.thumbSrc
        };

        var match = false;
        for (var i = 0; i < productsInBag.length; i++) {
            if (productsInBag[i].id === product.id && productsInBag[i].size.id === product.size.id) {
                productsInBag[i].quantity++;
                match = true;
                break;
            }
        }
        if (!match) {
            productsInBag.push(product);
        }
        Session.set('showBag', true);
        Session.set('productsInBag', productsInBag);
    }
});

Template.productDetails.created = function () {
    for (var i = 0; i < this.data.sizes.length; i++) {
        this.data.sizes[i].price = this.data.sizes[i].price.toFixed(2);
        this.data.sizes[i]['id'] = i;
    }

    this.currentSize = new ReactiveVar(this.data.sizes[0]);
};

Template.productDetails.rendered = function () {
    $("#productSlider").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });
};