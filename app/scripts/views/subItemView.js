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
    var subClass = Mustache.render(subClassTemplate, this.model.attributes);
    this.$el.html(compiled).attr('class', subClass);
    return this;
  },

  select: function(){
    _(this.model.collection.models).each(function(model){
      model.set({checked: false});
    });
    this.model.set({checked: true});
    this.options.parent.parent.model.set('piece', this.model.get('name'));
    if (this.$el.hasClass('js-back')) {
      this.goBack();
    };
  },

  goBack: function() {
    $('.js-modes').empty();
    this.model.set('checked', false);
    this.options.parent.parent.model.set('piece', null);
    _(this.model.collection.models).each(function(model){
      model.set('hidden', true);
    });
    _(this.options.parent.parent.modes.models).each(function(model){
      model.set('hidden', false);
    });
  }

});
