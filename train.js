/* console.log("Jack Ma Maslahatlari");
const list = [
    "yaxshi talaba bo'ling", //0-20
    "to'gri boshliq tanlang va koproq xato qiling", //20-30
    "o'z ustingizda ishlashni boshlang", //30-40
    "siz kuchli bo'lgan narsalarni qiling",//40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling foydasi yoq ", //60
];
function maslahatBering(a , callback) {
if(typeof a != 'number') callback("Insert number", null);
else if( a <= 20 ) callback (null, list [0]);
else if (a >20 && a <= 30) callback (null, list [1]);
else if (a >30 && a <= 40) callback (null, list [2]);
else if (a >40 && a <= 50) callback (null, list [3]);
else if (a >50 && a <= 60) callback (null, list [4]);
else {
    setTimeout(function(){
        callback(null , list [5]);
    }, 5000);
}
}
console.log('passed here 0')
maslahatBering(65,(err, data) =>{
    if (err) console.log('ERROR:', err);
    else{     
        console.log('javob:', data );

    }
});
console.log('passed here 1'); */


/*maslahatBering(55,(err, data) =>{
    if (err) console.log('ERROR:', err);
    console.log('javob:', data );
})*/
/*maslahatBering("salom",(err, data) =>{
    if (err) console.log('ERROR:', err);
    console.log('javob:', data );
})bunda error :insert  a number chiqadi */ 




//Asynchronous Functionlarni qo'llash 
//then&catch
/*console.log("Jack Ma Maslahatlari");
const list = [
    "yaxshi talaba bo'ling", //0-20
    "to'gri boshliq tanlang va koproq xato qiling", //20-30
    "o'z ustingizda ishlashni boshlang", //30-40
    "siz kuchli bo'lgan narsalarni qiling",//40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling foydasi yoq ", //60
];
async function maslahatBering(a) {
    if(typeof a != 'number') throw new Error ("Insert number", null);
    else if( a <= 20 ) return list [0];
    else if (a >20 && a <= 30)  return list [1];
    else if (a >30 && a <= 40)  return list [2];
    else if (a >40 && a <= 50)  return list [3];
    else if (a >50 && a <= 60)  return list [4];
    else {
     //    setTimeout(function(){
     //       return listlist [5];
     //   }, 5000);
    }
    }
    console.log('passed here 0')
    maslahatBering(20). then(data => {
console.log('jabob:', data);
    }). catch(err => {
        console.log('ERROR:', err);

    })
    console.log('passed here 1')*/

    
    console.log("Jack Ma Maslahatlari");
const list = [
    "yaxshi talaba bo'ling", //0-20
    "to'gri boshliq tanlang va koproq xato qiling", //20-30
    "o'z ustingizda ishlashni boshlang", //30-40
    "siz kuchli bo'lgan narsalarni qiling",//40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling foydasi yoq ", //60
];

   /*function maslahatBering(a) {
        if(typeof a != 'number') throw new Error ("Insert number",null);
        else if( a <= 20 ) return list [0];
        else if (a >20 && a <= 30)  return list [1];
        else if (a >30 && a <= 40)  return list [2];
        else if (a >40 && a <= 50)  return list [3];
        else if (a >50 && a <= 60)  return list [4];
        else {
            return new Promise ((resolve , reject ) => {
                setTimeout (() => {
                resolve(list[5]);
                }, 1000);
            });*/
            function maslahatBering(a , callback) {
                if(typeof a != 'number') callback("Insert number", null);
                else if( a <= 20 ) callback (null, list [0]);
                else if (a >20 && a <= 30) callback (null, list [1]);
                else if (a >30 && a <= 40) callback (null, list [2]);
                else if (a >40 && a <= 50) callback (null, list [3]);
                else if (a >50 && a <= 60) callback (null, list [4]);
                else {
            setInterval(function(){
                callback(null,list[5]);
            }, 1000);
        }
        }

    //aync va await orqali soddalashtiriladi 

   /* async function run(){
let javob = await maslahatBering (65);
console.log(javob);
javob = await maslahatBering (70);
console.log(javob);
javob = await maslahatBering (41);
console.log(javob);
 }
    run();*/

console.log('passed here 0')
maslahatBering(70,(err, data) =>{
    if (err) console.log('ERROR:', err);
    else{     
        console.log('javob:', data );

    }
});
console.log('passed here 1'); 


   

   




    console.log("======TASK A=====")
//Masala izohi:
// A-TASK: 
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.

//Masala yechimi:
function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}
// Natija:
console.log(countLetter("o", "photo")); 

