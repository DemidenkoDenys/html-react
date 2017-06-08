import $ from 'jquery';

$(window).scroll(function(){
  var elementOnCenterScreen;
  selectMenu(elementOnCenterScreen);
});

export function selectMenu(elementOnCenterScreen){
  var activeTag, activeMenu;

  // дочерний элемент области тега в центре окна
  elementOnCenterScreen = document.elementFromPoint(document.documentElement.clientWidth / 2, document.documentElement.clientHeight / 2);

  // родительский div тега
  activeTag = document.getElementById(elementOnCenterScreen.getAttribute('data-parentid'));

  if(activeTag !== null){
    // меню, которое соответствует тегу в центре окна
    activeMenu = document.getElementById('menu-'+activeTag.id);

    // прокрутка меню
    document.getElementById('menu').scrollTop = activeMenu.offsetTop - document.documentElement.clientHeight / 2.2;

    // фокусировка меню тега
    activeMenu.focus();

    paintTagMenuLine(activeMenu, activeTag);
  }
};

export function scrollToTag(tagWrapper){
  window.scrollTo(0, tagWrapper.offsetTop - document.documentElement.clientHeight / 2 + 100);
};

function paintTagMenuLine(menu, tag){

  var menuCaption = menu.getElementsByTagName('strong')[0];
  var tagCaption = tag.getElementsByTagName('h2')[0];

  var rightMenuCoordinate = $(menuCaption).offset().left + menuCaption.offsetWidth + 5;
  var topMenuCoordinate = $(menuCaption).offset().top - $(window).scrollTop() + $(menuCaption).height() / 3 + 10;

  var leftTagCoordinate = $(tagCaption).offset().left - 10;
  var topTagCoordinate = ($(tagCaption).offset().top - $(window).scrollTop()) > -15 ? ($(tagCaption).offset().top - $(window).scrollTop()) + 15 : -15;

  var line = $('#svgMenuTag').children()[0];
  line.setAttribute('x1', rightMenuCoordinate);
  line.setAttribute('y1', topMenuCoordinate);
  line.setAttribute('x2', leftTagCoordinate);
  line.setAttribute('y2', topTagCoordinate);
}
