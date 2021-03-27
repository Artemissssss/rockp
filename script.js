'use strict'
// console.log('ALOHA');

// alert('Aloha');

// TYtpes of data

// string "hello world"
// number = 1,2 ,3 ,4...
// boolean true / false
// undefined 
// nall
// object


// let number1 = 2.1;

// const number2 = 2.2; 

// console.log ((number1*10 + number2*10)/10);

// let a;

// console.log(a);

// a = 5;
// console.log(a);
// const b = 10;
// console.log(a+b)
// console.log(b)
// a = 'Aloha';
// a = {c:1}
// a = true;




// console.log(typeof ((1+1+'1a') * 3));


// ---------------------logik operator
// const x= 5;
// const z=10;
// // const z = '5';
// console.log('x>y', x>y )
// console.log('x===y', x===z )
// console.log('x==y', x==z )
// console.log('x ! == z', x!==z )

// console.log(false)
//Fals eData
// 0
// **
// null
// undefined
// false
// NaN

// console.log(Math.pow(2, 300)<Math.pow(3, 200));
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
// console.log( Math.pow(factorial(100), 99)===Math.pow(factorial(99), 100));
// console.log(factorial(100))
// console.log(factorial(99))
// console.log(factorial(100)>factorial(99))
// console.log( Math.pow(factorial(100), 99)===Math.pow(factorial(99), 100));
// console.log( Math.pow(factorial(100), 99)==Math.pow(factorial(99), 100));
// console.log( Math.pow(factorial(100), 99)>Math.pow(factorial(99), 100));
// console.log( Math.pow(100, 99)>(factorial(100)));
// const img = new Image();
// img.src = 'http://www.stihi.ru/pics/2010/02/27/2487.jpg'
// alert(img);


// 20




// console.log(20*45);

//Fals eData
// 0
// **
// null
// undefined
// false
//------------_____________________________------------------______________-
// console.dir('ALOHA'.length)

// let str = 'hello world';
// let upperCaseSting = str.toUpperCase();
// console.log(upperCaseSting)

// console.log(str.indexOf('work'))

// console.log(str.includes('world'))
//_________________________________________________------------------------------




// const age = 12;
// const name = 'Artem';
// const prof = 'Student';
// // const res = 'My name is'+ name + ' , I am ' + age + 'years old';
// // console.log(res)

// const res = `My name is ${name}, I'm ${age+1} years old. I'm ${prof}.`
// console.log(res)
//<
//>
//==
//===
//!==
//
//&& i
// || uli

// const a = -1 || 0 || 0;
// console.log(a)

// const b = "1" && 1 && true && "";
// console.log(b)



///////////-------------------------------______________________-
//if/else
// const weather = false;
// const haveBike = true;
// if(weather && haveBike) {
//  console.log('I go ride a bike');
// } 
// else if (weather) {
//   console.log("I'll cry");
// }
//  else {
//    console.log("I'll die");
//  }

// const health = -10;
// const day =  5;
// const month = 5;
// if(health<8) {
//   console.log("Stay home, your sick")
// }
// else if (day === 6 || day===7) {
// console.log("Stay home, you have weekends")
// }
// else if(month >= 6 && month <= 8){
// console.log("Stay home, yiu have holiday")
// }
// else {
//   console.log('Go to school')
// }

// health<8 ? :
// (day === 6 || day===7) ? :
// (month >= 6 && month <= 8) ? console.log("Stay home, yiu have holiday") 

// true ? console.log(true) : console.log(false);

// const data = null;
// data ? alert(data) : console.error("No data yet")
// const car = true;
// const age = 6;
// car && age>=18 ? alert("Yes") : console.error("You loser") 

// let  str = "Hello world";
// let x = 0;
// while (x < str.lenght) {
// console.log(`${x+1} : ${str[i]}`); 
// x = x+1;

//  }
// let name = 'Artem'; 
// const mony = 10000;
// let fruits = "orange";//fruits 
// let meat = "friend";//meat,
// let sweets = "chokolate"//sweets,
// const time = 14;
// const day = 5;
// let fsum = 2;  
// let msum = 4;
// let ssum = 2;
// let fsu = 100;  
// let msu = 500;
// let ssu = 660;
// const a = fsu*fsum+msu*msum+ssu*ssum;
// if (time<8 || time > 22 || day >=7 || day<0) {
// console.log("Sorry, dear",name,"! We aren't working now.")
// } else if (fsum<=0 || msum<=0 || ssum<= 0 || fruits==meat || fruits==sweets || meat==sweets){
// console.log("You didn't buy food, which you need! It is law! You need buy tree types of product!")
// } else if(mony<a){
// console.log("Dear",name,"you haven't enough money! You need",a-mony,"grn.")
// }
// else {
//   console.log("Thanks dear",name,"! You bought",fsum,fruits,",",msum,meat,",",ssum,sweets,". From you",a,"gryvna! Come again! Your rest is",mony-a,"grn.")
// } 

// let str = "Hello world";


// let x = 0;
// while (x < str.length) {
// console.log(`${x+1} : ${str[x]}`);
// if (str[x] == ' ') {
//   continue;
// }
// x = x+1;
// }
// parth int до чесла
// part float до пайтон учи иди
// const arr = [1,'Hello',3,[NaN,false],{a:1}];
// console.log(arr[3],[4])
// console.log(arr[arr.indexOf("ножницы")]); знач
// console.log(arr.indexOf("ножницы")); номер
// console.log(arr[randomNumber]);


// console.log(arr[randomNumber]);
// console.log(arr[randomNumber]);

const arr = ["ножиці", "папір", "людина", "колодязь", "вовк","камінь","пістолет"];
let aa = 1;
while (aa>=1) {
const randomNumber = Math.round(Math.random() * (arr.length - 1));
let computersChoice = arr[randomNumber];
// alert(computersChoice,arr[randomNumber]);
let userChoise = prompt("Це гра 'Камінь, ножиці, папір' з деякими змінами. Вибирай: камінь,ножиці,папір,людина,колодязь,вовк,пістолет. Щоб зупинити гру напиши Стоп.");
if (arr.indexOf(userChoise) === arr.indexOf(computersChoice)) {
  alert(`Ніхто не програв і не виграв. Бо ви з комп'ютером вибрали ${(arr[randomNumber])}.`);
} else if (userChoise == "камінь") {
  if (computersChoice == "папір" || computersChoice =="колодязь") {
    alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
  } else {
    alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
  }
} else if (userChoise == "ножиці") {
  if (computersChoice == "камінь" || computersChoice =="людина" || computersChoice =="вовк" || computersChoice =="колодязь") {
    alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
  } else {
    alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
  }
} else if (userChoise == "папір") {
  if (computersChoice == "ножиці" || computersChoice == "людина" || computersChoice =="вовк") {
    alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
  } else {
    alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
  }
} else if (userChoise == "людина") {
  if (computersChoice == "вовк" || computersChoice =="камінь" || computersChoice =="колодязь") {
    alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
  } else {
    alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
  }
} else if (userChoise == "колодязь") {
  if (computersChoice == "папір") {
    alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
  } else {
    alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
  }
} else if (userChoise == "вовк") {
  if (computersChoice =="камінь" || computersChoice =="колодязь") {
    alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
  } else {
    alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
  }} else if (userChoise == "пістолет") {
  if (computersChoice =="камінь" || computersChoice =="колодязь") {
    alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
  } else {
    alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
  }
} else if(userChoise == "Стоп" || userChoise == "стоп"){
          i = 0;
 }else {
  alert("Спробуй ще раз! Бо ти неправильно вів значення!");
}
}










