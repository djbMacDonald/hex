var SubItemView = Backbone.View.extend({

  events: {
    'click':  'select',
  },

  initialize: function(){
    _.bindAll(this, 'render', 'select');
    this.model.bind('change', this.render);
  },

  render: function(){
    var compiled = Mustache.render(subTemplate, this.model.attributes);
    this.$el.html(compiled).addClass('subItem');
    return this;
  },

  select: function(){
    this.model.set({checked: !this.model.get('checked')});
  }
});
