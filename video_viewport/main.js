class ViewPort{
    static visible(el){
        let coords = el.getBoundingClientRect();
        let windowsHeight = document.documentElement.clientHeight;

        return(coords.top < windowsHeight && (coords.top * -1) < windowsHeight) 
    }
}

class PlayOnViewport{
    constructor(video_selector){
        this.video = document.querySelector(video_selector);
        this.evaluate = this.evaluate.bind(this);
        this.bindEvents();
    }

    bindEvents(){
        window.addEventListener('scroll',this.evaluate);
    }

    evaluate(){
        if(ViewPort.visible(this.video)){
            this.video.play();
        } else{
            this.video.pause();
        }
    }
}



(function(){
    new PlayOnViewport('video')


})()