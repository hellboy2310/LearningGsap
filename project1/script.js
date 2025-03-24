
gsap.to('.imagecontainer', {
    width: "100%",
    ease:Expo.easeInOut,
    duration:2,
    stagger:2
})
const headings = document.querySelectorAll(".text h1");

// Set all headings to be hidden initially
gsap.set(headings, { opacity: 0, top: "100%" });

headings.forEach((heading, index) => {
    gsap.to(heading, {
        delay: index * 2, // Delay each heading to appear sequentially
        top: "0%", // Move into view
        opacity: 1, // Make visible
        ease: "Expo.easeInOut",
        duration: 1.5,
        onComplete: () => {
            gsap.to(heading, {
                delay: 0.5, // Wait before hiding
                top: "-100%", // Move out of view
                opacity: 0,
                duration: 1.5,
                ease: "Expo.easeInOut"
            });
        }
    });
});

