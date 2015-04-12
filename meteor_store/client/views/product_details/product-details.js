Template.productDetails.helpers({
    currentSize: function () {
        return Template.instance().currentSize.get();
    }
});

Template.productDetails.events({
    'change #size': function (e, template) {
        var index = $(e.target).val();
        template.currentSize.set(this.sizes[index]);
    }
});

Template.productDetails.created = function () {
    for (var i = 0; i < this.data.sizes.length; i++) {
        this.data.sizes[i].price = this.data.sizes[i].price.toFixed(2);
        this.data.sizes[i]['id'] = i;
    }

    this.currentSize = new ReactiveVar(this.data.sizes[0]);
};

Template.productDetails.rendered = function(){
    $("#productSlider").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });
};