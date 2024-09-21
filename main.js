// function array(...number) {
//   return [number]
// }

// var newArray = array(1,2,3,4,5)
// console.log(newArray)

// var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

// console.log(Math.max(...numbers))

// function sort1(asd) {
//   console.log(...[...asd].sort());
// }

// sort1('bear');

// function 글자세기(asd) {
//   var result = {}
//   var strings = [...asd].sort()
//   strings.forEach(function(a) {
//     if (result[a] > 0) {
//       result[a] = result[a] + 1
//     } else {
//       result[a] = 1
//     }
//   })
//   console.log(result)
// }

// 글자세기('aacbbb')



// function Item(name, price) {
//   this.name = name;
//   this.price = price;
//   this.부가세 = function() {
//     console.log('부가세는 ' + this.price * 0.1 +'원 입니다')
//   }
// }


// var product1 = new Item('shirts', 50000)
// var product2 = new Item('pants', 60000)
// console.log(product1, product2)
// product1.부가세()
// product2.부가세()


// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function() {
//     console.log('안녕 나는 ' + this.name + '이야')
//   }
// }

// var student1 = new Student('Kim', 20);
// var student2 = new Student('Park', 21);
// var student3 = new Student('Lee', 22);
// console.log(student1, student2, student3)
// student1.sayHi()

// function Parent(){
//   this.name = 'Kim';
// }
// var a = new Parent();

// a.__proto__.name = 'Park';
// console.log(a.name)


// function Student(이름, 나이){
//   this.name = 이름;
//   this.age = 나이;
// }

// Student.prototype.sayHi = function() {
//     console.log('안녕 나는 ' + this.name + '이야');
//   }
// var 학생1 = new Student('Kim', 20);

// 학생1.sayHi();

// var arr = [1, 2, 3];


// Array.prototype.remove3 = function() {
//   // 1. 배열을 받아서 확인 후 3이 되면 배열에서 삭제시키기
//   // 2. 배열을 받아서 확인 후 결과창에 3빼고 다 집어 넣기
//   console.log(this)
//   for (var i = 0; i < this.length; i++ ) {
//     if (this[i] === 3) {
//       this.splice(i, 1);
//     }
//   } 
// }

// arr.remove3()

// console.log(arr)

// class Dogs {
//   constructor(type, color) {
//     this.type = type;
//     this.color = color;
//   }
//   한살먹기() {
//     console.log('error')
//   }
// }

// var dog1 = new Dogs('말티즈', 'white');
// var dog2 = new Dogs('진돗개', 'brown');

// class Cats extends Dogs {
//   constructor(type, color, age) {
//     super(type, color);
//     this.age = age;
//   }
//   한살먹기() {
//     return this.age + 1
//   }
// }

// var cat1 = new Cats('코숏', 'white', 5)
// var cat2 = new Cats('러시안블루', 'brown', 2)


// class Unit {
//   constructor() {
//     this.공격력 = 5;
//     this.체력 = 100
//   }
//   get battlePoint() {
//     return this.공격력 + this.체력
//   }
//   set heal(value) {
//     this.체력 += value
//   }
// }

// var asd = new Unit();

// var data = {
//   odd : [],
//   even : [],
//   getter() {
//     return [...this.odd, ...this.even].sort()
//   },
//   setter(...arr) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 1) {
//         this.odd.push(arr[i])
//       } else {
//         this.even.push(arr[i])
//       }
//     }
//   }
// }

// var [number, address] = [ 30, 'seoul' ];
// console.log(number, address)
// var {address : a , number = 20 } = { address, number };
// console.log(a, address, number)


// let 신체정보 = {
//   body: {
//     height: 190,
//     weight: 70
//   },
//   size: ["상의 Large", "바지 30인치"],
// };

// let {
//   body: {
//     height,
//     weight,
//   },
//   size: [ 상의, 하의 ]
// } = 신체정보;

// console.log(height, weight, 상의, 하의)

// var promise = new Promise(function(resolve, reject) {
//   var hard = 1 + 1;
//   reject(hard);
// });

// promise.then(function(a) {
//   console.log('success', a)
// }).catch(function(a) {
//   console.log('failed', a)
// })

// var promise = new Promise(function(resolve, reject) {
//   document.getElementById('test').addEventListener('load', function() {
//     resolve();
//   });
//   document.getElementById('test').addEventListener('error', function() {
//     reject();
//   });
// })

// promise.then(function() {
//   console.log('success')
// }).catch(function() {
//   console.log('failed')
// })

// $.ajax({
//   type: 'GET',
//   url: 'https://codingapple1.github.io/hello.txt', 
// }).done(function(result) {
//   // console.log(result)
// })

// $.ajax({
//   type: 'GET',
//   url: 'https://codingapple1.github.io/hello2.txt', 
// }).done(function(result) {
//   // console.log(result)
// })

// var promise1 = new Promise(function(resolve, reject) {
//   $.get('https://codingapple1.github.io/hello.txt').done(function(result) {
//     console.log(result)
//     resolve(result)
//   }).then(function() {
//     $.get('https://codingapple1.github.io/hello2.txt').done(function(result2) {
//       console.log(result2)
//       resolve(result2)
//     })
//   })
  
  
// })

// promise1.then(function(result, result2) {
//   // console.log(result)
// }).then(function(result2) {
//   // console.log(result2)
// })


// var promise2 = new Promise(function( resolve, reject) {
//   $.get('https://codingapple1.github.io/hello.txt').done(function(result) {
//     resolve(result)
//   })
// })

// promise2.then(function(result) {
//   console.log(result)

//   var promise3 = new Promise(function(resolve, reject) {
//     $.get('https://codingapple1.github.io/hello2.txt').done(function(result) {
//       resolve(result)
//     })
//   });

//   return promise3;
// }).then(function(result) {
//   console.log(result)
// })


// async function sum() {
//   var promise4 = new Promise(function(resolve, reject) {
//     document.getElementById('test2').addEventListener('click', function() {
//       resolve('성공 ~');
//     })
//   })
//   try {
//     var result4 = await promise4;
//     console.log(result4)
//   } catch {
//     console.log('뭐함?')
//   }

// }

// sum()


// var obj = { name : 'kim', age : 20 };

// for (const key in obj) {
//   console.log(obj[key])
// }

// let 데이터 = [1,2,3,4,5,6,7,8,9] 

// for (let i of 데이터) {
//   for (let j of 데이터) {
//     console.log(`${i} x ${j} = ${i * j}`)
//   }
// }


// var products = [
//   {
//     name1 : 'chair',
//     price1 : 7000,
//   },
//   {
//     name2 : 'sofa',
//     price : 5000,
//   },
//   {
//     name1 : 'desk',
//     price3 : 9000,
//   },
// ];
// var reg = /[^0-9]/g;

// for (var i of products) {
//   // 배열안에 오브젝트의 키 중 오타부분인 숫자를 없앤다
//   console.log(i)
//   for ( var j in i) {
//     console.log(j)
    
//   }
// }

// let newValue, newKey


// for (var i of products) {
//   for ( var j in i) {
//     if (isNaN(parseInt(j.slice(-1))) == false) {
//       newValue = i[j];
//       newKey = j.slice(0, -1);
//       i[newKey] = newValue;    
//       delete i[j]   
      
//     }
//   }
// }

// // console.log(products)

// var symbol = Symbol('???')
// var weight = Symbol('secret')
// var height = Symbol('small')

// var person = {
//   name : 'kim'
// }
// person.weight = 200
// person[weight] = 250
// person.height = 190
// person[height] = 130
// console.log(weight,height)

// for (var i in person) {
//   console.log(person[i])
// }

var person = new Map();

person.set('name', 'kim')
console.log(person)