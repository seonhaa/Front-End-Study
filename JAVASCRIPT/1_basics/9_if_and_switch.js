/**
 * If and Switch
 */

let num = 5;

if (num % 2 === 0) {
  console.log("num은 짝수이다");
} else if (num % 3 === 0) {
  console.log("num은 3의 배수이다");
} else {
  console.log("num은 홀수다");
}

const engDay = "saturday";

let korDay;

switch (engDay) {
  case "monday":
    korDay = "월요일";
    break; //  해당되는 값을 찾았으면 case문 탈출

  case "tuesday":
    korDay = "화요일";
    break;

  case "wednesday":
    korDay = "수요일";
    break;

  case "thursday":
    korDay = "목요일";
    break;

  case "friday":
    korDay = "금요일";
    break;

  default: //  case문 제외한 나머지 값일 경우
    korDay = "주말";
    break;
}
console.log(korDay);
