var ModeView = Backbone.View.extend({
  events: {
    'click':  'check',
  },

  initialize: function(options){
    _.bindAll(this, 'render', 'check');
    this.parent = options.parent;
    this.model.bind('change', this.render);
    var self = this;
    this.subs = new SubItemCollection();
    _(this.model.get('subItems')).each(function(item) {
      var subItemModel = new SubItemModel(item);
      self.subs.add(subItemModel);
    });
    _(this.subs.models).each(function(subModel) {
      var subView = new SubItemView({
        model: subModel,
        parent: self
      });
      $('.js-subs').append(subView.render().el);
    });
  },

  render: function(){
    var compiled = $('<div>');
    var modeClass = Mustache.render(modeClassTemplate, this.model.attributes);
    this.$el.html(compiled).attr('Class', modeClass);
    return this;
  },

  check: function(){
    _(this.model.collection.models).each(function(model){
      model.set('active', false);
    });
    this.model.set('active', true);
    $('.piece').draggable();
    $('.piece').draggable('destroy');
    if (this.model.get('name') === 'move') {
      $('.piece').draggable();
    } else if (this.model.get('name') !== 'rotate' && this.model.get('name') !== 'remove') {
      _(this.parent.children).each(function(view) {
        view.model.set({'hidden': true});
        view.unRenderSub();
      });
      this.renderSub();
    }
  },

  renderSub: function() {
    _(this.subs.models).each(function(model) {
      model.set({'hidden': false});
    });
  },

  unRenderSub: function() {
    _(this.subs.models).each(function(model) {
      model.set({'hidden': true});
    });
  }

});
