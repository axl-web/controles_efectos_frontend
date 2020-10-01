class IndexForSiblings{
    static get(el){
      let children = el.parentNode.children;
  
      for (var i = 0; i < children.length; i++) {
        let child = children[i];
        if(child == el) return i;
      }
    }
  }

class TabManager{
    constructor(selector_tabs,control_selector,indicator_selctor){
        this.tabs = document.querySelector(selector_tabs);
        this.controls = document.querySelectorAll(control_selector);
        this.indicator = document.querySelector(indicator_selctor);
        this.handleClick = this.handleClick.bind(this)
        this.setIndicatorWidth();
        this.bindEvents();
    }

    setIndicatorWidth(){
        this.indicator.style.width = this.controls[0].clientWidth + "px";
    }

    bindEvents(){
        this.controls.forEach(button =>{
            button.addEventListener('click',this.handleClick)
        })
    }

    handleClick(ev){
        ev.preventDefault();

        let button = ev.currentTarget;

        let position = IndexForSiblings.get(button)

        this.indicator.style.left =(position*this.indicator.clientWidth)+'px'

        this.openTab(button.hash)
    }

    openTab(hash){
        let tab = document.querySelector(hash)

        let position = IndexForSiblings.get(tab)

        this.tabs.querySelector('.container').style.left =-(position*100)+'%'
    }
}

new TabManager(".tabs",".tabs-controls a",".indicator")