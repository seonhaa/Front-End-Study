/**
 *
 * 변수(Variable) 선언하기
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
console.log("=== 1.스코프 차이 ===");

if(true){
    var a = "var이다.";
    let b = "let이다";
    const c = "const이다";
}

console.log("var a:",a);
// console.log("let b:", b); // ❌ 에러: b is not defined
// console.log("const c:", c); // ❌ 에러: c is not defined

console.log("\n=== 2.호이스팅 차이 ===");

console.log(hoistedVar);
var hoistedVar = "var로 선언됨"


console.log("\n=== 3. 재선언 가능 여부 ===");

var x = 10;
var x = 20;         // ✅ 가능
console.log("var x:", x);

let y = 10;
// let y = 20;      // ❌ 에러: Identifier 'y' has already been declared

const z = 10;
// const z = 20;    // ❌ 에러: Identifier 'z' has already been declared


console.log("\n=== 4. const는 값을 바꿀 수 없다 ===");

const pi = 3.14;
// pi = 3.14159;    // ❌ 에러: Assignment to constant variable
console.log("const pi:", pi);
