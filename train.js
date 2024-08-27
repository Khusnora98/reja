



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
    
    
    
    console.log("======TASK B=====")
    //Masala izohi:
    // B-TASK: 
    // Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

    
    //Masala yechimi:

function countDigits(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            count++;
        }
    }
    return count;
}
console.log(countDigits("ahfhsdd2a5498y79wet0sfdjhj0909b9")); 



console.log("======TASK C=====")
//Masala izohi:
    // C-TASK: 
    /*Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
    
    MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */

    //Masala yechimi:
    class Shop {
        constructor(non, lagmon, cola) {
          // Uch xil mahsulot uchun zaxirani boshlang'ich miqdorlari
          this.stock = {
            non: non,
            lagmon: lagmon,
            cola: cola,
          };
        }
      
        // Hozirgi vaqtni log qilish uchun method
        logTime() {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          return `${hours}:${minutes}`;
        }
      
        // qoldiq va zaxira status 
        qoldiq() {
          console.log(
            `Hozir ${this.logTime()}da ${this.stock.non}ta non, ${this.stock.lagmon}ta lagmon va ${this.stock.cola}ta cola mavjud!`
          );
        }
      
        // Berilgan miqdorda mahsulot sotish va tranzaktsiyani log qilish uchun method
        sotish(mahsulot, miqdor) {
          if (this.stock[mahsulot] !== undefined && this.stock[mahsulot] >= miqdor) {
            this.stock[mahsulot] -= miqdor;
            console.log(
              `Hozir ${this.logTime()}da ${miqdor}ta ${mahsulot} sotildi.`
            );
          } else {
            console.log(
              `Hozir ${this.logTime()}da yetarli ${mahsulot} mavjud emas!`
            );
          }
        }
      
        // Yangi mahsulot add va tranzaktsiyani log qilish uchun method
        qabul(mahsulot, miqdor) {
          if (this.stock[mahsulot] !== undefined) {
            this.stock[mahsulot] += miqdor;
            console.log(
              `Hozir ${this.logTime()}da ${miqdor}ta ${mahsulot} qabul qilindi.`
            );
          } else {
            console.log(
              `Hozir ${this.logTime()}da noto'g'ri mahsulot nomi kiritildi!`
            );
          }
        }
      }
      
      // Classdan foydalanish eg
      const shop = new Shop(4, 5, 2);
      shop.qoldiq(); // Natija: Hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
      shop.sotish('non', 3); // Result: Hozir 20:45da 3ta non sotildi.
      shop.qabul('cola', 4); // Result: Hozir 20:50da 4ta cola qabul qilindi.
      shop.qoldiq(); // Result: Hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

      
      
      console.log("======TASK D=====")

      function checkContent(str1, str2) {
        // Har ikkala stringni arrayga aylantirib, keyin alohida saralash
        const sortedStr1 = str1.split('').sort().join('');
        const sortedStr2 = str2.split('').sort().join('');
        
        // Saralangan stringlarni solishtirish
        return sortedStr1 === sortedStr2;
    }
    
    // Misollar
    console.log(checkContent("mitgroup", "gmtiprou"));  // true
    console.log(checkContent("hello", "bello"));        // false
    













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


   

   

