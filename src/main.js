var chem = require("chem");
var Vec2d = chem.vec2d;

chem.resources.useSpritesheet = false;

chem.onReady(function () {
  var canvas = document.getElementById("game");
  var engine = new chem.Engine(canvas);
  engine.buttonCaptureExceptions[chem.button.KeyCtrl] = true;
  for (var i = 1; i <= 10; i++) {
    engine.buttonCaptureExceptions[chem.button["KeyF" + i]] = true;
  }

  var cursor_position = {x:0, y:0};

  engine.on('update', function() {
    var dx = 0, dy = 0;
    if (engine.buttonJustPressed(chem.button.KeyW)) dy -= 1;
    if (engine.buttonJustPressed(chem.button.KeyA)) dx -= 1;
    if (engine.buttonJustPressed(chem.button.KeyS)) dy += 1;
    if (engine.buttonJustPressed(chem.button.KeyD)) dx += 1;
    cursor_position.x += dx;
    cursor_position.y += dy;
  });

  engine.on('draw', function (context) {
    // clear canvas to black
    context.fillStyle = '#000000';
    context.fillRect(0, 0, engine.size.x, engine.size.y);

    context.fillStyle = '#ffffff';
    var scale = 16;
    context.fillRect(cursor_position.x * scale, cursor_position.y * scale, scale, scale);

    // draw a little fps counter in the corner
    context.fillStyle = '#ffffff';
    engine.drawFps();
  });

  engine.start();
  canvas.focus();
});

