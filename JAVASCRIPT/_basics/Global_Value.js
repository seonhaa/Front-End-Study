let x;
function f() {
  let y;
  x = 10;
  y = 25;
  z = 30;

  if (y > 20) {
    let b = 40;
    b++; // 1 증감
    console.log("if 블록내 블록변수 b = " + b);
  } else {
    let b = 25;
    b++; // 1 증감
    console.log("if 블록내 블록변수 b = " + b);
  }

  console.log("함수 f()내 지역변수 y = " + y);
}
f(); // 함수 f() 호출

console.log("전역변수 x = " + x);
console.log("전역변수 z = " + z);

  //if 블록내 블록변수 b = 41
    함수 f()내 지역변수 y = 25
    전역변수 x = 10
    전역변수 z = 30
