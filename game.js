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
    if (value) {
      return;
    } /* Do not store walls */

    var key = x+","+y;
    this.map[key] = ".";
  };
  digger.create(digCallback.bind(this));
};

Game._drawWholeMap = function() {
  for (var key in this.map) {
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    this.display.draw(x, y, this.map[key]);
  }
};
