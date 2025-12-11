/**
 * Immutable Object
 */
const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin);

/**
 * Extensible
 *
 * 값 추가 불가 (Error를 던지지 않음)
 */
console.log(Object.isExtensible(yuJin)); //  고정값: true

yuJin["position"] = "vocal";
console.log(yuJin);

// PreventExtensions
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin["groupName"] = "아이브";
console.log(yuJin);
// 삭제는 가능
delete yuJin["position"];
console.log(yuJin);

console.log("-------------------");

/**
 * ⭑ Seal
 */
const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin2);

// 값 추가 불가 설정 (기본 값: false)
console.log(Object.isSealed(yuJin2));

// Seal
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2["groupName"] = "아이브";
console.log(yuJin2);

// 삭제도 불가
delete yuJin["name"];
console.log(yuJin2);

// configurable false로 변경과 같음
Object.defineProperty(yuJin2, "name", {
  value: "황선하",
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

console.log("-------------------");

/**
 * Freezed
 *
 * 읽기 외 나머지 기능 불가능
 */
const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(Object.isFrozen(yuJin3)); //  고정값 false

// Freeze
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

// 추가 불가
yuJin3["groupName"] = "아이브";
console.log(yuJin3);

// 삭제도 불가
delete yuJin["name"];
console.log(yuJin3);

// 값 변경 불가
// Object.defineProperty(yuJin3, "name", {
//   value: "황선하",
// });
console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));

console.log("-------------------");

const yuJin4 = {
  name: "안유진",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2003,
  },
};

Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); //  true
// 상위 오브젝트 freeze 해도 하위 오브젝트는 freeze 안됨
console.log(Object.isFrozen(yuJin4["wonYoung"])); //  false
