var BoardView = Backbone.View.extend({
  el: $('.js-board'),
  events: {},
  initialize: function(){
    _.bindAll(this, 'render', 'addHex', 'appendHex');
    this.model = new BoardModel();
    this.collection = new GridCollection();
    this.collection.bind('add', this.appendHex);
    this.render();
    for(var i = 0; i < this.model.get('width'); i++) {
      for(var j = 0; j < this.model.get('height'); j++) {
        this.addHex(i, j);
      }
    }
  },
  render: function(){
    var self = this;
    _(this.collection.models).each(function(hexModel){
      self.appendHex(hexModel);
    }, this);
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
    if (hexModel.get('y') + 1 === this.model.get('width')) {
      $('.js-grid', this.el).append('<br>');
    }
  }
});
