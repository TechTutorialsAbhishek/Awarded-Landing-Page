
var cur = document.getElementById("cursor");
var blur = document.querySelector("#blur");



document.addEventListener('mousemove', function (dets) {
    // console.log(dets.x)
    cur.style.left = dets.x + "px";
    cur.style.top = dets.y + "px";


    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
    // blur.style.top = dets.y + "px";








})




gsap.to("nav", {
    height: "10vh",
    backgroundColor: "black",
    duration: 5,
    scrollTrigger: {

        trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top 0%",



        // true 1,2,3,4,5 
        scrub: 2,


    }


});

gsap.to('main', {
    backgroundColor: "black",
    scrollTrigger: {
        scroller: "body",
        trigger: "main",
        // markers: true, 
        scrub: 3,

        start: "top -20%",
        end: "top -30%",
    }
})



gsap.to('#page1 video', {
    height: "115vh",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        // markers:true, 
        start: "top 20%",
        end: "top 25%",
        scrub: 1,
        scale: 1,

    }
})







gsap.to('#page2 , #page3 , #page4  ', {

    y: -180,
    duration: 2,



    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true, 
        start: "top 40%",
        end: "top 42%",
        scrub: 2,
        scale: 2,

    }
})


gsap.from('#page2 ', {

    opacity: 0.8,
    backgroundColor: "black",
    background: "none",

    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 58%",
        scrub: 2,
        scale: 2,

    }
})



var nav_li = document.querySelectorAll("nav li");
console.log(nav_li)
nav_li.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        cur.style.scale = 2;
        cur.style.border = "1px solid white";
        cur.style.backgroundColor = "transparent"
    })


    elem.addEventListener('mouseleave', function () {
        cur.style.scale = 1;
        cur.style.border = "0px solid #95C11E";
        cur.style.backgroundColor = "#95C11E";
    })
})

gsap.from('#page2 img , #page2-center', {
    y: 50,
    opacity: 0,
    stagger: 0.5,

    scrollTrigger: {
        trigger: "#page2",
        // markers: "true",
        scroller: "body",
        start: "top 30%",
        end: "top  35%",

    }

})


gsap.from('#page3 , .page3-box', {
    // y: 50,
    opacity: 0,
    scale: 1.8,


    scrollTrigger: {
        trigger: "#page2",
        // markers: "true",
        scroller: "body",
        start: "top -10%",
        end: "top  -8%",

    }

})



gsap.from('#page4 #col-1', {
    y: -80,
    x: -80,


    scrollTrigger: {
        trigger: "#page4",
        markers: "true",
        scroller: "body",
        // markers: true,
        start: "top 35%",
        end: "top  4%5",
        scrub: 4,


    }

})



gsap.from('#page4 #col-2', {
    y: 70,
    x: 70,


    scrollTrigger: {
        trigger: "#page4",
        markers: "true",
        scroller: "body",
        // markers: true,
        start: "top 35%",
        end: "top  50",
        scrub: 4,


    }

})


gsap.from('#page5  h1', {
    y: 80,



    scrollTrigger: {
        trigger: "#page5 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
        scale: 2,


    }

})
