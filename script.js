const cursor=document.getElementById('accordion-cursor');

gsap.to("#bottle", {
  scrollTrigger: {
    trigger: "#bottle",
    scrub: true,
    start: "60% 50%",
    end: "90% -20%",
  },
  y: -30,
  duration: 2,
  opacity: 40,
  top: "850px",
  right: "10%",
});
gsap.to(".iner-marq h1", {
  scrollTrigger: {
    trigger: ".text-mar",
  
    scrub: 3,
    start: "top 0%",
    end: "top -120%",
    pin: true,
  },
  duration: 100,
  delay: 2,
  transform: "translate(-80%)",
});

gsap.to(".product h1", {
    scrollTrigger: {
      trigger: ".product",
  
      scrub: 7,
      start: "top 30%",
      end: "top 20%",
      pin: true,
    },
    duration: 5,
scale:150.7,

  });
  gsap.from('#bottle3',{
    scrollTrigger: {
      trigger: ".new",
    
      start: "top 40%",
      end: "top 20%",
      scrub:7
    },
    y:900,
    duration:150,
  })
  gsap.from('#bottle2',{
    scrollTrigger: {
      trigger: ".new",
      
      start: "top 20%",
      end: "top 20%",
      scrub:7
    },
    y:500,
    x:500,
    duration:150,
  })
  gsap.from('#bottle4',{
    scrollTrigger: {
      trigger: ".new",
      
      start: "top 20%",
      end: "top 20%",
      scrub:7
    },
    y:500,
    x:-500,
    duration:150,
  })
  gsap.from('#bottle1',{
    scrollTrigger: {
      trigger: ".new",
      
      start: "top 0%",
      end: "top 20%",
      scrub:7
    },
    y:900,
    x:900,
    duration:150,
  })
  gsap.from('#bottle5',{
    scrollTrigger: {
      trigger: ".new",
      
      start: "top 0%",
      end: "top 20%",
      scrub:7
    },
    y:900,
    x:-900,
    duration:150,
  })

window.addEventListener('mousemove',(val)=>{
gsap.to('.accordion-cursor',{
    x:`${val.clientX}px`,
    y:`${val.clientY}px`,
    duration:1,
 

})
})
