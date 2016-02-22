var BoardModel = Backbone.Model.extend({
  initialize: function() {
    this.set({width: 4});
    this.set({height: 6});
    this.set({modes: [
      {name: 'troops', url: 'a', subItems: [
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
        'knight'
      ]},
      {name: 'walls', url: 'b', subItems: [
        'solid',
        'weak',
        'low',
        'door',
        'back'
      ]},
      {name: 'object', url: 'd', subItems: [
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
      ]}
      ]
    });
  }
});
