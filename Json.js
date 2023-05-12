let jsonObj = {
    name:"sanket",
    chaniel:"foodloncher",
    food:"checkan",
    drink:"water"

}
console.log(jsonObj);
let myjsonStr = JSON.stringify(jsonObj);
console.log(myjsonStr);

myjsonStr=myjsonStr.replace('sanket','panket');
console.log(myjsonStr);

newjsonObj=JSON.parse(myjsonStr);
console.log(newjsonObj);