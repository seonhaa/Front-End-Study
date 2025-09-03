// 문서 내의 첫 번째 h1 태그를 찾아 selected에 반환
const selected = document.querySelector('h1')
selected.style.color = 'blue'
// class는 .클래스명
const selected = document.querySelector('.h2')
// id는 #id명
const selected = document.querySelector('#h3')
// 복합태그 이름
const selected = document.querySelector('div span')
// div 안 다른 태그 접근: first-child, last-child, nth-child
const selected = document.querySelector('div span: nth-child(2)')
