import Matter from 'matter-js';

const createTextBox = (x, y, text, color) => {
  const fontSize = 20; 
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${fontSize}px "Playpen Sans"`;
  const padding = window.innerWidth < 760 ? 3 : 10
  const textWidth = context.measureText(text).width + 2 * padding;
  const textHeight = fontSize + padding;
  const scale = window.innerWidth < 760 ? 0.2 : 0.7

  const box = Matter.Bodies.rectangle(x, y, textWidth, textHeight, {
    render: {
      sprite: {
        texture: createTextTexture(text, textWidth, textHeight, color),
        xScale: 1 * scale,
        yScale: 1 * scale
      }
    },
  });
  return box;
};


const createTextTexture = (text, width, height, color) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  context.scale(pixelRatio, pixelRatio);
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw
  context.fillStyle = 'rgba(0, 0, 0, 0)';
  context.fillRect(0, 0, width, height);
  context.fillStyle = color;
  context.font = '20px "Playpen Sans"';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, width / 2, height / 2);

  // Return the texture as a data URL
  return canvas.toDataURL();
};

export default createTextBox;
