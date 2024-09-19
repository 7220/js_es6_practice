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



function Item(name, price) {
  this.name = name;
  this.price = price;
  this.부가세 = function() {
    console.log('부가세는 ' + this.price * 0.1 +'원 입니다')
  }
}


var product1 = new Item('shirts', 50000)
var product2 = new Item('pants', 60000)
console.log(product1, product2)
product1.부가세()
product2.부가세()