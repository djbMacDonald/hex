var BoardView = Backbone.View.extend({
  el: $('.js-board'),
  events: {
    'change .js-height': 'changeHeight',
    'change .js-width': 'changeWidth'
  },
  initialize: function(){
    _.bindAll(this, 'render', 'addHex', 'appendHex');
    var self = this;
    this.model = new BoardModel();
    this.model.bind('change', this.render);
    this.grid = new GridCollection();
    this.modes = new ModeCollection();
    _(this.model.get('modes')).each(function(mode) {
      var modeModel = new ModeModel(mode);
      self.modes.add(modeModel);
    });
    this.render();
  },
  render: function(){
    var self = this;
    self.buildGrid();
    var compiled = Mustache.render(menuTemplate, this.model.attributes);
    $('.js-size').html(compiled);
    $('.js-grid').empty();
    _(this.grid.models).each(function(hexModel){
      self.appendHex(hexModel);
    }, this);
    _(this.modes.models).each(function(modeModel) {
      var modeView = new ModeView({
        model: modeModel
      });
      $('.js-modes', self.el).append(modeView.render().el);
    });
  },
  buildGrid: function() {
    this.grid.reset();
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
    this.grid.add(hexModel);
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
