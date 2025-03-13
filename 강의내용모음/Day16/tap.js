// 한번에 구현할 생각 노노
// 첫번째 버튼 눌렀을때만 가정하자!

// 첫번째 버튼을 누르면 클래스이름에 orange부착

// + 설명 디브박스 보여줘야됨

// + 기존에 있던 orange제거 

// + 기존에 있던 show 제거
$('.tab-button').on('click', function(){
    const idx = $(this).index();
    
    // 모든 버튼과 콘텐츠에서 클래스 제거
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    
    // 클릭한 버튼과 콘텐츠에만 클래스 추가
    $('.tab-button').eq(idx).addClass('orange');
    $('.tab-content').eq(idx).addClass('show');
  });
  
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