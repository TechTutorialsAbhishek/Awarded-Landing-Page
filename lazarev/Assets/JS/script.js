

function locoScroll() {
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




function arrow_Mover() {
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


window.addEventListener('contextmenu', function (e) {
  e.preventDefault()
})




function page2Anim() {
  let elem = document.querySelectorAll(".elem");
  elem.forEach(function (a) {



    let elemImage = a.childNodes[3];
    // console.log(elemImage)


    a.addEventListener("mouseenter", function () {



      gsap.to(elemImage, {
        display: "block",
        scale: 2,
        opacity: 1,


      });


    });

    a.addEventListener("mouseleave", function () {



      gsap.to(elemImage, {
        display: "none",
        scale: 0,
        opacity: 0,
      });


    });



    a.addEventListener("mousemove", function (dets) {


      // console.log(a.getBoundingClientRect().x - dets.x)
      gsap.to(elemImage, {

        left: dets.x - a.getBoundingClientRect().x,
        top: dets.y - a.getBoundingClientRect().y,
      });


    });

  });




}


function page3Anim() {
  let circle = document.getElementById('Page3-circle');
  circle.addEventListener('mouseenter', function () {

    gsap.to('#page3-btn', {
      y: -10,
      opacity: 1,
    })
  })

  circle.addEventListener('mouseleave', function () {

    gsap.to('#page3-btn', {
      y: 10,
      opacity: 0,
    })
  })



  let page3_circle = document.getElementById('Page3-circle');
  let video = document.querySelector('#play-video-div video');
  
  console.log(video)

  page3_circle.addEventListener('click', function () {
    // document.querySelector('nav').style.display = "none";
    // document.querySelector('main').style.height = "100vh";
    // document.querySelector('main').style.overflow = "hidden";
    // document.querySelector('#page1').style.display = "none";
    // document.querySelector('#page2').style.display = "none";
    // document.querySelector('#page4').style.display = "none";
    // document.querySelector('#page5').style.display = "none";
    // document.querySelector('#page6').style.display = "none";
    // document.querySelector('#page7').style.display = "none";
    // document.querySelector('#page8').style.display = "none";
    video.play();
    gsap.to('#play-video-div', {
      transform: "scaleX(1) scaleY(1)",
      height: "100vh",
      width: "100vw",
      opacity: 1,
      scale: 1,



    })
  })


  video.addEventListener('click', function () {
    // // document.querySelector('nav').style.display = "flex";
    // document.querySelector('#page1').style.display = "flex";
    // document.querySelector('#page2').style.display = "flex";
    // document.querySelector('#page4').style.display = "flex";
    // document.querySelector('#page5').style.display = "flex";
    // document.querySelector('#page6').style.display = "flex";
    // document.querySelector('#page7').style.display = "flex";
    // document.querySelector('#page8').style.display = "flex";
    video.pause();
    gsap.to('#play-video-div', {

      transform: "scaleX(0.2) scaleY(0.2)",
      height: "0vh",
      opacity: 0,
      scale: 0,



    })



  })

}

let heading_box = document.querySelectorAll('.heading_box');
heading_box.forEach(function (elem) {
  // console.log(elem.childNodes[3].childNodes[1])
  // console.log(elem.childNodes[3].childNodes[3])
  elem.addEventListener('mouseenter', function () {
    gsap.to(elem.childNodes[3].childNodes[1], {
      x: 20,
      y: -20,
    })

    gsap.to(elem.childNodes[3].childNodes[3], {
      x: 20,
      y: -20,
    })
  })

  elem.addEventListener('mouseleave', function () {
    gsap.to(elem.childNodes[3].childNodes[1], {
      x: 0,
      y: 0,
    })

    gsap.to(elem.childNodes[3].childNodes[3], {
      x: 0,
      y: 0,
    })
  })
})

let page6_right_elem = document.querySelectorAll('.elem2');
// console.log(page6_video.)
let circleElm = document.querySelector('.circle')


page6_right_elem.forEach(function (elem) {
  // console.log(elem)
  // console.log( "node1"+ elem.childNodes[1])

  // console.log( "node3"+ elem.childNodes[3])
  // console.log("node5"+  elem.childNodes[5])
  // console.log("node3"+  elem.childNodes[4])

  // console.log(video)
  elem.childNodes[5].addEventListener('mouseenter', function (dets) {

    elem.childNodes[5].style.display = "none";



  })

  elem.childNodes[3].addEventListener('mouseenter', function (dets) {
    // console.log(elem.childNodes[3].getBoundingClientRect().x)
    // console.log(dets.x)
    // console.log(elem.childNodes[3].getBoundingClientRect().y)
    // console.log(dets.y)
    elem.childNodes[3].play()

    gsap.to(elem.childNodes[1], {
      scale: 1,
      opacity: 1,

    })


  })

  elem.childNodes[3].addEventListener('mousemove', function (dets) {
    // console.log(elem.childNodes[3].getBoundingClientRect().x)
    // console.log(dets.x - elem.childNodes[3].getBoundingClientRect().x )
    // console.log(dets.x)
    // console.log(elem.childNodes[3].getBoundingClientRect().y)
    // console.log(dets.y)


    gsap.to(elem.childNodes[1], {

      left: dets.x - elem.childNodes[3].getBoundingClientRect().x + "px",
      top: dets.y - elem.childNodes[3].getBoundingClientRect().y + "px",
    })

  })





  elem.childNodes[3].addEventListener('mouseleave', function (dets) {
    // elem.childNodes[3].play();
    gsap.to(elem.childNodes[1], {
      scale: 0,

    })
    elem.childNodes[3].load()
    elem.childNodes[5].style.display = "block";
  })


  //   video.addEventListener('mouseleave', function (dets) {
  //     video.pause()


  // })
})




let Page7_Box1 = document.querySelector('.page7_box1');
// console.log(Page7_Boxe1.childNodes[2])

Page7_Box1.addEventListener('mouseenter', function () {
  // alert()
  gsap.to(Page7_Box1.childNodes[3], {
    opacity:1,
    color: "black",
    // duration:"1",
  })
  console.log(Page7_Box1.childNodes[5])
  gsap.to(Page7_Box1.childNodes[5], {
    height: "50%",
  })
})
Page7_Box1.addEventListener('mouseleave', function () {
  gsap.to(Page7_Box1.childNodes[5], {
    height: "80%",
  })
})


let Page7_Box2 = document.querySelector('.page7_box2');
// console.log(Page7_Boxe1.childNodes[2])

Page7_Box2.addEventListener('mouseenter', function () {
  // alert()
  console.log(Page7_Box2.childNodes[3])
  gsap.to(Page7_Box2.childNodes[3], {
    color: "white",
    opacity:0,
    // duration:"1",
  })
  gsap.to(Page7_Box2.childNodes[5], {
    height: "80%",
    // duration:"1",
  })
})
Page7_Box2.addEventListener('mouseleave', function () {
  gsap.to(Page7_Box2.childNodes[3], {
    opacity:1,
    color: "black",
    // duration:"1",
  })
  gsap.to(Page7_Box2.childNodes[5], {
    height: "50%",
    // duration:"1",
  })
})


// locoScroll()
navAnim()
page2Anim()
page3Anim()
arrow_Mover()