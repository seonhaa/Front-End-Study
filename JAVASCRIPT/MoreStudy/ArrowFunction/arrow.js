/**
 * Arrow()
 */

// 기존 함수
function rename(a) {
  return a + 100;
}
console.log(rename(10)); // 110

// 1. "function"을 제거하고 인자와 대괄호 사이에 화살표 배치
(a) => {
  return a + 100;
};

// 2. return 제거
(a) => {
  a + 100;
};

console.log("---------------------");

// [1] 화살표 함수엔 this가 없다.

var name = "Global";

let user1 = {
  name: "Inpa",
  sayHi: function () {
    // 일반 함수
    console.log(this.name);
  },
};

user1.sayHi(); // Inpa

var name = "Global";

let user2 = {
  name: "Inpa",
  sayHi: () => {
    // 화살표 함수
    console.log(this.name);
  },
};

user2.sayHi(); // Global

console.log("---------------------");

const material = [1, 3, 5, 6, 7];
console.log(material.map((x) => x));

const add = (x, y) => x + y;
console.log(add(1, 2));

const hello = () => {
  console.log("Hello");
  console.log("World");
};
hello();

console.log("[1] ---------------------");

let sum = (a, b) => a + b;
let print = (a) => a;

console.log(sum(10, 20));
console.log(print("안녕하세요"));

console.log("[2] ---------------------");

// map, 화살표 함수: 제곱 배열 만들기
const arr1 = [1, 4, 7, 10];

console.log(arr1.map((x) => x * x));

console.log("[3] ---------------------");

// filter, 화살표 함수: 성인 나이만 골라내기
const users3 = [
  { name: "A", age: 15 },
  { name: "B", age: 22 },
  { name: "C", age: 17 },
  { name: "D", age: 30 },
];

console.log(
  users3.filter((x) => {
    if (x.age >= 20) return x;
  })
);

console.log("[4] ---------------------");

// reduce, 화살표 함수: 홀수만 더한 값 구하기
const nums = [3, 8, 11, 2, 5];

console.log(
  nums.reduce((p, n) => {
    if (n % 2 != 0) {
      return p + n;
    }
    return p;
  }, 0)
);

console.log("[5] ---------------------");

// map, filter, reduce, 화살표 함수
// 짝수만 골라서 3배 만들고 전체 합계 구하기
const scores = [2, 5, 8, 11, 14];

const allAdd = scores
  .filter((x) => {
    if (x % 2 === 0) return x;
  })
  .map((x) => x * 3)
  .reduce((p, n) => p + n, 0);
console.log(allAdd);

console.log("[6] ---------------------");

// 나이 오름차순 정렬, 이름만 뽑아 새로운 배열, 대문자 전환
const users4 = [
  { name: "karina", age: 26 },
  { name: "winter", age: 25 },
  { name: "giselle", age: 26 },
  { name: "ningning", age: 24 },
];

const Aespa = users4
  .sort((a, b) => {
    return a > b ? 1 : -1;
  })
  .map((x) => x.name.toUpperCase());

// const Aespa = users4
//   .sort((a, b) => a.age - b.age)
//   .map((x) => x.name.toUpperCase());
console.log(Aespa);

console.log("[7] ---------------------");

// 콘솔로 즉시 출력
const num3 = [5, 10, 3, 8];
console.log(num3.reduce((p, n) => p + n, 0) / 4);

console.log("[8] ---------------------");

// reduce, 화살표 함수로 category별 그룹 만들기
const products = [
  { name: "apple", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "cola", category: "drink" },
  { name: "water", category: "drink" },
];

const result2 = products.reduce((p, n) => {
  const { category } = n;
  if (p[category]) p[category].push(n);
  else p[category] = [n];
  return p;
}, {});
console.log(result2);

console.log("[9] ---------------------");
/**
 *  type에 따라 그룹화를 하므로 curr의 type값을 가져온다.
 *  그 다음, acc에 type에 해당하는 값이 있으면 현재 요소의 값을 추가한다.
    만약, acc에 type에 해당하는 값이 없으면 []로 감싸서 curr을 추가한다.
    누적된 acc를 리턴해줘야 결과값을 사용할 수 있다.
    acc은 객체형태가 되어야 하므로 초기값은 {}로 선언한다.
 */

// reduce, 화살표 함수로 category별 그룹 만들기
const animals = [
  { name: "lala", type: "cat" },
  { name: "puma", type: "cat" },
  { name: "popo", type: "dog" },
  { name: "zaza", type: "fish" },
];

const result3 = animals.reduce((p, n) => {
  const { type } = n;
  if (p[type]) p[type].push(n);
  else p[type] = [n];
  return p;
}, {});
console.log(result3);
