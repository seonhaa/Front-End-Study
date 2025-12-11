/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입
 *
 * 1)   Number
 * 2)   String
 * 3)   Boolean
 * 4)   undefined
 * 5)   null
 * 6)   Symbol
 *
 * 7)   Object
 *      Funcion
 *      Array
 *      Object
 */

// Number
const age = 24;
const temp = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temp);
console.log(typeof pi);
console.log("-----------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("-----------");

// String
const hwang = '"황"선하';
console.log(hwang);
console.log(typeof hwang);

const bab = "'베이비몬스터' 아현";
console.log(bab);
console.log("-----------");

/**
 *  Template Literal
 *
 *  Escaping Character
 *  1) newline  ->  \n
 *  2) tab      ->  \t
 *  3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력.
 */
const babahyeon = "베몬\n아현";
console.log(babahyeon);
const babAsa = "베몬\t아사";
console.log(babAsa);
const backSlash = "베몬\\백슬래시";
console.log(backSlash);
const smallQutoation = "베몬'황선하";
console.log(smallQutoation);

const babahyeon2 = `베몬 11 \\
아현`;
console.log(babahyeon2);

console.log(typeof babahyeon2);

const groupName = "베몬";
console.log(`${groupName} 아사`);
console.log(groupName + "아현");
console.log("-----------");

// Boolean 타입
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("-----------");

// undefined
let noInit;
console.log(noInit);
console.log(typeof noInit);

console.log("-----------");

// null
let init = null;
console.log(init);
console.log(typeof init);

console.log("-----------");

// Symbol   ->  유일무이한 값을 생성할 때 사용
const test1 = "1";
const test2 = "2";

console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2);

console.log("-----------");

/**
 * Object 타입
 *
 * Map
 * 키: 벨류의 쌍으로 이루어짐
 * key: value
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  blue: "파란색",
};
console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["blue"]);
console.log(typeof dictionary);

/**
 * Array 타입
 *
 * 값을 리스트로 나열 할 수 있는 타입
 */

const babMembersArray = [
  "아현",
  "라미",
  "아사",
  "치키타",
  "로라",
  "파리타",
  "루카",
];
console.log(babMembersArray);

/**
 * index
 *
 * 0부터 시작
 * 1씩 올라감
 */
console.log(babMembersArray[0]);

