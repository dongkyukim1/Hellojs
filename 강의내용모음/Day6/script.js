$(document).ready(function(){

    // 모달 열기 (open-modal 버튼 클릭 시 실행)
    $('.open-modal').on('click', function(){
        $('.modal-bg').fadeIn();
    });

    // 모달 닫기 (close-modal 버튼 클릭 시 실행)
    $('.close-modal').on('click', function(){
        $('.modal-bg').fadeOut();
    });

    // 모달 바깥 배경 클릭 시 닫기
    $('.modal-bg').on('click', function(event){
        if (event.target === this) {
            $('.modal-bg').fadeOut();
        }
    });

});
