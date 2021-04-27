const config = {
  br: 0,
  r: 0,
  g: 0,
  b: 0,
};

function update(event, slider) {
  config[slider] = event.target.value;
  document.querySelector('#result').innerText = JSON.stringify(config);
  fetch(`set?br=${config.br}&r=${config.r}&g=${config.g}&b=${config.b}`);
}
