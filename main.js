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