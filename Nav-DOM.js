//Axcessing the elemrntd in innerHTML 

let mid = document.getElementById|('mid');
//let mid = document.getElementsByClassName('container'); 
console.log(mid);

let nav = document.getElementById('nav li');
console.log(nav );

let containers = document.getElementsByClassName('containers');
console.log(containers);

//let sel = document.querySelector('#nav> li');
//console.log("selector returns", sel);

let sel = document.querySelectorAll('#nav> li');
console.log("selector returns", sel);