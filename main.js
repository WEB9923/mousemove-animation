let body = document.querySelector('body');
function moveAnimation(e) {
    let element = document.createElement('span');
    element.classList.add('element')
    let x = e.offsetX;
    let y = e.offsetY;
    let size = Math.random() * 10;
    let transformValue = Math.random() * 360;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.width = `${2 + size}px`;
    element.style.height = `${2 + size}px`;
    element.style.transform = `rotate(${transformValue}deg)`;
    body.appendChild(element);
    setTimeout(() => {
        element.remove();
    },3000)
}
document.addEventListener('mousemove', moveAnimation);