/**
 * Callback
 */
function waitAndRun() {
  setTimeout(
    // 특정 작업이 끝나고 다시 불리는 함수: Callback()
    () => {
      console.log("End");
    },
    2000
  );
}
// waitAndRun();

function waitAndRun2() {
  setTimeout(() => {
    console.log("1. Callback End");
    setTimeout(() => {
      console.log("2. Callback End");
    }, 2000);
  }, 2000);
}
// waitAndRun2();

/**
 * Promise
 * Callback 단점 극복
 * 가독성이 좋음
 */
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    /**
     *  if(xxx){
     *      resolve("Success")
     *  }else{
     *      reject("Error")
     *  }
     */
    resolve("완료");
  }, 2000);
});
// timeoutPromise.then((res) => {
//   console.log("---then---");
//   console.log(res);
// });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    // resolve는 값 출력 => then.
    // reject는 error를 던질 때 사용 => catch.
    setTimeout(() => {
      resolve("에러");
    }, seconds * 1000);
  });

// getPromise(3)
//   .then((res) => {
//     console.log("--- First then ---");
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("--- First catch ---");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("--- Finally ---");
//   });

// 여러 개의 promise 출력
//동시에 부를 경우 가장 느린 함수 기준으로 then 또는 catch가 불린다 (4초)
Promise.all([getPromise(1), getPromise(2), getPromise(4)]).then((res) => {
  console.log(res);
});
