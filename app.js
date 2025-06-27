const body = document.querySelector('body');
let button = document.createElement('button');
button.innerText = 'Click me';
button.style.padding = '10px';
button.style.margin = '100px';
button.style.borderRadius = '10px';
button.style.cursor = 'pointer';
button.setAttribute('onclick', 'colorChange();');
body.appendChild(button);


function colorChange() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${r},${g},${b})`;

  body.style.background = randomColor;
}

