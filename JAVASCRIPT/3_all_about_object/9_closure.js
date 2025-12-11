/**
 * Closure
 *
 * "closure는 어떤 함수와 해당 함수가 선언된 Lexical 환경의 조합"
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 Closure"
 */

function getNum() {
  var num = 5;

  function innerGetNum() {
    return num;
  }
  return innerGetNum();
}

// console.log(num);
// console.log(getNum());

// Closure
function getNum() {
  var num = 5;

  function innerGetNum() {
    return num;
  }
  return innerGetNum; // 함수 자체 반환 (실행 x)
}

const runner = getNum();

console.log(runner);
console.log(runner());

console.log("--------------");

/**
 * [1] 데이터 캐싱
 */
function cacheFunction() {
  // 아래 계산이 오래걸린다 가정
  var num = 10 * 10;

  function innerCacheFunction(newNumb) {
    return num * newNumb;
  }

  return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

console.log("--------------");

/**
 * 2) 데이터 캐싱
 * 반복적으로 특정 값을 변경할 때
 */
function cacheFunction2() {
  var num = 99;

  function increment() {
    num++;
    return num;
  }

  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

console.log("--------------");

/**
 * 3) 정보 은닉
 */
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNameAndYear()); //변수로 선언해도 출력됨

console.log(yuJin.name);
console.log(yuJin._year); //존재하지 않는 값(this로 선언하지 않아서)
