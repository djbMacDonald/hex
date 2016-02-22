var HexView = Backbone.View.extend({
  events: {
    'click':  'swap',
  },

  initialize: function(){
    _.bindAll(this, 'render', 'swap');
    this.model.bind('change', this.render);
  },

  render: function(){
    var compiled = Mustache.render(hexTemplate, this.model.attributes);
    var hexClass = Mustache.render(hexClassTemplate, this.model.attributes);
    this.$el.html(compiled).addClass(hexClass);
    return this;
  },

  swap: function(){
    var swapped = {
      x: this.model.get('y'),
      y: this.model.get('x')
    };
    this.model.set(swapped);
  }
});
