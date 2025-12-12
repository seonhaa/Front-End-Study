/**
 * ForEach
 *
 * Array 객체에서만 가용 가능한 메서드.
 * 새로운 배열을 만들지 않음.
 * map()과 비슷하지만 forEach는 return 값이 없음.
 *
 * forEach 사용처    
 *  •	콘솔 로그
	•	DOM 요소 스타일 변경
	•	상태 변경
	•	이벤트 리스너 붙이기
 */
const myArr = [1, 2, 3, 4, 5];

const newMyArr = myArr.forEach((value, index, array) => {
  console.log(`요소: ${value}`);
  console.log(`index: ${index}`);
  console.log(array);
});

console.log(newMyArr); // undefined

// 따라서 forEach 메서드는 변수에 할당하기 보다는
// 반복문, 조건문과 같이 바로 호출되는 것이 일반적

console.log("-------------------------");

myArr.forEach((value, index, array) => {
  console.log(`현재 요소: ${value}`);
  console.log(`index: ${index}`);
  console.log(array);
});

console.log("[0] -------------------------");

const number = [1, 2, 3];

number.forEach((x) => {
  console.log(x * 2);
});

console.log("[1] -------------------------");

const animals = ["강아지", "고양이", "햄스터", "거북이", "이구아나"];

animals.forEach((el, i) => {
  console.log(i);
  console.log(el);
  if (el === "거북이") {
    animals.shift();
  }
});
console.log(animals);

console.log("[2] -------------------------");

const fruits = ["apple", "banana", "mango"];

fruits.forEach((value, index) => {
  console.log(`${index + 1}: ${value}`);
});

console.log("[3] -------------------------");

// 각 사용자의 이름만 대문자로 변환하여 출력
const Aespa = [
  { name: "karina", age: 26 },
  { name: "winter", age: 25 },
  { name: "ningning", age: 24 },
  { name: "giselle", age: 26 },
];

Aespa.forEach((x) => console.log(x.name.toUpperCase()));

console.log("[4] -------------------------");

// 총합 출력
const numbers = [3, 7, 2, 9];
let sum = 0;

numbers.forEach((x) => {
  sum += x;
});
console.log(`총합은 ${sum}`);

// reduce 버전
const sum2 = numbers.reduce((p, n) => p + n, 0);
console.log(`총 합은 ${sum2}`);

console.log("[5] -------------------------");

/**
 * 각 문자열의 길이를 아래 형식처럼 출력하시오.
 * 
react → 5글자
frontend → 8글자
javascript → 10글자
*/
const words = ["react", "frontend", "javascript"];

words.forEach((x) => console.log(`${x} -> ${x.length}글자`));

console.log("[6] -------------------------");

// 짝수만 출력하기.
const numbers2 = [4, 7, 12, 9, 20, 3, 14];
let cnt = 0;
numbers2.forEach((x) => {
  if (x % 2 === 0) cnt++;
});
console.log(`짝 수 개수: ${cnt}`);
