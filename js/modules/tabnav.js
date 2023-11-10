export default class TabNav {
  constructor (menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  activeTab (index) {
    this.tabContent.forEach(section => {
      section.classList.remove('ativo')
    })
    const direcao = this.tabContent[index].dataset.anime
    this.tabContent[index].classList.add(this.activeClass, direcao)
  }constructor (tabs, tabContent) {
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
