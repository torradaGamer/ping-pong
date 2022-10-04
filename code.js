var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var blocos = createGroup();




//linha dos blocos
for (var i = 0; i < 8; i++) {
  var boxline = createSprite(25+50*i,75,50,50);
  boxline.shapeColor = "black";
  
  blocos.add(boxline);
  
 if ((i+1)%2 == 0) {
  boxline.shapeColor = "red"}
}

for (var i = 0; i < 8; i++) {
  var boxline = createSprite(25+50*i,125,50,50);
  boxline.shapeColor = "black";

  blocos.add(boxline);

 if ((i+2)%2 == 0) {
  boxline.shapeColor = "blue"}
}
//criar a bola
var bola = createSprite(150,250,20,20);
  //pintar a bola
  bola.shapeColor = "black";
//criar raquete
var raquete = createSprite(150,350,140,10);
//pintar a raquete
raquete.shapeColor = "greenyellow";
  
 //cria paredes
 createEdgeSprites();
//para a bola rebater nas bordas e na raquete
 bola.bounceOff(topEdge);
 bola.bounceOff(raquete);
 bola.bounceOff(leftEdge);
 bola.bounceOff(rightEdge);

 var score = 0;

 var gameState = "lançar";


function draw() {
  background("white");
 drawSprites();
 if (keyDown("enter")) {
  bola.setVelocity(5,6);
  gameState = "Jogar";
}
raquete.x = World.mouseX;
 bola.bounceOff(topEdge);
 bola.bounceOff(raquete);
 bola.bounceOff(leftEdge);
 bola.bounceOff(rightEdge);


 bola.bounceOff(raquete);
 textSize(20);
 text("pontuaçao:" + score , 20, 15);


 bola.bounceOff(blocos,colidiu);

 if (score === 160){
 background("greenyellow");
 fill("blue");
 textSize(50);
 text("Venceu",120,200);
 bola.setVelocity(0,0);
}

if (gameState == "lançar") {
  
  textSize(20);
  fill("red");
  text("Precione Enter Para Iniciar",80,200);
  
  
  
  
}

  
  
  
  
}
function colidiu (bola,boxline) {
  boxline.destroy();
  score = score+10;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
