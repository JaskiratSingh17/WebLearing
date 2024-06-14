//Number is positive or not
let a = prompt("Enter number a:")

if(a>=0){
    console.log(a+" is a positive number");
}
else{
    console.log(a+" is negative");
}

//Number is even or odd
let b = prompt("Enter number b:")

if(b%2==0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}

//Entered year is Leap year or not
let year = prompt("Enter the year to check: ");

if(year%4 == 0){
    console.log("This year is Lear Year")
}
else{
    console.log("This year is not a leap Year");
}

//Greatest of 3
{
    let a = 5;
    let b = 7;
    let c = 11;
    if(a>b&&a>c){
        console.log("A is greatest");
    }
    else if(b>a&&b>c){
        console.log("B is greatest");
    }
    else{
        console.log("C is greatest");
    }
}

//Getting margin
let sp = prompt("Enter the Buying price:");
let bp = prompt("Enter the Selling price");

if(sp>bp){
    console.log((sp-bp));
    console.log("Its profit");
}
else if(sp==bp){
    console.log(sp-bp);
    console.log("It break even");
}
else{
    console.log((bp-sp));
    console.log("Its loss");
}

//Type of Triangle
let side1 = prompt("Enter the side1:");
let side2 = prompt("Enter the side2:");
let side3 = prompt("Enter the side3:");

if((side1==side2)&&(side2==side3)){
    console.log("Equilateral");
}
else if((side1==side2!=side3)||(side1==side3!=side2)||(side3==side2!=side1)){
    console.log("Isoscelaes");
}
else{
    console.log("Scaler");
}

//Grading System
let marks = prompt("Enter your marks");
if(marks>90){
    console.log("Grade A");
}
else if((marks>=80)&&(marks<90)){
    console.log("Grade B");
}
else if((marks>=70)&&(marks<80)){
    console.log("Grade C");
}
else if((marks>=40)&&(marks<70)){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

//Quadrant of graph
let x = prompt("Enter x coordinate");
let y = prompt("Enter y coordinate");
if((x>0) && (y>0)){
    console.log("1st Quadrant");
}
else if((x<0) && (y>0)){
    console.log("2nd Quadrant");
}
else if((x<0) && (y<0)){
    console.log("3rd Quadrant");
}
else{
    console.log("4th Quadrant");
}

//Days in week
let date = prompt("Enter date")
switch(date){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("There are 7 day in week you moron!");
        break;
}

//Read a month and display it's number
let month = prompt("Enter the name of month:")
switch(month){
    case 'January':
        console.log(1);
        break;

    case 'Febuary':
        console.log(1);
        break;
    case 'March':
        console.log(1);
        break;
    case 'April':
        console.log(1);
        break;
    case 'May':
        console.log(1);
        break;
    case 'June':
        console.log(1);
        break;
    case 'July':
        console.log(1);
        break;
    case 'August':
        console.log(1);
        break;
    case 'September':
        console.log(1);
        break;
    case 'October':
        console.log(1);
        break;
    case 'November':
        console.log(1);
        break;
    case 'December':
        console.log(1);
        break;
    default:
        console.log("Which month is this moron!");
}