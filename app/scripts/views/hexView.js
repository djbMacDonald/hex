var HexView = Backbone.View.extend({
  events: {
    'click':  'swap',
  },

  initialize: function(){
    _.bindAll(this, 'render', 'swap');
    this.model.bind('change', this.render);
  },

  render: function(){
    var compiled = Mustache.render(hex_template, this.model.attributes);
    var hex_class = Mustache.render(hex_class_template, this.model.attributes);
    this.$el.html(compiled).addClass(hex_class);
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
