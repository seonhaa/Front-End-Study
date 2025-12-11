//⭑ reduce(): 누적값을 반환

/**
 * 초기 값 0 p에 입력
 * nums array 첫 번째 값 1 n에 입력
 * p + n => 0 + 1 = 1이 다시 p로 입력
 * array 두 번째 값 3 n에 입력
 * p + n => 1 + 3 = 4 다시 p 입력 ...
 * .
 * .
 * 결과값: 83 출력
 */
nums = [1, 3, 7, 8, 54, 10];
console.log(nums.reduce((p, n) => p + n, 0));

/**
 * Quiz 1
 
let result = 0;

for (let i = 0; i < nums.length; i++) {
    result += nums[i] * 2;
    }
    
    console.log(result);   // 30
    
    위 for문을 **reduce()**로 완전히 같은 동작을 하도록 바꿔라.
    */
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((p, n) => p + n * 2, 0));

/**
 * Quiz 2: array의 짝수만 더하기
 * 
 * const numbers = [3, 8, 11, 2, 5, 10];

let result = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {   // 짝수만
    result += numbers[i];
  }
}

console.log(result);  // 20
// 8 + 2 + 10 = 20
 */
const Numbers = [3, 8, 11, 2, 5, 10];
console.log(
  Numbers.reduce((p, n) => {
    if (n % 2 === 0) {
      return p + n;
    }
    return p;
  }, 0)
);

/**
 * reduce는 p(누적값)과 n(현재 요소)을 받아서
 * 조건에 따라 p를 업데이트하거나 그대로 유지하며
 * 마지막에 p를 반환한다.
 */
