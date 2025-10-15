$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 625, 50, 10)
createPlatform(400, 400, 20, 5)
createPlatform(300, 500, 150, 15)
createPlatform(500, 300, 150, 15)
createPlatform(800, 400, 30, 20)
createPlatform(600, 150, 100, 50)
createPlatform(800, 125, 50, 10)
createPlatform(1050, 300, 75, 50)
createPlatform(900, 200, 10, 5)
createPlatform(300, 150, 30, 15)
createPlatform(100, 400, 100, 10)
createPlatform(100, 270, 50, 5)
createPlatform(1000, 600, 50, 15)
createPlatform(1250, 500, 70, 10)
    // TODO 3 - Create Collectables
createCollectable("grace", 205, 580)
createCollectable("grace", 105, 230)
createCollectable("grace", 1275, 455)    
createCollectable("grace", 805, 85)
createCollectable("grace", 795, 355)
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
