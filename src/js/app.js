
const $ = (i) => document.querySelector(i);
const dropDownMenu = {
   elements: {
      dropDownMenuBtn: $('.header__drop-down-menu'),
      dropDownMenuActiveBtn: $('.drop-down-menu--active'),
      dropDownMenuUnactiveBtn: $('.drop-down-menu--unactive'),
      dropDownMenu: $('.header__nav')


   },
   onclickHandler: () => {
      let activeBtnDisplay = (dropDownMenu.elements.dropDownMenuActiveBtn.style.display === 'block') ? 'none' : 'block';
      dropDownMenu.elements.dropDownMenuActiveBtn.style.display = activeBtnDisplay;
      let unactiveBtnDisplay = (dropDownMenu.elements.dropDownMenuUnactiveBtn.style.display === 'none') ? 'flex' : 'none';
      dropDownMenu.elements.dropDownMenuUnactiveBtn.style.display = unactiveBtnDisplay;
      let dropDownMenuDisplay = (dropDownMenu.elements.dropDownMenu.style.display === 'block') ? 'none' : 'block';
      dropDownMenu.elements.dropDownMenu.style.display = dropDownMenuDisplay;


   }
}
dropDownMenu.elements.dropDownMenuBtn.addEventListener('click', dropDownMenu.onclickHandler)
