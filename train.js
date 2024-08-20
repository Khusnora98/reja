console.log("Jack Ma Maslahatlari");
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
console.log('passed here 1');


/*maslahatBering(55,(err, data) =>{
    if (err) console.log('ERROR:', err);
    console.log('javob:', data );
})*/
/*maslahatBering("salom",(err, data) =>{
    if (err) console.log('ERROR:', err);
    console.log('javob:', data );
})bunda error :insert  a number chiqadi */ 


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


