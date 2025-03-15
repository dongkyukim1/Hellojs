// 탭기능 다르게 만들기 
// -> 이벤트리스너 1개만 만들기
// 성능적 이점

// 탭 열기 함수
function 탭열기(idx) {
    // 모든 탭 버튼/콘텐츠의 활성화 클래스 제거
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
  
    // idx번째 탭 버튼/콘텐츠만 활성화
    $('.tab-button').eq(idx).addClass('orange');
    $('.tab-content').eq(idx).addClass('show');
  }
  
  // 부모 요소 .list에 이벤트 리스너 1개만 달기
  $('.list').on('click', '.tab-button', function() {
    // 현재 클릭된 .tab-button의 인덱스를 구해 함수에 전달
    탭열기($(this).index());
  });
  

// documenet.querySelector('.black-bg').addEventListener('click',function(e){ 
//     e만넣으면 가능한 함수들
//     e.target // 유저가 실제로 누른것만 작동
//     e.currentTarget // 이벤트리스너 달린곳 == this;
//     e.preventDefault(); // 이벤트 기본동작을 막아줌(submit 이나 클릭처럼) 
//     e.stopPropagation(); // 내상위요소로 이벤트 버블링을 막아줌
//     return  })