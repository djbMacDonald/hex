var BoardModel = Backbone.Model.extend({
  initialize: function() {
    this.set({width: 4});
    this.set({height: 6});
    this.set({modes: [
      {name: 'troops', subItems: [
        'axe',
        'book',
        'bow',
        'doctor',
        'knight',
        'pistol',
        'shoe',
        'shotgun',
        'shovel',
        'sword',
        'back'
      ]},
      {name: 'walls', subItems: [
        'solid',
        'weak',
        'low',
        'door',
        'window',
        'open',
        'back'
      ]},
      {name: 'object', subItems: [
        'barrier',
        'bio',
        'bomb',
        'crowd',
        'fire',
        'rads',
        'rock',
        'skull',
        'lightning',
        'table',
        'back'
      ]},
      {name: 'rotate', subItems: []},
      {name: 'move', subItems: []},
      {name: 'remove', subItems: []}
    ]});
  }
});
