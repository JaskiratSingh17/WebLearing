const display = document.getElementById('display');
let array = [];
let array1 = []
let array2 = [];
let array3 = [];

function basket(){
    const Name = document.getElementById('itemName').value;
    const Type = document.getElementById('itemType').value;
    const Price = document.getElementById('itemPrice').value;

    const div = document.createElement('div');

    div.style.display = 'flex';
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.marginLeft = "100px";
    div.style.marginRight = "100px";

    const Title = document.createElement('h3');
    const Detail = document.createElement('p');
    const Rate = document.createElement('p');

    Title.innerText = Name;
    Detail.innerText = Type;
    Rate.innerText = Price;

    if((Name && Type) && Price){
        array1.push(Name);
        array2.push(Type);
        array3.push(Price); 

        div.append(Title);
        div.append(Detail);
        div.append(Rate);
    }

    array1.forEach((a) => {
        console.log(a);
    })

    const filterarr = array2.filter((item) => {
        if(!Food){
            return item;
        }
    })

    const Mappedarr = array3.map((cost) => {
        return cost*2;
    })

    console.log(Mappedarr);
    console.log(filterarr);

    display.append(div);
}

function empty(){
    display.removeChild(display.firstChild);
}

array.push(array1);
array.push(array2);
array.push(array3);

console.log(array);

document.getElementById('addbtn').addEventListener('click',basket);
document.getElementById('deletebtn').addEventListener('click',empty);