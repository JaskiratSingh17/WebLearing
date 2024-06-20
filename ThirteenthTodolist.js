const display = document.getElementById('display');

function todolist(){
    const tasks = document.createElement('h2');
    const time = document.createElement('p');
    const task = document.getElementById("task").value;
    const date = new Date();
    console.log(date.getHours()+' : '+date.getMinutes()+' : '+date.getSeconds());

    tasks.innerText = `Title : ${task}`;
    time.innerText = `Update Time : ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

    const diff  = document.createElement('div');

    diff.append(tasks);
    diff.append(time);

    diff.style.display = "flex";
    diff.style.paddingLeft = "100px";
    diff.style.paddingRight = "100px";
    diff.style.justifyContent = "space-between";
    diff.style.alignItems = "baseline";

    display.append(diff);
    display.append(document.createElement('hr'));

    console.log(display);
}

function Delete(){
    display.removeChild(display.firstChild);
}

document.getElementById('addbtn').addEventListener('click',todolist);
document.getElementById('deletebtn').addEventListener('click',Delete);