/**
 * Scope
 */

//  전역변수
var num = 20;

function levelOne() {
  console.log(num);
}
// levelOne();

function levelOne() {
  // 지역변수
  var num = 40;

  console.log(num);
}
// levelOne();

console.log(num);

function levelOne() {
  var num = 40;

  function levelTwo() {
    var numTwo = 99;

    console.log(`levelTwo numTwo: ${numTwo}`);
    console.log(`levelTwo num: ${num}`);
  }

  levelTwo();
  console.log(`levelOne num: ${num}`);
}
levelOne();
console.log(num);

// 함수에 들어있기 때문에
// console.log(numTwo);

console.log("----------------------");

/**
 * JS -> Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 *
 * 실행한 위치가 상위 스코프를 정한다.
 */

var numThree = 3;

function functionOne() {
  var numThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numThree);
}

functionOne();

console.log("----------------------");

/**
 * var 는 함수 레벨 스코프만 만듦.
 *
 * let, const는 함수 레벨 스코프와 블록 레벨 스코프를 만듦.
 */

var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope: ${i}`);

console.log("----------------------");

// block level scope
i = 999;

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope: ${i}`);
