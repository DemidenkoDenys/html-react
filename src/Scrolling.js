window.onscroll = function(){
  var elementOnCenterScreen, activeTag, activeMenu;
  // если тег в центре окна не поменялся
  if(elementOnCenterScreen === undefined) console.log(elementOnCenterScreen);
  // selectMenu(elementOnCenterScreen, activeTag, activeMenu);
  if(elementOnCenterScreen !== document.elementFromPoint(document.documentElement.clientWidth / 2, document.documentElement.clientHeight / 2))
    elementOnCenterScreen = selectMenu(elementOnCenterScreen, activeTag, activeMenu);
}

function selectMenu(elementOnCenterScreen, activeTag, activeMenu){
  // дочерний элемент области тега в центре окна
  elementOnCenterScreen = document.elementFromPoint(document.documentElement.clientWidth / 2, document.documentElement.clientHeight / 2)
  // родительский div тега
  activeTag = document.getElementById(elementOnCenterScreen.dataset.parentid);
  // меню, которое соответствует тегу в центре окна
  activeMenu = document.getElementById('menu-'+activeTag.id);
  // прокрутка меню
  document.getElementById('menu').scrollTop = activeMenu.offsetTop - document.documentElement.clientHeight / 2.2;
  // фокусировка меню тега
  activeMenu.focus();

  return elementOnCenterScreen;
};
