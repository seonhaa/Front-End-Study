/**
 * Object   /   객체
 * javascript의 대부분은 객체
 */

// key: value 쌍
let ahyeon = {
  name: "정아현",
  group: "베이비 몬스터",
  dance: function () {
    return `${this.name}이 춤을 춥니다.`; // this -> 정의되어있는 객체를 가리킴
  },
};

console.log(ahyeon);
console.log(ahyeon.name);
console.log(ahyeon["name"]);

const key = "name";
console.log(ahyeon[key]);

console.log(ahyeon.dance());

const nameKey = "name";
const nameValue = "정아현";

const groupKey = "group";
const groupValue = "베이비몬스터";

const ahyeon2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};
console.log(ahyeon2);
console.log(ahyeon2.dance());

ahyeon2["name"] = "황선하";
console.log(ahyeon2);

// 존재하지 않는 key를 쓰면 자동 생성됨.
ahyeon2["englishName"] = "Jung Ahyeon";
console.log(ahyeon2);

delete ahyeon2["englishName"];
console.log(ahyeon2);

/**
 * 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체 변경 x
 * 2) 객체 안의 프로퍼티나 메서드는 변경 o
 */

const Asa = {
  name: "아사",
  group: "베이비몬스터",
};
console.log(Asa);

// Asa = {};    const로 선언되어서 값 변경 불가

Asa["group"] = "코드팩토리";
console.log(Asa);

/**
 * 모든 key 값 다 가져오기
 */
console.log(Object.keys(Asa));

/**
 * 모든 value 값 가져오기
 */
console.log(Object.values(Asa));

const name = "정아현";

const ahyeon3 = {
  // key와 value 값이 동일하면 생략 가능
  name,
};
console.log(ahyeon3);
