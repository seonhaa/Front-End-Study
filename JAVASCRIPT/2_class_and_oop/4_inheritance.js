/**
 * Inheritence  (상속)
 * 
 * 객체들 간의 관계를 구축하는 방법
 * 수퍼클래스, 부모 클래스 등의 기존의 클래스부터 속성과 동작을 상속 받을 수 있음
 * 
 * FemaleIdolModel             MaleIdolModel
        name,                       name,
        year,                       year,
        dance()                     sing()


                <공통되는 데이터 정리>

            (부모/슈퍼 클래스 parent/super class)
                        IdolModel
                        name, year

(자식 클래스 child class)           (자식 클래스 child class)
    FemaleIdolModel                 MaleIdolModel
        dance()                         sing()
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
/**
 * 상속을 받으면 constructor도 상속 받음
 * 따로 작성 x
 */

class FemaleIdolModel extends IdolModel {
  dance() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `${this.name}이 노래를 부릅니다.`;
  }
}

const yuJin = new FemaleIdolModel("안유진", 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel("지민", 1995);
console.log(jiMin);

console.log("----------------------------");

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

// console.log(yuJin.sing());       오류
// console.log(jiMin.dance());      오류

console.log("----------------------------");

const hwang = new IdolModel("황선하", 2002);
console.log(hwang);

console.log(hwang.name);
// console.log(hwang.dance());      오류: 자식이 부모에게 상속x

console.log("----------------------------");

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
// 자식 클래스는 서로 아무런 관계 없음
console.log(yuJin instanceof MaleIdolModel);

console.log("----------------------------");

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log("----------------------------");

console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);
