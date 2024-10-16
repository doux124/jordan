import { useEffect, useRef } from 'react';
import Matter, { Body } from 'matter-js';
import createTextBox from './Textbox';

const Awards = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Set up Matter.js
    const { Engine, Render, Composite, Bodies, Runner, Events, Mouse, MouseConstraint } = Matter;
    const engine = Engine.create({
      gravity: { x: 0, y: 0, scale: 0.001 }
    });
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

    // Borders
    const canvasWidth = window.innerWidth * 0.8;
    const canvasHeight = 600;
    const borders = [
      Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, 10, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Top' }), 
      Bodies.rectangle(canvasWidth / 2, canvasHeight, canvasWidth, 10, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Bottom' }),
      Bodies.rectangle(0, canvasHeight / 2, 10, canvasHeight, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Left' }),
      Bodies.rectangle(canvasWidth, canvasHeight / 2, 10, canvasHeight, { isStatic: true, render: { fillStyle: '#FFD700' }, label: 'Right' })
    ];

    // Achievements
    const texts = [
      { text: 'IChTo 1st place', color: 'gold' },
      { text: 'GYSTB 1st place', color: 'gold' },
      { text: 'SSEF Gold', color: 'gold' },
      { text: 'SChO Gold', color: 'gold' },
      { text: 'IEF Gold', color: 'gold' },
      { text: 'SSEF Silver', color: 'silver' },
      { text: 'TKKYIA Silver', color: 'silver' },
      { text: 'SJBO Gold', color: 'gold' },
    ];
    const width = render.options.width;
    const height = render.options.height;
    const x1 = width / 4;
    const x2 = width / 3;
    const y = height / 5;
    const boxes = texts.map((item, index) => {
      const { text, color } = item;
      return createTextBox(
      ((Math.floor(2*(index)/5))%2==0)?x1+x1*((((index)%5+1)-3*Math.floor(((index)%5)/3))-1):x2+x2*((((index)%5+1)-3*Math.floor(((index)%5)/3))-1),
      y+y*Math.floor(2*(index)/5), 
      text,
      color
      );
    });
    const boxFloor = Bodies.rectangle(canvasWidth / 2, canvasHeight - 4, canvasWidth, 3, { render: { fillStyle: '#000000' }, label: 'Floor' });
    boxFloor.isStatic = true;
    Composite.add(engine.world, [...boxes, boxFloor, ...borders]);

    // Mouse
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
    render.mouse = mouse;

    // Gravity start
    render.canvas.addEventListener('click', () => {
      engine.gravity.y = 1;
    });

    // Run
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
    const applyBounce = (body) => {
      const forceMagnitude = 100; // Adjust as needed
      const angle = Math.random() * Math.PI * 2; // Random angle
      const force = {
        x: Math.cos(angle) * forceMagnitude,
        y: Math.sin(angle) * forceMagnitude
      };
      Body.applyForce(body, body.position, force);
    };

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
