let mouseX, mouseY;

const mouseMove = e => {
  mouseX = e.pageX - 4;
  mouseY = e.pageY - 4;
}

document.addEventListener('mousemove', mouseMove);

for( let i=0; i<=15; i++) {
  let dot = document.createElement('div');
  dot.className = 'dot';
  dot.dataset.speed = i;
  dot.style.left = '-1000px';
  document.body.appendChild(dot);
}

const dots = document.getElementsByClassName('dot');

// Performance improvement: replace setInterval with requestAnimationFrame()

const updateCoords = () => {
  for(let dot of dots) {
    setInterval(() => {
      dot.style.left = mouseX;
      dot.style.top = mouseY;
    }, dot.dataset.speed * 10);
  }
}
updateCoords();