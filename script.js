const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// function startLoader() {
//   let counterElement = document.querySelector(".counter");
//   let currentValue = 0;

//   function updateCounter() {
//     if (currentValue >= 100) {
//       counterElement.textContent = "100";
//       return;
//     }

//     currentValue += Math.floor(Math.random() * 20) + 1;
//     if (currentValue > 100) {
//       currentValue = 100;
//     }

//     counterElement.textContent = currentValue;

//     let delay = Math.floor(Math.random() * 100) + 500;
//     setTimeout(updateCounter, delay);
//   }

//   updateCounter(); // <-- Call the function once to start the update
// }

// startLoader(); 


// gsap.to(".counter",0.25,{
//    delay:3.5,
//    opacity:0
// });
// gsap.to(".bar",{
//   delay:3.5,
//   height:0,
//   stagger:{
//     amount: 0.5,
//   },
//   ease: "power4.inOut"
// });

Shery.makeMagnet(".nav-but", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.6,
  });
Shery.makeMagnet(".elem h1", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet("video", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});