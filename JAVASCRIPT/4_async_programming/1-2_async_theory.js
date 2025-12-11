/**
 * Async theory
 */

// Sync Programming
function longWork() {
  const now = new Date();

  /**
   * milliseconds since epoch
   * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환
   */
  const milliseconds = now.getTime();
  const afterTwoSeconds = milliseconds + 2 * 1000;

  // 무조건 2초 지난 후 출력
  while (new Date().getTime() < afterTwoSeconds) {}
  console.log("완료");
}

console.log("Hello");
longWork();
console.log("World");

console.log("-------------------");

// Async Programming
function longWork() {
  setTimeout(() => {
    console.log("완료");
  }, 2000);
}
console.log("Hello");
longWork();
console.log("World");
