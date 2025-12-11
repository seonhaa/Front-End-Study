/**
 * Async / Await
 *
 * await는 promise에만 사용 가능
 */
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료");
      //   reject("에러");
    }, seconds * 1000);
  });

async function runner() {
  try {
    const result1 = await getPromise(1);
    console.log(result1);
  } catch (e) {
    console.log("--- catch ---");

    console.log(e);
  } finally {
    console.log("--- finally ---");
  }
}
runner();
