import gsap from "gsap";

const experienceAnimationScript = (e, wordsRef) => {
  const xPos = (e.clientX / window.innerWidth) - 0.5
  const yPos = (e.clientY / window.innerHeight) - 0.5

  gsap.to(wordsRef.current.childNodes, 1, {
    rotationY: xPos * 100,
    rotationX: yPos * 100,
    ease: 'power2.out',
  });
}

export default experienceAnimationScript