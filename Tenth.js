//Program to print first 10 natural numbers;
function natural(){
    for(let i=1; i<=10; i++){
        document.write(i + "<br>");
    }
    document.write("<br>");
}

natural();
//Program to add first 10 natural numbers;
function sum(){
    let sn = 0;
    for(let i = 1; i <= 10; i++){
        sn += i;
    }
    document.write(sn + "<br><br>");
}

sum();
//Program to create a multiplication table of a number;
function multable(){
    let num = window.prompt("Enter the number to find table: ");

    for(let i = 1; i <= 10; i++){
        document.write(num + " X " + i + " = " + (num*i) + "<br>");
    }
    document.write("<br>");
}

multable();
//Program to write n terms of odd number with their sum;
function oddterms(){
    let terms = window.prompt("Enter the total term you need:");
    let oddsum = 1;
    for(let i = 1; i < terms; i++){
            document.write(oddsum + "<br>");
            oddsum = oddsum + 2;
    }
    document.write(oddsum + "<br><br>");
}

oddterms();

let row1 = window.prompt("Enter the numbers of rows");
//Program of create given patter;
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
function stars(){
    for(let i=1;i<=row1;i++){
        let star=" *";
        let space = " &nbsp&nbsp";
        document.write(space.repeat(row1-i)+star.repeat(i) + "<br>");
    }
    document.write("<br>");
}

stars();
//Program of create given patter;
// 1
// 01
// 101
// 0101
function binary(){
    for(let i=1; i<=row1; i++){
        let one=" 1";
        let two=" 0 1";
        if(i==1){
            document.write(one + "<br>");
        }
        else if((i%2)==0){
            document.write(two.repeat(i/2) + "<br>");
        }
        else{
            document.write(one+two.repeat(i/2) + "<br>");
        }
    }
} 

binary();
//Program of create given patter;
// 1 
// 2 3
// 4 5 6 
// 7 8 9 10
function numbers(){
    let no = 1;
    for(let i=0; i<row1; i++){
        for(let j=1; j<=i; j++){
            document.write(no + " &nbsp");
            no++;
        }
        document.write("<br>");
    }
    document.write("<br>");
}

numbers();
//Program of create given patter;
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
function count(){
for(let i=1; i<=row1; i++){
        let no = 1;
        for(let j=1; j<=i; j++){
            document.write(no + " &nbsp");
            no++;
        }
        document.write("<br>");
    }
    document.write("<br>");
}

count();