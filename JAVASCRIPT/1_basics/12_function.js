/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 변환받으려면 어떻게 해야 할까?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY
 *
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
  console.log((((2 * 10) / 2) % 3).toString());
}

//calculate();

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의 -> Parameter
 * 실제 입력하는 값 -> argument
 */
calculate(4); // 함수 실행
calculate(5);

function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 3);

function multiply(x, y = 10) {
  // 디폴트 값이 정해진 parameter
  console.log(x * y);
}

multiply(2);

console.log("---------------");

/**
 * 반환받기
 * return 받기
 */
function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(3, 5);
console.log(result2);

/**
 * Arrow 함수 (화살표 함수)
 */
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 6));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

console.log("---------------");

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));
// 이 둘은 같은 공식
function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}
console.log(multiply6(3)(5)(6));

console.log("---------------");

const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(4, 5));

console.log("---------------");

const multiplyThree = function (x, y, z) {
  console.log(arguments); //함수를 실행할 때 입력한 값을 순서대로 반환

  return x * y * z;
};
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...args) {
  // 무한으로 argument 받음
  return Object.values(args).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

//  immediately invoked function
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
// instanceof : 좌측 타입이 우측 타입이랑 같은지? (함수 = 오브젝트)
console.log(multiply instanceof Object);
