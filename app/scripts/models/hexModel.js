var HexModel = Backbone.Model.extend({
    initialize: function(location) {
      this.set({x: location[0]});
      this.set({y: location[1]});
      this.set({offset: location[1] % 2});
    }
  });
