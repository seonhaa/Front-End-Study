/**
 * Using function to create objects
 */

// [1]
function IdolModel(name, year) {
  //  undefined가 출력될 때 (new 키워드를 사용하지 않았을 때)
  if (!new.target) {
    return new IdolModel(name, year);
  }
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
// console.log(yuJin.dance());
// new를 작성하지 않으면 undefined를 반환 - 하지마셈
const yuJin2 = IdolModel("안유진", 2003);
console.log(yuJin2);
// console.log(globalThis.name);

// new 키워드는 일반 함수에서만 사용 가능 ( 화실표 함수에서 불가 )
const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};
const yuJin3 = new IdolModelArrow("안유진", 2003);
