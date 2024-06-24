const cards = document.getElementById('cards');

const fetchdata = async() => {
    const data = await fetch('https://dummyjson.com/todos');
    const main = await data.json();

    const todo = main.todos;
    
    console.log(todo);

    todo.forEach((a) => {
        cards.innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6" style="border: 2px cyan solid">
        <p><strong>ID : </strong>${a.id}</p><br>
        <p><strong>User-ID : </strong>${a.userId}</p><br>
        <p><strong>Todo-task : </strong>${a.todo}</p><br>
        <p><strong>Status: </strong>${a.completed}</p><br>
        </div>
        `
    });
}

fetchdata();