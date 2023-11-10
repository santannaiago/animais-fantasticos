export default class TabNav {
  constructor (tabs, tabContent) {
    this.tabs = document.querySelectorAll(tabs); //'[data-tab="menu"] li'
    this.tabContent = document.querySelectorAll(tabContent); //'[data-tab="content"] section'
    this.activeTab();
  }

  activeTab () {
    this.tabs.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.tabs.forEach((item) => {
          item.classList.remove('ativo');
        });
        item.classList.add('ativo');
        this.tabsContent.forEach((item) => {
          item.classList.remove('ativo');
        });
        this.tabsContent[index].classList.add('ativo');
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add('ativo');
      this.tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index);
        });
      });
    }
  }

}
