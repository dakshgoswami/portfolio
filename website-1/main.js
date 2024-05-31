const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var linkOver = document.querySelectorAll(".link-over");

var circle = document.querySelector(".following-circle");

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.to(".animation", {
        y:'0',
        duration: 1.5,
        stagger: .2,
        delay: -1,
        ease: Expo.easeInOut
    })

    tl.from(".head-footer", {
        y:'-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function mouseOver(){
    linkOver = addEventListener("mouseover", function(){
        circle.style.backgroundColor = "blue";
    })
}
mouseOver();

function arrowCircle(){
    window.addEventListener("mousemove", function(val){
        circle.style.transform = `translate(${val.clientX}px, ${val.clientY}px)`
    });
}
arrowCircle();
firstPageAnim();

