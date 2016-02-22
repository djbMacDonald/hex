var BoardView = Backbone.View.extend({
  el: $('.js-board'),
  events: {
    'change .js-height': 'changeHeight',
    'change .js-width': 'changeWidth'
  },
  initialize: function(){
    _.bindAll(this, 'render', 'addHex', 'appendHex');
    this.model = new BoardModel();
    this.model.bind('change', this.render);
    this.collection = new GridCollection();
    this.render();
  },
  render: function(){
    var self = this;
    self.buildGrid();
    var compiled = Mustache.render(menuTemplate, this.model.attributes);
    $('.js-menu').html(compiled);
    $('.js-grid').empty();
    _(this.collection.models).each(function(hexModel){
      self.appendHex(hexModel);
    }, this);
  },
  buildGrid: function() {
    this.collection.reset();
    for(var i = 0; i < this.model.get('height'); i++) {
      for(var j = 0; j < this.model.get('width'); j++) {
        this.addHex(j, i);
      }
    }
  },
  changeHeight: function() {
    this.model.set('height', $('.js-height').val());
  },
  changeWidth: function() {
    var width = $('.js-width').val();
    this.model.set('width', parseInt(width));
  },
  addHex: function(i, j){
    var hexModel = new HexModel([i, j]);
    this.collection.add(hexModel);
  },
  appendHex: function(hexModel){
    var hexView = new HexView({
      model: hexModel
    });
    $('.js-grid', this.el).append(hexView.render().el);
    if (hexModel.get('x') + 1 === this.model.get('width')) {
      $('.js-grid', this.el).append('<br>');
    }
  }
});
