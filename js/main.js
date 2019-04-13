var menu = $('.menu');
var item = $('.menu-item');
var tab = $('.tab');

// 메인 메뉴의 하위 메뉴 제어를 위한 스크립트
menu.on('mouseout', function() {
  item.removeClass('menu-act');
});
item.on('mouseover focusin', function() {
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

// 공지사항 및 자료실 게시판 탭 메뉴 제어를 위한 스크립트
tab.on('click keyup', function(e) {
  e.preventDefault();
  if (e.keyCode === 13 || e.keyCode === 32 || e.type === 'click') {
    $(this).parent().siblings('.board-act').removeClass('board-act');
    $(this).parent().addClass('board-act');
  }
});
$('.board-tab').on('click keyup', function(e) {
  e.preventDefault();
  if (e.keyCode === 13 || e.keyCode === 32 || e.type === 'click') {
    $(this).siblings('.board-act').removeClass('board-act').attr('aria-selected', false);
    $(this).addClass('board-act').attr('aria-selected', true);
    $('.board3').find('.tabpanel-act').removeClass('tabpanel-act');
    $('#' + $(this).attr('aria-controls')).addClass('tabpanel-act');
  }
});

// 관련 사이트 목록 제어를 위한 스크립트
$('.related-list').on('mouseover focusin', function() {
  $(this).addClass('list-act');
}).on('mouseout focusout', function() {
  $(this).removeClass('list-act');
});