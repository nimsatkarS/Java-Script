console.log("This is date and time")
// let now = new Date;
// console.log(now);

let dt = new Date();
console.log(dt);

let newDate = new Date("2028-09-30");
// let newdate = new Date(year,month,date);
console.log(newDate);


let yr = newDate.getFullYear();
console.log("The year is",yr);

let dat = newDate.getDate();
console.log("The date is",dat);

let month =  newDate.getMonth();
console.log("The month is",month);

let hours = newDate.getHours();
console.log("The hours is",hours);

newDate.setDate(42);
console.log(newDate);

newDate.setHours(24);
console.log(newDate);

// setInterval(updateTime,1000);

// function updateTime(){
// Time.innerHTML =new Date()
// }

