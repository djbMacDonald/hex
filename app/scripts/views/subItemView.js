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

  doStuff: function() {
    console.log('asd');
  },

  select: function(){
    _(this.model.collection.models).each(function(model){
      model.set({checked: false});
    });
    this.model.set({checked: true});

    if (this.$el.hasClass('js-back')) {
      this.doStuff();
    };
  }

});
