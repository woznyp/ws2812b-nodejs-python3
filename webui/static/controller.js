let config = {
  br: 0,
  r: 0,
  g: 0,
  b: 0,
};

function update(event, slider) {
  if (event) {
    config[slider] = event.target.value;
  }
  document.querySelector(
    '#selected-color'
  ).style.background = `rgba(${config.r}, ${config.g}, ${config.b}, ${config.br})`;

  document.querySelector(
    '#result'
  ).innerText = `rgba(\n${config.r}, \n${config.g}, \n${config.b}, \n${config.br})`;

  fetch(`set?br=${config.br}&r=${config.r}&g=${config.g}&b=${config.b}`);
}

function setFavorite(r, g, b, br) {
  config = {
    r,
    g,
    b,
    br,
  };

  document.querySelector('#r').value = r;
  document.querySelector('#g').value = g;
  document.querySelector('#b').value = b;
  document.querySelector('#br').value = br;

  update();
}
