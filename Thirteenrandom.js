const random = document.getElementById('Random');
const para = document.getElementById('para');

document.getElementById('color').addEventListener('click', () => {
    
        const red = Math.floor(Math.random()*256);
        const red1 = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const green1 = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const blue1 = Math.floor(Math.random()*256);
        const height = Math.floor(Math.random()*600);
        const width = Math.floor(Math.random()*1000);
        const top = Math.floor(Math.random()*200);
        const left = Math.floor(Math.random()*200);

        random.style.backgroundColor = `rgb(${red},${green},${blue})`;
        para.style.color = `rgb(${red1},${green1},${blue1})`;
        random.style.height = `${height}px`;
        random.style.width = `${width}px`;
        random.style.marginTop = `${top}px`;
        random.style.marginLeft = `${left}px`;
    }
);