Template.nav.events({
    'click #bag': function(e, template){
        template.shoppingBag.css({ right: 0 });
        template.overlay.css({ display: 'block' });
    },
    'click #bag-close, click .overlay': function(e, template){
        template.shoppingBag.css({ right: '-500px' });
        template.overlay.css({ display: 'none' });
    }
});

Template.nav.rendered = function(){
    this.shoppingBag = $('#menu.panel');
    this.overlay = $('.overlay');
};