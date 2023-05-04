let i = 0;
for(i=0;i<3;i++){
console.log(i);}
       
let friend =["rohan","rohit","dheraj","deep",];
for(let index = 0;index < friend.length;index++){
    console.log("Hello friend,"+friend[index]);
}

frienf.foreach(function f(element){
console.log("hellow friend,"+ element);
});

let employe ={
    name:"Rohit",
    salary:2,
    chainl:"BTS"
}
for(key in employe){
    console.log(`The${key} of employee is ${employe[key]}`);
}

//let i =0;
while(i<4){
    console.log(`${i} is less than 4`);
    i++;
}

let j =34;
do{
    console.log(`${j} is less than 4 inside do while loop`);
    j++;
}while(j<4);
