
let playEl = document.getElementById("Play");

function play() {

    document.querySelector("#video-container video").addEventListener("mousemove", function (dets) {
        // playEl.style.left = dets.x + "px";
        // playEl.style.top = dets.y + "px";
        // cursor.style.opacity = 0;



        gsap.to(playEl, {
            left: dets.x,
            top: dets.y,


        })






    })







    document.querySelector("#video-container video").addEventListener("mouseleave", function () {
        playEl.style.opacity = 0;
        cursor.style.display = "block";


    })



    document.querySelector("#video-container video").addEventListener('mouseenter', function () {

        playEl.style.opacity = 1;
        playEl.style.scale = 1;
        cursor.style.display = "none";

    })



}


play()




function loding() {


    var timeline = gsap.timeline()
    timeline.from('#page1 h2', {
        y: 35,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.8,


    })

    timeline.from('#video-container', {
        y: 35,
        duration: 0.5,
        opacity: 0,
        delay: 1.2,



    })

}


loding()







let cursor = document.getElementById("cursor");
console.log(cursor);

document.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        left: dets.x,
        top: dets.y,

    })
})





// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true,
// });



function cursorAnimation() {

    var a = document.querySelectorAll('.box img')


    a.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to(cursor, {
                transform: 'translate(-50% , -50%) scale(1)'
            })

        })


        elem.addEventListener('mouseleave', function () {
            gsap.to(cursor, {
                transform: 'translate(-50% , -50%) scale(0)'
            })

        })

    })



}


cursorAnimation();



function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed",
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}



locomotiveAnimation();








gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "main",
        // markers: true,
        scrub: 1,
        start: "top 0%",
        end: "top -8%",

    }

})


function navbarAnimation() {
    gsap.to("#nav-part2 a", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "main",
            // markers: true,
            scrub: 1,
            start: "top 0%",
            end: "top -5%",

        }

    })

}

navbarAnimation()


let header = document.querySelector('header');

let menu = document.getElementById('menu');

let flag = 0;

menu.addEventListener('click', function () {

    if (flag == 0) {
        menu.classList.remove("ri-menu-line")
        menu.classList.add("ri-close-fill")
        header.style.display = "flex";

        gsap.to('#nav-part1 svg', {
            color: "white",

        })

        gsap.to(header, {
            height: "100vh",
            transition: "all ease-out 0.1s",
            scrub: 1,

        })

     


        gsap.to(' #header-left h6 ', {
            y:4,


        })



        gsap.to('#nav-part2 a', {
            color: "white",


        })


        flag++;


    } else {
        menu.classList.add("ri-menu-line")
        menu.classList.remove("ri-close-fill")
        // header.style.display = "none";
        gsap.to('#nav-part1 svg', {
            color: "black",
            delay: 0.5,




        })

        gsap.to(header, {
            height: "0vh",
            transition: "all ease-in 0.1s",
            scrub: 1,


        })

        gsap.to('#nav-part2 a', {
            delay: 0.5,
            color: "black",


        })



        flag--;
    }



    gsap.to('header', {




    })

});


















