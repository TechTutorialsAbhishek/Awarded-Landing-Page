


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
        pin:true,
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


let video_wrapper = document.querySelectorAll(".video-wrapper");

video_wrapper.forEach(function (elem) {
  cursor.innerHTML = "View" 
  console.log(elem);
  elem.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View" 
    gsap.to("#cursor", {
      scale:2,
     width:"70px",
      borderRadius:"12px",
    });

  });

  elem.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to("#cursor", {
      width: "30px",
      height: "30px",
      borderRadius:"50%",
      scale:1,
    });

  });
});





// 


let img__wrapper = document.querySelectorAll(".img-wrapper");

img__wrapper.forEach(function (elem) {
  cursor.innerHTML = "View" 
  console.log(elem);
  elem.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View" 
    gsap.to("#cursor", {
      scale:2,
     width:"70px",
      borderRadius:"12px",
    });

  });
  elem.addEventListener("mouseleave", function () {
    cursor.innerHTML = "" 
    gsap.to("#cursor", {
      width: "30px",
      height: "30px",
      borderRadius:"50%",
      scale:1,
    });

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
      // markers: true,
      start: "top -110%",
      end: "top -120%",
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






var tl3 = gsap.timeline({

  scrollTrigger: {
      scroller: "main",
      trigger: ".h2-left",
      // markers: true,
   
      start: "top -520%",
      end: "top -530%",
      scrub: 4,

  }

})




tl3.to('main', {
  backgroundColor:"black",
  color: "white",
})




var tl4 = gsap.timeline({

  scrollTrigger: {
      scroller: "main",
      trigger: "#page4",
      markers: true,
      pin:true,
      start: "left 0%",
      end: "right -30%",
      scrub: 4,

  }

});





tl4.to('.scroller ', {

  // transform: "translateX(-100%)",
  // backgroundColor:"red",

  x:"-65%",
  color:"red",
  // ease: "none",

}),"anim2";


tl4.to('.line ', {

  width: '100vw',
  
  scrollTrigger: {
    scroller: "main",
    trigger: "#page4",
    markers: true,
    // pin:true,
    start: "left 0%",
    end: "right -30%",
    scrub: true,

}

}),"anim2";




document.querySelector('.circle').addEventListener("mousemove", function (dets) {
  gsap.to(".circle", {
    x: "200px" -  dets.x + "px",
    y: dets.y + "px" - "200px",
  });
});


let page2_data = document.querySelectorAll('.elem');

page2_data.forEach(function(elem){
  console.log(elem)
  console.log(elem.childNodes[1].getAttribute('src'))
  elem.addEventListener('mouseenter' , function(){
    // alert('hyy')
    document.getElementById('page2_right').style.backgroundImage = `url(${elem.childNodes[1].getAttribute('src')})`
  })
})



let elem_client = document.querySelectorAll('.elem_client')

elem_client.forEach(function(dets){
console.log(dets)
dets.addEventListener('mouseenter' , function(e){
  let cursor = document.getElementById("cursor");
  cursor.style.width = "30vw";
  cursor.style.height = "45vh";
  cursor.style.borderRadius = "0px";
  cursor.style.mixBlendMode = "normal";
 
  // alert()
  // let a = getAttribute['data-img']
  let a = dets.getAttribute('data-img')


cursor.style.backgroundImage = `url(${dets.getAttribute('data-img')})`
//  document.getElementById('image_container').style.display = "block"

})


dets.addEventListener('mouseleave' , function(e){
  let cursor = document.getElementById("cursor");
  cursor.style.width = "30px";
  cursor.style.height = "30px";
  cursor.style.borderRadius = "50%";

 
  // alert()
  // let a = getAttribute['data-img']




cursor.style.backgroundImage = "none";
//  document.getElementById('image_container').style.display = "block"

})

})






let circle = document.querySelector('.circle_big');





circle.addEventListener('mouseenter' , function(){
  circle.style.backgroundColor = "black";
  circle.style.color = "white";
  cursor.style.display = "none";
})

circle.addEventListener('mouseleave' , function(){
  circle.style.backgroundColor = "white";
  circle.style.color = "black";

  cursor.style.display = "block";
})

document.querySelector('footer').addEventListener('mouseenter' , function(){
  cursor.style.backgroundColor = "black";
})

document.querySelector('footer').addEventListener('mouseleave' , function(){
  cursor.style.backgroundColor = " #d2a8e5";
})


let circle2 = document.querySelector('.circle');





circle2.addEventListener('mouseenter' , function(){
  circle2.style.backgroundColor = "white";
  circle2.style.color = "black";
  cursor.style.display = "none";
})

circle2.addEventListener('mouseleave' , function(){
  circle2.style.backgroundColor = "#d2a8e";
  circle.style.color = "black";

  cursor.style.display = "block";
})
