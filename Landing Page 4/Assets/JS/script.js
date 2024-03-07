


function locoScroll(){


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
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  
  
}


locoScroll()












var tl = gsap.timeline({

    scrollTrigger: {
        scroller: "main",
        trigger: ".h2-left",
        // markers: true,
        start: "top 10%",
        end: "top 70%",
        scrub: 5,
    }

})

tl.to(".h2-left", {
  x: -85,
  duration:1.5,

  


}),"anim";




tl.to(".h2-right", {
    x: 85,
    duration:1.5,
    // filter:" blur(4px)",
  }),"anim";




tl.to("#page1 video", {

  width: "100vw",
  height: "100vh",
  markers: true,
  duration: 8,
  scale : 1.1

  
}),"anim";


function mouseAnim(){


    let cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    x: dets.x + "px",
    y: dets.y + "px",
  });
});

let nav_li = document.querySelectorAll("li");

nav_li.forEach(function (elem) {
  console.log(elem);
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      width: "80px",
      height: "80px",
    });

  });
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      width: "30px",
      height: "30px",
    });

  });
});

// Video Anim

let video = document.querySelector('video');

video.addEventListener('mouseenter',function(){
  cursor.innerHTML = "Sound On" 
  cursor.style.fontSize = "0.7rem"

  gsap.to(cursor, {
    scale:2,
    width:"70px",
    borderRadius:"12px",
  });


});


video.addEventListener('mouseleave',function(){
 
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale:1,
    width:"30px",
    borderRadius:"50%",
  });


});




}





mouseAnim()



let elem = document.querySelectorAll('.elem');

elem.forEach(function(elem){

elem.addEventListener('mouseenter' , function(){
  // alert('fff')

})
})


var tl2 = gsap.timeline({

  scrollTrigger: {
      scroller: "main",
      trigger: ".h2-left",
      markers: true,
      start: "top -110%",
      end: "top -120%%",
      scrub: 4,
  }

})


tl2.to('nav , #nav-part1 img', {
  // backgroundColor:"red",
 color: "black",
})


tl2.to('main', {
  backgroundColor:"white",
  color: "black",
})


tl2.to('#page2', {

  color: "black",
})

