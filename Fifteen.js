const display = document.getElementById('disp');
setTimeout(() => {
    console.log('Example of SetTimeOut!');
    const head = document.createElement('h2');
    head.innerText = 'Example of SetTimeOut!';
    
    display.appendChild(head);
    setint();
}, 1000);

let a;

function setint(){
    a = setInterval(()=>{
        const para = document.createElement('p');
        para.innerText = 'SetInterval!'; 
        display.appendChild(para);
        console.log('SetInterval!');
    },2000)
}

async function delayed(){
    const para2 = document.createElement('p');
    para2.innerText = await 'Async and Await keywords!';
    let par = await 'Async and Await keywords!';
    display.appendChild(para2);
    console.log(par);
} 

delayed();

const head2 = document.createElement('h1');
head2.innerText = "This is Heading 1";
display.appendChild(head2);

function stop(){
    clearInterval(a);
}