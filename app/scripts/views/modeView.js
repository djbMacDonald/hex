var ModeView = Backbone.View.extend({
  events: {
    'click':  'check',
  },

  initialize: function(){
    _.bindAll(this, 'render', 'check');
    this.model.bind('change', this.render);
    var self = this;
    this.subs = new SubItemCollection();
    _(this.model.get('subItems')).each(function(item) {
      var subItemModel = new SubItemModel(item);
      self.subs.add(subItemModel);
    });
  },

  render: function(){
    var compiled = Mustache.render(modeTemplate, this.model.attributes);
    this.$el.html(compiled).addClass('modes');
    return this;
  },

  check: function(){
    this.renderSub();
  },

  renderSub: function() {
    _(this.subs.models).each(function(subModel) {
      var subView = new SubItemView({
        model: subModel
      });
      $('.js-subs').append(subView.render().el);
    });
  },

  unRenderSub: function() {

  }
});
