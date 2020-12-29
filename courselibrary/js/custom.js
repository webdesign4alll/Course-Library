gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline()
tl.from(".cl3",{xPercent:-100})
.from(".cl4",{xPercent:-100})
.from(".cl5",{xPercent:-100})
.from(".cl6",{xPercent:-100});



ScrollTrigger.create({
    animation:tl,
    trigger: "#scroll_section",
    start: "top top",
    end: "+=2000",
    scrub:.5,
    pin:true,
});


for( i = 0;i<=3; i++) {
	console.log(i)
}

