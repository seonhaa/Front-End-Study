/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString(); // 숫자 -> 문자 타입 변환
console.log(typeof stringAge, stringAge);

// 암묵적: 기능적으로는 가능하나 헷갈리기 때문에 사용 X
let test = age + ""; // 숫자 -> 문자 타입 자동 변환(숫자 + 글자 -> 문자열)
console.log(typeof test, test);

console.log("98" + 2); // 어느 한쪽으로 타입을 변환해야 하기때문에
console.log("98" * 2); // 문자에는 곱한다의 개념이 없어서 숫자로 변환
console.log("98" - 2);

console.log("---------------");

/**
 * 명시적 변환
 */
console.log(typeof (99).toString());
console.log(typeof true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

//  숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0")); //  정수 변환(소수점 표시 x)
console.log(typeof parseFloat("0.99"), parseFloat("0.99")); // 실수 변환(소수점 표시)
console.log(typeof +"1", +"1");

console.log("---------------");

/**
 * Boolean 타입 변환: 실무에서 많이 사용
 * string 값 안에 어떤 값이든 들어있으면 Boolean 기준에서는 true 로 인식
 * 외우기
 */
console.log(!!"x"); //  true
console.log(!"x"); //  false
console.log(!!""); //  값 x: false

console.log(!!0); //  false
console.log(!!"0"); //  true: string으로 인식
console.log(!!"false");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

// Obhect, Array: 무조건 true 반환
console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false 반환
 */