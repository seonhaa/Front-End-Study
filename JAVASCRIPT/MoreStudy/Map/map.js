/**
 * map()
 *
 * 어떤 배열 안에 있는 모든 요소의 값을 변경하여 새로운 배열을 만들 때 사용.
 * Array.map() 메소드는 특정 숫자를 곱하거나,
 * 애플리케이션에 필요한 다른 작업을 수행하는 등 요소에 어떤 변경 사항을 적용하는 데 사용
 * 
 *  숫자 배열을 제곱한 새 배열 만들기
    문자열 배열을 모두 소문자로 바꾸기
    객체 배열에서 특정 속성만 추출하기
    기존 배열을 가공하여 UI 컴포넌트로 변환하기(예: React의 JSX 렌더링)
 * 
 */

console.log("[1] -----------------");

let arr = [1, 3, 5];

// 반복문
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 3;
}
console.log(arr);

// map 함수
let multiply = arr.map(function (sum) {
  return sum * 3;
});
console.log(multiply);

console.log("[2] -----------------");

let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

// 기존 배열을 받아옴
console.log(users.map((x) => x));

// 이름 붙히기
let fullName = users.map(function (element) {
  return `${element.firstName} ${element.lastName}`;
});
console.log(fullName);

console.log("[3] -----------------");

/**
 * 구문
 * 
 * arr.map(function(currentValue, index, array) {
     변환(mapping)할 로직: 변환된 결과를 반환해야 합니다.
    }[, thisArg]);


 * 
 */

let arr2 = [2, 3, 5, 7];

arr2.map(function (currentValue, index, array) {
  console.log(this);
}, 80); //  thisArg: 80

arr2.map(function (currentValue, index, array) {
  console.log(currentValue);
  console.log(index);
  console.log(array);
  return currentValue;
}, 80);

console.log("[4] ------------------");

// [3] case 는 거의 안 씁
let obj = {
  threshold: 5,
};

[3, 10, 7].map(function (x) {
  return x > this.threshold;
}, obj);

// 화살표 함수로 대체
let threshold = 5;

console.log([3, 10, 7].map((x) => x > threshold));

console.log("[5] -------------------");

// 배열 요소의 소문자 & 대문자 변환
const fruits = ["Apple", "Banana", "Strawberry"];

const changeFruits1 = fruits.map(function (fruit) {
  return fruit.toLowerCase(); // 문자열을 소문자로 변환
});
console.log(changeFruits1);

const changeFruits2 = fruits.map(function (fruit) {
  return fruit.toUpperCase(); // 문자열을 대문자로 변환
});
console.log(changeFruits2);

console.log("[6] -------------------");

// 배열 요소의 조건에 따른 값 대체

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let defineNum = nums.map(function (elements) {
  if (elements % 2 === 0) {
    return "짝수";
  } else {
    return "홀수";
  }
});
console.log(defineNum);

// 바로 console.log로 출력
console.log(
  nums.map(function (element) {
    if (element % 2 === 0) {
      return "짝수";
    } else {
      return "홀수";
    }
  })
);

console.log("[7] -------------------");

/**
 * 실무에서 map을 쓰는 이유
 */

/* [1]
 * 원본 배열 변경 x
 * 새로운 배열을 생성하기 때문
 *
 * -> 불변성을 지킬 수 있다 (*** React에서 매우 중요 ***)
 */

// bad
arr.map((x) => (x = x * 2));

// good
arr.map((x) => x * 2);

// [2] map은 항상 반환(return)이 있어야 함.
arr.map((x) => {
  x * 2; //return 없음 -> undefined 반환
});

/**
 * [3] ** 객체 배열 가공이 실무에서 가장 많이 쓰임 **
 *
 * 백엔드 -> 프론트 통신 데이터 가공
 */
// 특정 값만 추출 (API 응답 가공)
const members = [
  { id: 1, name: "카리나", age: 26 },
  { id: 2, name: "윈터", age: 25 },
  { id: 3, name: "지젤", age: 26 },
  { id: 5, name: "닝닝", age: 24 },
];

const names = members.map((x) => x.name);
console.log(names);
const ages = members.map((x) => x.age);
console.log(ages);

// 객체형태 변환
const result1 = members.map((x) => ({
  userId: x.id,
  userName: x.name.toUpperCase(),
}));

console.log("[8] -------------------");

// [4] map + index 조합 (리스트 렌더링에서 필수)

// items.map((item, index) => <li key={index}>{item}</li>);
// 위 코드는 React에서 100% 보임
// index는 "키 값 생성" 등에 자주 사용됨.

// [5] map 조건부 변환
const status = [200, 500, 404];

const messages = status.map((x) => {
  if (x === 200) {
    return "Connect";
  } else if (x === 500) {
    return "Sever Error";
  } else {
    return "Unkown";
  }
});
console.log(messages);

/* [6] map + filter + reduce (실무 핵심 패턴)
 *   map으로 변환 후 filter로 걸러내기
 */

const nums2 = [1, 2, 3, 4, 5, 6];

const evenDoubled = nums2.map((x) => x * 2).filter((x) => x % 4 === 0);
console.log(evenDoubled);

console.log("[9] -------------------");

// [7] map은 undefined를 반환해도 배열의 길이는 그대로임.
const n = [1, 2, 3].map((x) => {
  if (x % 2 === 0) return x;
});
// .filter((x) => {
//   if (x % 2 === 0) return x;
// }); -> filter 사용 [2]
console.log(n);
// [ undefined, 2, undefined ]

// [8] *** 깊은 복사 주의 ***
// {...} 스프레드 처리 해야 함
const newArr = users.map((u) => ({ ...u }));

console.log("[10] -------------------");

// [9] async/await 와 map은 잘 안 맞음

await arr3.map(async (x) => {
  return await fetch(x);
});
// ❌ map은 async 동작을 기다려주지 않음. (⬇️ 해결책)
await Promise.all(arr.map(async (x) => fetch(x)));

console.log("[11] -------------------");

// [11] 반드시 "배열을 반환할 때" 만 사용 해야 함
arr.map((x) => console.log(x)); // ❌ 목적이 변환이 아님
arr.forEach((x) => console.log(x)); // ✅

// [12] React에서 UI 렌더링의 핵심
const list = users.map((user) => <UserCard key={user.id} {...user} />);
