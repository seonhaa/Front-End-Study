/**
 * Array Functions
 */

let babMembers = ["아현", "라미", "아사", "치키타", "로라", "파리타", "루카"];
console.log(babMembers);

// Push(): 새로운 값 배열 맨 뒤에 추가, 배열의 길이 반환
console.log(babMembers.push("황선하"));
console.log(babMembers);

console.log("---------------");

// pop(): 마지막 element 삭제, 삭제한 element 반환
console.log(babMembers.pop());
console.log(babMembers);

console.log("---------------");

// shift(): 맨 처음 element 삭제, 삭제한 element 반환
console.log(babMembers.shift());
console.log(babMembers);

// unshift(): 맨 처음에 element 추가, 배열의 길이 반환
console.log(babMembers.unshift("아현"));
console.log(babMembers);

// splice: index 설정 후 삭제
console.log(babMembers.splice(0, 3));
console.log(babMembers);

/**
 * 변경되지 않는 값을 사용하는 것이 추세이므로
 * 위 함수들은 사용하지 않는 것을 권장
 */

console.log("---------------");

babMembers = ["아현", "라미", "아사", "치키타", "로라", "파리타", "루카"];

// concat(): Array를 새로 만들어 반환 -> push()와 다른 점
console.log(babMembers.concat("황선하"));
console.log(babMembers);

// slice(): Array를 새로 만들어 반환 -> splice()와 다른 점
// 몇번째부터 삭제할지, 몇개를 삭제할지
console.log(babMembers.slice(0, 3));
console.log(babMembers);

// spread operator: (...)배열 안에 배열을 저장
let babMembers2 = [...babMembers];
console.log(babMembers2);

// ...을 사용하지 않을 경우 (spread x) -> 배열 안에 배열이 됨
let babMembers3 = [babMembers];
console.log(babMembers3);

console.log("---------------");

let babMembers4 = babMembers;
console.log(babMembers4);
console.log(babMembers4 === babMembers);

// 두 객체는 겉으로 값이 같아 보여도 서로 다른 메모리 주소
// console.log([...babMembers] === babMembers);

console.log("---------------");

//⭑ join(): 배열의 요소들을 하나의 String로 결합
console.log(babMembers.join());
console.log(babMembers.join("/"));
console.log(babMembers.join(", "));

console.log("---------------");

//⭑ sort()
// 오름차순
babMembers.sort();
console.log(babMembers);
// 내림차순
console.log(babMembers.reverse());

let nums = [1, 9, 7, 5, 3];
console.log(nums);

// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면(뒤에 두려면) 0보다 큰 숫자 반환
// 2) a를 b보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자 반환
// 3) 원래 순서를 그대로 두려면 0 반환

//오름차순
nums.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(nums);

// 내림차순
nums.sort((a, b) => (a > b ? -1 : 1));
console.log(nums);

console.log("[map] ---------------");

//⭑ map(): 모든 값을 순회하면 각 값들을 변형
// Array를 새로 만들어 반환
console.log(babMembers.map((x) => x));
console.log(babMembers.map((x) => `베몬: ${x}`));

console.log(
  babMembers.map((x) => {
    if (x === "아현") {
      return `베몬: ${x}`;
    } else {
      return x;
    }
  })
);

console.log("---------------");

//⭑ filter(): 순환하면서 true - 반환, false - 반환 x
// 모든 elements 찾는 기능들
nums = [1, 3, 7, 8, 54, 10];

// console.log(nums.filter((x) => true));
// console.log(nums.filter((x) => false));  false면 배열에 아무것도 없음
console.log(nums.filter((x) => x % 2 === 0));

console.log("---------------");

// find(): filter()와 같이 true - 반환, false - 반환 x
// filter()와 차이점: 처음 element만 반환
console.log(nums.find((x) => x % 2 === 0));

// findIndex(): find()와 같지만 index를 반환
console.log(nums.findIndex((x) => x % 2 === 0));

console.log("---------------");
