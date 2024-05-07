

function locoScroll(){
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
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}


locoScroll()
function navAnim() {
  document.querySelector("nav").addEventListener("mouseenter", function () {
    var tl = gsap.timeline();
    tl.to("nav ol li p", {
      y: 0,
      delay: 0.5,
      stagger: 0.1,
    });
  });
  
  document.querySelector("nav").addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to("nav ol li p", {
      y: 15,
      // stagger:0.1,
    });
  });
}



window.addEventListener("load", function () {
  // this.alert("Loading...");
});




function arrow_Mover(){
let elem = document.querySelectorAll(".elem");
elem.forEach(function (a) {



let arrowOne = a.childNodes[5].childNodes[3].childNodes[1];
let arrowTwo = a.childNodes[5].childNodes[3].childNodes[3];
  a.addEventListener("mouseenter", function () {

    gsap.to(arrowOne, {
      y: -15,
      x: 12,
    });

    gsap.to(arrowTwo, {
      y: -21,
      x: 18,
    });

  });

  a.addEventListener("mouseleave", function () {
    //   console.log(element)
    gsap.to(arrowTwo, {
      y: -5,
      x: -5,
    });
    gsap.to(arrowOne, {
      y: 0,
      x: 0,
    });
  
  
  });
});

}





function page2Anim(){
  let elem = document.querySelectorAll(".elem");
elem.forEach(function (a) {



 let  elemImage = a.childNodes[3];
 console.log( elemImage)


  a.addEventListener("mouseenter", function () {


  
    gsap.to(elemImage, {
      display:"block",
      scale:2,
      opacity:1,
     
    });

  
  });

  a.addEventListener("mouseleave", function () {


  
    gsap.to(elemImage, {
      display:"none",
      scale:0,
      opacity:0,
    });

  
  });



  a.addEventListener("mousemove", function (dets) {
console.log(dets.layerX )

  
    gsap.to(elemImage, {
      left: dets.layerX  + "px",
      top: dets.layerY + "px",
    });

  
  });
 
});




}

locoScroll()
navAnim()
page2Anim()
arrow_Mover()