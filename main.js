const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});


/* 버튼을 눌렀을때 효과를 주려고 자바스크립트를 넣었는데 bug가 걸림.. */
/* 액션버튼 위에 점을 없애려고 했으나 해결방법을 찾지못해 bug가 걸림.. */

/* 2021.01.04 ~ 2021.01.29 유튜브따라만들어보기 25일 정태프로젝트 */