gsap.to("#box-1 .child-box", {
  delay: 0.5,
  scale: 1.5,
  rotate: "30deg",
  duration: 1.5,
  ease: Power4.easeInOut,
  // scrollTrigger: {
  //   trigger: ".child-box",
  //   scroller: "body",
  //   marker: true,
  // },
});

gsap.to("#box-2 .child-box", {
  delay: 0.5,
  scale: 1.5,
  rotate: "-30deg",
  duration: 1.5,
  opacity: 0,
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: "#box-2 .child-box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
    pin: true,
  },
});

gsap.to("#box-3 .child-box", {
  delay: 0.5,
  scale: 0.5,
  duration: 1.5,
  ease: Expo.easeInOut,
  scrollTrigger: {
    trigger: "#box-3 .child-box",
    scroller: "body",
    markers: true,
    scrub: true,
  },
});
