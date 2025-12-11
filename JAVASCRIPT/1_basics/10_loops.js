/**
 * Loops
 *
 * 1) for
 * 2) while
 */

/**
 * for
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("-------------");

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("-------------");

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}
console.log("-------------");

// * 이용해서 6x6 정사각형 출력
let square = "";
let side = 6;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);
console.log("-------------");

/**
 * for ...in
 * array의 index 값을 가져옴
 */
const AhYeon = {
  name: "정아현",
  year: 2007,
  group: "베이비몬스터",
};
console.log("-------------");

for (let key in AhYeon) {
  console.log(key); // key 값을 받을 때
}

const babMembersArray = [
  "아현",
  "라미",
  "아사",
  "치키타",
  "로라",
  "파리타",
  "루카",
];
console.log("-------------");

for (let key in babMembersArray) {
  console.log(key);
  console.log(`${key}:${babMembersArray[key]}`); // index 값을 받을 때
}

/**
 * for ...of
 * array의 값을 가져옴
 */
for (let value of babMembersArray) {
  console.log(value);
}

/**
 * While
 */
let num = 0;

while (num < 10) {
  num++;
}
console.log(num);

/**
 * do...while
 * 잘 사용하지 않음(선임한테 뒷통수 맞을 수 있음)
 */
num = 0;

do {
  num++;
} while (num < 10);
console.log(num);
console.log("-------------");

/**
 * break
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("-------------");

num = 0;

while (num < 10) {
  if (num === 5) {
    break;
  }
  num++;
  console.log(num);
}
console.log("-------------");

/**
 * continue
 * 해당하는 조건을 skip하고 실행
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log("-------------");

num = 0;

while (num < 10) {
  num++;
  if (num === 5) {
    continue;
  }
  console.log(num);
}
