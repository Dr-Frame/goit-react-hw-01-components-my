function randomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x}, ${y}, ${z})`;
  return bgColor;
}

export default randomColor;
