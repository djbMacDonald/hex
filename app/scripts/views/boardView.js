var BoardView = Backbone.View.extend({
  el: $('.js-board'),
  events: {
    'change .js-height': 'changeHeight',
    'change .js-width': 'changeWidth',
    'click .js-grid': 'addPiece'
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
    self.children = [];
    self.buildGrid();
    var compiled = Mustache.render(menuTemplate, this.model.attributes);
    $('.js-size').html(compiled);
    $('.js-grid').empty();
    _(this.grid.models).each(function(hexModel){
      self.appendHex(hexModel);
    }, this);
    _(this.modes.models).each(function(modeModel) {
      var modeView = new ModeView({
        model: modeModel,
        parent: self
      });
      $('.js-modes', self.el).append(modeView.render().el);
      self.children.push(modeView);
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
      model: hexModel,
      parent: this
    });
    $('.js-grid', this.el).append(hexView.render().el);
    if (hexModel.get('x') + 1 === this.model.get('width')) {
      $('.js-grid', this.el).append('<br>');
    }
  },
  addPiece: function(e){
    var option, type;
    _(this.children).each(function(mode){
      if (mode.model.get('active')) {
        option = mode.model.get('name')
      }
      _(mode.subs.models).each(function(item){
        if (item.get('checked')){
          type = item.get('name');
        }
      });
    });
    if (type && option !== 'rotate' && option !== 'move' && option !== 'remove' && type !== 'back') {
      var $piece = $('<div>');
      $piece.addClass('piece');
      $piece.addClass(option);
      $piece.addClass(type);
      if (option === 'walls') {
        $piece.addClass('r');
      } else {
        $piece.addClass('ur');
      }
      if (option === 'walls') {
        $piece.css({
        'left': e.pageX - 10,
        'top': e.pageY - 40
      });
      } else {
        $piece.css({
        'left': e.pageX - 40,
        'top': e.pageY - 40
      });
      }
      $('body').append($piece);
      var self = this;
      $piece.click(function(){
        self.modify($(this));
      });
    }
  },
  modify: function($piece){
    var option, type;
    _(this.children).each(function(mode){
      if (mode.model.get('active')) {
        option = mode.model.get('name')
      }
    });
    if (option === 'remove') {
      $piece.remove();
    } else if (option === 'rotate'){
      if ($piece.hasClass('ur')){
        $piece.removeClass('ur');
        $piece.addClass('r');
      } else if ($piece.hasClass('r')){
        $piece.removeClass('r');
        $piece.addClass('lr');
      } else if ($piece.hasClass('lr')){
        $piece.removeClass('lr');
        $piece.addClass('ll');
      } else if ($piece.hasClass('ll')){
        $piece.removeClass('ll');
        $piece.addClass('l');
      } else if ($piece.hasClass('l')){
        $piece.removeClass('l');
        $piece.addClass('ul');
      } else if ($piece.hasClass('ul')){
        $piece.removeClass('ul');
        $piece.addClass('ur');
      }
    }
  }
});
