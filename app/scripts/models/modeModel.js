var ModeModel = Backbone.Model.extend({
  initialize: function(properties) {
    this.set({name: properties['name']});
    this.set({url: properties['url']});
    this.set({subItems: properties['subItems']});
  }

});
