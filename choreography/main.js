class Dim{
    static getWidth(el){
        let style = el.currentStyle = window.getComputedStyle(el)

        return el.offsetWidth + parseFloat(style.marginRight) + parseFloat(style.marginLeft)
    }
}

class Choreography{
    constructor(container_selector,item_selector){
        this.container=document.querySelector(container_selector)
        this.element=this.container.querySelectorAll(item_selector)

        this.element.forEach(el => el.style.opacity=0);

        this.setDelay()
    }

    setDelay(){
        let itemWidth = Dim.getWidth(this.element[0])
        let itemPerRow = Math.floor(this.container.clientWidth/itemWidth)
        
        for (let i = 0; i < this.element.length; i+= itemPerRow) {
            for (let j = i; j < (i + itemPerRow); j++) {
               let xPosition = parseInt(i/itemPerRow)
               let yPosition = j-i
                console.log("["+xPosition+","+yPosition+"]")

                let positionSum = xPosition + yPosition

                this.element[i+(j-i)].style.animationDelay=(positionSum*50)+'ms'
            }
            
        }

        this.element.forEach(el => el.classList.add("zoomIn"))    
    }
}

(function(){
    new Choreography(".row",".card")

})() 