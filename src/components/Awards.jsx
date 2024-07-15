import { useEffect, useRef } from 'react';
import Matter, { Body } from 'matter-js';
import createTextBox from './Textbox';

const Awards = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Set up Matter.js
    const { Engine, Render, Composite, Bodies, Runner, Events, Mouse, MouseConstraint } = Matter;

    // Create an engine with gravity
    const engine = Engine.create({
      gravity: { x: 0, y: 0, scale: 0.001 }
    });

    // Create a renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth * 0.8,
        height: 600,
        wireframes: false,
        background: '#000000' // Set background to black
      },
    });

    // Define the canvas dimensions
    const canvasWidth = window.innerWidth * 0.8;
    const canvasHeight = 600;

    // Create border rectangles with labels
    const borders = [
      Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, 10, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Top' }), 
      Bodies.rectangle(canvasWidth / 2, canvasHeight, canvasWidth, 10, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Bottom' }),
      Bodies.rectangle(0, canvasHeight / 2, 10, canvasHeight, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Left' }),
      Bodies.rectangle(canvasWidth, canvasHeight / 2, 10, canvasHeight, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Right' })
    ];

    // Achievements
    const texts = [
      'IChTo 1st place', 
      'GYSTB 1st place',
      'ill fill this list later'
    ];

    // Create boxes for each text
    const boxes = texts.map((text, index) => createTextBox(400, 200 + (index * 100), text));

    // Create a floor
    const boxFloor = Bodies.rectangle(canvasWidth / 2, canvasHeight - 4, canvasWidth, 3, { render: { fillStyle: '#000000' }, label: 'Floor' });
    boxFloor.isStatic = true;

    // Add the boxes and borders to the world
    Composite.add(engine.world, [...boxes, boxFloor, ...borders]);

    // Create mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Gravity start
    render.canvas.addEventListener('click', () => {
      engine.gravity.y = 1;
    });

    // Run the engine
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Collision event handling
    Events.on(engine, 'collisionStart', event => {
      const pairs = event.pairs;
      pairs.forEach(pair => {
        // Handle collisions here
      });
    });

    // Function to apply a slight bounce in a random direction
    const applyBounce = (body) => {
      const forceMagnitude = 100; // Adjust as needed
      const angle = Math.random() * Math.PI * 2; // Random angle
      const force = {
        x: Math.cos(angle) * forceMagnitude,
        y: Math.sin(angle) * forceMagnitude
      };
      Body.applyForce(body, body.position, force);
    };

    // Clean up on component unmount
    return () => {
      Render.stop(render);
      Engine.clear(engine);
      Composite.clear(engine.world, false);
      Runner.stop(runner);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return <div className="physics-container" ref={sceneRef} />;
};

export default Awards;
