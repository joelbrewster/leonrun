var Game = {
  init: function() {
    this.display = new ROT.Display();
    document.body.appendChild(this.display.getContainer());
  }
};

Game.map = {};
Game._generateMap = function() {
  var digger = new ROT.Map.Digger();

  var digCallback = function(x, y, value) {
    if (value) { return; } /* Do not store walls */

   var key = x+","+y;
   this.map[key] = ".";
 };
 digger.create(digCallback.bind(this));
};
