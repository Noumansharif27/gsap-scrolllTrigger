gsap.to("#box-1 .child-box", {
  delay: 1,
  scale: 1.5,
  rotate: "30deg",
  duration: 2,
  ease: Power4.easeInOut,
  // scrollTrigger: {
  //   trigger: ".child-box",
  //   scroller: "body",
  //   marker: true,
  // },
});
gsap.to("#box-2 .child-box", {
  delay: 1,
  scale: 1.5,
  rotate: "-30deg",
  duration: 2,
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: "#box-2 .child-box",
    scroller: "body",
    markers: true,
  },
});
