/**
 * try...catch
 * Error를 잡을 때 사용
 *
 * 1) 발생시킬 때 -> 던진다고 함. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 함. (catch)
 */
function ruuner() {
  // try 안에 오류를 잡을 코드를 넣음
  try {
    console.log("Hello");

    // Error를 던지면 밑에 함수는 정지됨.
    throw new Error("문제가 생겼습니다.");

    console.log("Code Factory");
  } catch (e) {
    // 에러를 잡으면 바로 catch문 실행
    console.log("=== catch ===");
    console.log(e);
  } finally {
    //Error가 있던 없던 실행
    console.log("=== Finally ===");
  }
}
ruuner();
