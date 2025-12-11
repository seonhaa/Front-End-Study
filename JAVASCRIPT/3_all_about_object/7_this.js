/**
 * this
 *
 * JS는 Lexical Scope를 사용하기 때문에
 * 함수의 상위 스코프가 정의 시점에 평가된다.
 *
 * ***** 하지만 this 키워드는 객체가 생성되는 시점에 결정됨. *****
 */
const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  },
};

console.log(yuJin.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}

const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function () {
  // [1]상황: global 객체가 없음
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }
  return dance2();
};

console.log(yuJin2.dance());

/**
 * this가 어떤 걸 가르키는지 3가지
 *
 * [1] 일반 함수 호출할 땐 this가 최상위 객체를 가리킴(global, window)
 * [2] method로 호출할 땐 호출된 객체를 가리킴
 * [3] new 를 사용해서 객체를 생성했을 땐 객체를 가리킴.
 */

/**
 * [1] apply()  ->  아규먼트를 리스트로 입력해야 함./ 실행하는 순간 바로 계산
 * [2] call()   ->  , 를 기반으로 파라미터를 순서대로 넘김 / 실행하는 순간 바로 계산
 * [3] bind()   ->  this를 바인딩 후 나중에 실행 가능
 */
function returnName() {
  return this.name;
}
console.log(returnName());

const yuJin3 = {
  name: "안유진",
};
// yuJin3에
console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

console.log("-------------------------");

// call & apply

function multiply(x, y, z) {
  return `${this.name} / 결과값: ${x * y * z}`;
}
//call
console.log(multiply.call(yuJin3, 3, 4, 5));
//apply
console.log(multiply.apply(yuJin3, [3, 4, 5]));

//bind
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc); // 저장
console.log(laterFunc()); // 실행
