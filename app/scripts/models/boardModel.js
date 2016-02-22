var BoardModel = Backbone.Model.extend({
  initialize: function() {
      this.set({width: 4});
      this.set({height: 6});
  }
});
