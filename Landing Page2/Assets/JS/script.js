

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
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
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotive()

function project() {
    let fixedImage = document.getElementById('fixed-image');
    console.log(fixedImage)
    let elem_container = document.getElementById('elem-container')


    elem_container.addEventListener('mouseenter', function (dets) {
        fixedImage.style.display = "block";

    })

    elem_container.addEventListener('mouseleave', function (dets) {
        fixedImage.style.display = "none";

    })



    var elem = document.querySelectorAll('.elem')

    // console.log(elem)

    elem.forEach(function (dets) {
        dets.addEventListener('mouseenter', function () {
            var image = dets.getAttribute("data-image");
            console.log(image)
            fixedImage.style.backgroundImage = `url(${image})`
        })
    })

    // $ template litterals



}

project();



let b = document.querySelectorAll('.h2-left')
let page5Right = document.getElementById('right-image')

function faa() {

    b.forEach(function (BgImg) {
    console.log(BgImg.getAttribute('data-bg'))


        BgImg.addEventListener('click', function () {
            let images = BgImg.getAttribute('data-bg')
            console.log(images)
           page5Right.style.background = `url(${images})`




            // page5Right.style.backgroundColor = "green"
    

        })
    })








}

faa()
















// right - image


//     .addEventListener('click', function () {
//     page5Image.forEach(image, function (hh) {
//       console.log(hh)
//   })
// })




