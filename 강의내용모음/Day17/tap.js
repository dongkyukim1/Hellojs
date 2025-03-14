// 한번에 구현할 생각 노노
// 첫번째 버튼 눌렀을때만 가정하자!

// 첫번째 버튼을 누르면 클래스이름에 orange부착

// + 설명 디브박스 보여줘야됨

// + 기존에 있던 orange제거 

// + 기존에 있던 show 제거
$('.tab-button').on('click', function(){
  var 버튼 = $('.tab-button');
  var 콘텐츠 = $('.tab-content');
  var index = $(this).index(); // 클릭한 버튼의 index 가져오기

  // 모든 버튼과 콘텐츠에서 클래스 제거 (for문 사용)
  for (let i = 0; i < 버튼.length; i++) {
    버튼.eq(i).removeClass('orange');
    콘텐츠.eq(i).removeClass('show');
  }

  // 클릭한 버튼과 콘텐츠에 클래스 추가
  버튼.eq(index).addClass('orange');
  콘텐츠.eq(index).addClass('show');
});


// $('.tab-button').on('click', function(){
//   const idx = $(this).index(); // 클릭한 버튼의 index 가져오기
//   var 버튼 = $('.tab-button');
//   버튼.removeClass('orange');
//   버튼.removeClass('show');

//   버튼.eq(idx).addClass('orange');
//   버튼.eq(idx).addClass('show');
// });

  
// document.getElementsByClassName('tab-button')[0].addEventListener('click',function(){
//     document.getElementsByClassName('tab-button')[0].classList.add('orange');
//     document.getElementsByClassName('tab-content')[0].classList.add('show');
//     document.getElementsByClassName('tab-content')[1].classList.remove('show');
//     document.getElementsByClassName('tab-button')[1].classList.remove('orange');
//     document.getElementsByClassName('tab-content')[2].classList.remove('show');
//     document.getElementsByClassName('tab-button')[2].classList.remove('orange');
// })
// document.getElementsByClassName('tab-button')[1].addEventListener('click',function(){
//     document.getElementsByClassName('tab-button')[1].classList.add('orange');
//     document.getElementsByClassName('tab-content')[1].classList.add('show');
//     document.getElementsByClassName('tab-content')[0].classList.remove('show');
//     document.getElementsByClassName('tab-button')[0].classList.remove('orange');
//     document.getElementsByClassName('tab-content')[2].classList.remove('show');
//     document.getElementsByClassName('tab-button')[2].classList.remove('orange');
// })
// document.getElementsByClassName('tab-button')[2].addEventListener('click',function(){
//     document.getElementsByClassName('tab-button')[2].classList.add('orange');
//     document.getElementsByClassName('tab-content')[2].classList.add('show');
//     document.getElementsByClassName('tab-content')[0].classList.remove('show');
//     document.getElementsByClassName('tab-button')[0].classList.remove('orange');
//     document.getElementsByClassName('tab-content')[1].classList.remove('show');
//     document.getElementsByClassName('tab-button')[1].classList.remove('orange');
// })