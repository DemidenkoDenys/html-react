window.onscroll = function(){
  var elementOnCenterScreen;
  selectMenu(elementOnCenterScreen);
}

export function selectMenu(elementOnCenterScreen){
  var activeTag, activeMenu;

  // дочерний элемент области тега в центре окна
  // if(elementOnCenterScreen === undefined)
  elementOnCenterScreen = document.elementFromPoint(document.documentElement.clientWidth / 2, document.documentElement.clientHeight / 2);

  // родительский div тега
  activeTag = document.getElementById(elementOnCenterScreen.dataset.parentid);

  // меню, которое соответствует тегу в центре окна
  activeMenu = document.getElementById('menu-'+activeTag.id);

  // прокрутка меню
  document.getElementById('menu').scrollTop = activeMenu.offsetTop - document.documentElement.clientHeight / 2.2;

  // фокусировка меню тега
  activeMenu.focus();

  paintTagMenuLine(activeMenu, activeTag);
};

export function scrollToTag(tagWrapper){
  window.scrollTo(0, tagWrapper.offsetTop - document.documentElement.clientHeight / 2 + 100);
};

function paintTagMenuLine(menu, tag){
  // console.log(document.getElementById('svgMenuTag').children[0]);
  var menuCaption = menu.getElementsByTagName('strong')[0];
  var tagCaption = tag.getElementsByTagName('h2')[0];

  var rightMenuCoordinate = menuCaption.getBoundingClientRect().right + 5;
  var topMenuCoordinate = menuCaption.getBoundingClientRect().top + menuCaption.clientHeight / 3 + 10;

  var leftTagCoordinate = tagCaption.getBoundingClientRect().left - 10;
  var topTagCoordinate = tagCaption.getBoundingClientRect().top > -15 ? tagCaption.getBoundingClientRect().top + 15 : -15;
  // console.log();
  document.getElementById('svgMenuTag').children[0].setAttribute('x1', rightMenuCoordinate);
  document.getElementById('svgMenuTag').children[0].setAttribute('y1', topMenuCoordinate);
  document.getElementById('svgMenuTag').children[0].setAttribute('x2', leftTagCoordinate);
  document.getElementById('svgMenuTag').children[0].setAttribute('y2', topTagCoordinate);
}
