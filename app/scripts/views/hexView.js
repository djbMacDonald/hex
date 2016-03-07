var HexView = Backbone.View.extend({
  events: {
    'click':  'modify',
  },

  initialize: function(){
    _.bindAll(this, 'render', 'modify');
    this.model.bind('change', this.render);
  },

  render: function(){
    var compiled = Mustache.render(hexTemplate, this.model.attributes);
    var hexClass = Mustache.render(hexClassTemplate, this.model.attributes);
    this.$el.html(compiled).addClass(hexClass);
    return this;
  },

  modify: function(){
    this.model.set({clicked: !this.model.get('clicked')});
    var piece;
    _(this.options.parent.children).each(function(mode){
      _(mode.subs.models).each(function(item){
        if (item.get('checked')){
          piece = item.get('name');
        }
      });
    });
    this.model.set('piece', piece);
  }
});
