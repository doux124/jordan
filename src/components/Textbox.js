import Matter from 'matter-js';

const createTextBox = (x, y, text) => {
  const fontSize = 20; 
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${fontSize}px "Playpen Sans"`;
  const textWidth = context.measureText(text).width + 20;
  const textHeight = fontSize + 10;
  const scale = 0.7

  const box = Matter.Bodies.rectangle(x, y, textWidth, textHeight, {
    render: {
      sprite: {
        texture: createTextTexture(text, textWidth, textHeight),
        xScale: 1 * scale,
        yScale: 1 * scale
      }
    },
  });
  return box;
};


const createTextTexture = (text, width, height) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const pixelRatio = window.devicePixelRatio || 1;

  // Set canvas size accounting for pixel ratio
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  // Scale the context to ensure text is sharp
  context.scale(pixelRatio, pixelRatio);

  // Draw the background and text
  context.fillStyle = 'rgba(0, 0, 0, 0)';
  context.fillRect(0, 0, width, height);
  context.fillStyle = 'white';
  context.font = '20px "Playpen Sans"';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, width / 2, height / 2);

  // Return the texture as a data URL
  return canvas.toDataURL();
};

export default createTextBox;
