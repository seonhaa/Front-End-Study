/**
 * Class Keyword
 *
 * 객체지향 프로그래밍에서 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 틀
 * 정보를 일반화해서 정리하는 방법
 *
 * 클래스는 무조건 대문자로 시작
 */

// class IdolModel{                  // 틀을 정의
//     name = "안유진";               // 기본값 설정(옵션)
//     year = 2003;
// }

// const yuJin = new IdolModel();
// console.log(yuJin);

/**
 * constructor - 생성자
 * 파라미터를 받아 여러 인스턴스를 생성하고 싶을 때
 * 한번 틀을 만들면 반복해서 인스턴트를 계속 생성 가능
 */

class IdolModel {
  // name;                                     // 프로퍼티 (함수, 변수)
  // year;                                     // JS는 프로퍼티를 생략해도 가능하나 정의를 해놓는 습관이 좋음

  constructor(name, year) {
    // 외부에서 입력받은 파라미터
    this.name = name; // this는 현재 함수의 있는 name(틀) 의미, 뒤의 name은 입력받는 name(파라미터) 의미. name(틀): name(파라미터) 다.
    this.year = year;
  }

  sayName() {
    // method(함수) : 클래스 안에 함수를 정의
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}
const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
const gaeul = new IdolModel("가을", 2002);
console.log(gaeul);
const ray = new IdolModel("레이", 2004);
console.log(ray);
const wonYoung = new IdolModel("장원영", 2004);
console.log(wonYoung);
const liz = new IdolModel("리즈", 2004);
console.log(liz);
const eseo = new IdolModel("이서", 2007);
console.log(eseo);

console.log("---------------");

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log("---------------");

console.log(typeof IdolModel); // function: 즉, 클래스는 함수
console.log(typeof yuJin); // object: 클래스로 생성한 인스턴스는 오브젝트
