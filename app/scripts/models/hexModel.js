var HexModel = Backbone.Model.extend({
    initialize: function(location) {
      this.set({x: location[0]});
      this.set({y: location[1]});
      this.set({trueX: this.get('x') - Math.trunc(this.get('y') / 2)});
      this.set({offset: this.get('y') % 2});
    }
  });
