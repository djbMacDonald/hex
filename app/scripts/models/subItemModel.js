var SubItemModel = Backbone.Model.extend({
  initialize: function(name) {
    this.set({name: name});
    this.set({hidden: true});
  }
});
