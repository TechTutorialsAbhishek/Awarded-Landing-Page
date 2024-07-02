// Function to initialize Locomotive Scroll and synchronize with ScrollTrigger
function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll (smooth scrolling library)
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"), // Specify main element as scroll container
    smooth: true, // Enable smooth scrolling
  });

  // Sync ScrollTrigger with Locomotive Scroll on scroll event
  locoScroll.on("scroll", ScrollTrigger.update);

  // Define scrollerProxy for main element to manage scrolling behavior
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      // Getter/setter for scrollTop
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      // Mock getBoundingClientRect to avoid jitters
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed", // Determine pinType based on main element's transform style
  });

  // Refresh ScrollTrigger and update Locomotive Scroll on window refresh
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Initial refresh of ScrollTrigger and Locomotive Scroll setup
  ScrollTrigger.refresh();
}

// Function to handle navigation animation
function navAnim() {
  // Add event listener for mouseenter on navigation
  document.querySelector("nav").addEventListener("mouseenter", function () {
    // Create GSAP timeline for animation on nav elements
    var tl = gsap.timeline();
    tl.to("nav ol li p", {
      y: 0, // Move nav list items vertically to 0 position
      delay: 0.5,
      stagger: 0.1, // Stagger animation for visual effect
    });
  });

  // Add event listener for mouseleave on navigation
  document.querySelector("nav").addEventListener("mouseleave", function () {
    // Create GSAP timeline for reverse animation on nav elements
    var tl = gsap.timeline();
    tl.to("nav ol li p", {
      y: 15, // Move nav list items vertically to initial position
    });
  });
}

// Function to handle arrow animation on elements
function arrow_Mover() {
  // Select all elements with class .elem
  let elem = document.querySelectorAll(".elem");
  elem.forEach(function (a) {
    // Select child nodes for arrows
    let arrowOne = a.childNodes[5].childNodes[3].childNodes[1];
    let arrowTwo = a.childNodes[5].childNodes[3].childNodes[3];

    // Add mouseenter event listener for arrow animation
    a.addEventListener("mouseenter", function () {
      // Animate arrows using GSAP on mouseenter
      gsap.to(arrowOne, {
        y: -15,
        x: 12,
      });

      gsap.to(arrowTwo, {
        y: -21,
        x: 18,
      });
    });

    // Add mouseleave event listener for arrow animation
    a.addEventListener("mouseleave", function () {
      // Reverse animation on mouseleave
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

// Function to handle animations on page2 elements
function page2Anim() {
  // Select all elements with class .elem
  let elem = document.querySelectorAll(".elem");
  elem.forEach(function (a) {
    // Select child node for image
    let elemImage = a.childNodes[3];

    // Add mouseenter event listener for image animation
    a.addEventListener("mouseenter", function () {
      // Animate image properties on mouseenter
      gsap.to(elemImage, {
        display: "block",
        scale: 2,
        opacity: 1,
      });
    });

    // Add mouseleave event listener for image animation
    a.addEventListener("mouseleave", function () {
      // Reverse animation on mouseleave
      gsap.to(elemImage, {
        display: "none",
        scale: 0,
        opacity: 0,
      });
    });

    // Add mousemove event listener for image animation
    a.addEventListener("mousemove", function (dets) {
      // Adjust image position based on mouse position relative to element
      gsap.to(elemImage, {
        left: dets.x - a.getBoundingClientRect().x,
        top: dets.y - a.getBoundingClientRect().y,
      });
    });
  });
}

// Function to handle animations on page3 elements
function page3Anim() {
  // Select circle element for animation
  let circle = document.getElementById('Page3-circle');
  circle.addEventListener('mouseenter', function () {
    // Animate button on circle mouseenter
    gsap.to('#page3-btn', {
      y: -10,
      opacity: 1,
    })
  });

  circle.addEventListener('mouseleave', function () {
    // Reverse animation on circle mouseleave
    gsap.to('#page3-btn', {
      y: 10,
      opacity: 0,
    })
  });

  // Select circle element for video play animation
  let page3_circle = document.getElementById('Page3-circle');
  let video = document.querySelector('#play-video-div video');

  // Add click event listener to circle for video play animation
  page3_circle.addEventListener('click', function () {
    // Play video and animate video container on circle click
    video.play();
    gsap.to('#play-video-div', {
      transform: "scaleX(1) scaleY(1)",
      height: "100vh",
      position: "fixed",
      top: 0,
      width: "100vw",
      opacity: 1,
      scale: 1,
    })
  });

  // Add click event listener to video for pause animation
  video.addEventListener('click', function () {
    // Pause video and reverse animation on video click
    video.pause();
    gsap.to('#play-video-div', {
      transform: "scaleX(0.2) scaleY(0.2)",
      height: "0vh",
      opacity: 0,
      scale: 0,
    })
  });
}

// Function to handle animations on heading boxes
let heading_box = document.querySelectorAll('.heading_box');
heading_box.forEach(function (elem) {
  // Add mouseenter event listener for heading box animation
  elem.addEventListener('mouseenter', function () {
    // Animate child elements on heading box mouseenter
    gsap.to(elem.childNodes[3].childNodes[1], {
      x: 20,
      y: -20,
    })

    gsap.to(elem.childNodes[3].childNodes[3], {
      x: 20,
      y: -20,
    })
  });

  // Add mouseleave event listener for heading box animation
  elem.addEventListener('mouseleave', function () {
    // Reverse animation on heading box mouseleave
    gsap.to(elem.childNodes[3].childNodes[1], {
      x: 0,
      y: 0,
    })

    gsap.to(elem.childNodes[3].childNodes[3], {
      x: 0,
      y: 0,
    })
  });
});

// Function to handle animations on page6 right elements
let page6_right_elem = document.querySelectorAll('.elem2');
page6_right_elem.forEach(function (elem) {
  // Add mouseenter event listener for hiding element on page6 right
  elem.childNodes[5].addEventListener('mouseenter', function () {
    elem.childNodes[5].style.display = "none";
  });

  // Add mouseenter event listener for playing video on page6 right
  elem.childNodes[3].addEventListener('mouseenter', function () {
    elem.childNodes[3].play();
    // Animate overlay on page6 right element mouseenter
    gsap.to(elem.childNodes[1], {
      scale: 1,
      opacity: 1,
    })
  });

  // Add mousemove event listener for overlay animation on page6 right element
  elem.childNodes[3].addEventListener('mousemove', function (dets) {
    // Animate overlay position on page6 right element mousemove
    gsap.to(elem.childNodes[1], {
      left: dets.x - elem.childNodes[3].getBoundingClientRect().x + "px",
      top: dets.y - elem.childNodes[3].getBoundingClientRect().y + "px",
    })
  });

  // Add mouseleave event listener for overlay animation on page6 right element
  elem.childNodes[3].addEventListener('mouseleave', function () {
    // Reverse animation on overlay and video on page6 right element mouseleave
    gsap.to(elem.childNodes[1], {
      scale: 0,
    });
    elem.childNodes[3].load();
    elem.childNodes[5].style.display = "block";
  });
});

// Function to handle animations on page7 boxes
let Page7_Box = document.querySelectorAll('.page7_box');
Page7_Box.forEach(function (elem) {
  // Add mouseenter event listener for page7 box animation
  elem.addEventListener('mouseenter', function () {
    // Animate text color and video container height on page7 box mouseenter
    gsap.to(elem.childNodes[3], {
      color: "white",
      opacity: 0,
    });
    gsap.to(elem.childNodes[5], {
      height: "80%",
    });
  });

  // Add mouseleave event listener for page7 box animation
  elem.addEventListener('mouseleave', function () {
    // Reverse animation on text color and video container height on page7 box mouseleave
    gsap.to(elem.childNodes[3], {
      color: "black",
      opacity: 1,
    });
    gsap.to(elem.childNodes[5], {
      height: "55%",
    });
  });
});

// Initialize functions on window load
window.addEventListener("load", function () {
  locoScroll(); // Initialize Locomotive Scroll
  navAnim(); // Initialize navigation animation
  page2Anim(); // Initialize page2 animations
  page3Anim(); // Initialize page3 animations
  arrow_Mover(); // Initialize arrow animations
});



let button = document.querySelector('#page8_part2 button')


button.addEventListener('mouseenter' , () =>{

gsap.to('#btn-text1 p' , {
  stagger : 1,
  transform: 'translate3d(0, -12px)',
  y: '-12px',
  opacity: 0,
})



gsap.to('#btn-text2 p' , {
  stagger : 1,
  transform: 'translate3d(0, -28px)',
  y: '-28px',
  // opacity: 0,
})






})


// button.addEventListener('mouseleave' , () =>{

//   gsap.to('#btn-text1 p' , {
//     stagger : 1,
//     transform: 'translate3d(0, -12px)',
//     // y: '-12px',
//     opacity: 0,
//   })
  
  
  
//   gsap.to('#btn-text2 p' , {
//     stagger : 1,
//     transform: 'translate3d(0, -28px)',
//     // y: '28px',
//     // opacity: 0,
//   })
  
  

  

  
//   })