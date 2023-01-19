import {Container, Triangle} from "@/components/layout/main/styles";
import {useEffect, useRef} from "react";
import gsap from "gsap";

const Animation = ({ triangleCount }) => {
  const ref = useRef(null);
  /**
   * Write this code use gsap v3
   *  const observer = new IntersectionObserver((entries) => {
   *       entries.forEach((entry) => {
   *         // Check if the container element is visible
   *         if (entry.isIntersecting) {
   *           // Select all the triangle elements
   *           const triangles = document.querySelectorAll(".triangle");
   *           // Create a TimelineMax to control the animation
   *           const animationTimeline = new TimelineMax({ repeat: -1 });
   *           // Loop through each triangle element
   *           triangles.forEach((triangle) => {
   *             // Generate random initial position, rotation, and scale
   *             const x = Math.random() * window.innerWidth;
   *             const y = Math.random() * window.innerHeight;
   *             const rotation = Math.random() * 360;
   *             const scale = Math.random() * 0.5 + 0.5;
   *
   *             // Apply the initial position, rotation, and scale to the triangle element
   *             TweenMax.set(triangle, { x, y, rotation, scale });
   *
   *             // Create a TweenMax animation that moves the triangle to a new random position, rotation, and scale
   *             const animation = TweenMax.to(triangle, 5, {
   *               x: Math.random() * window.innerWidth,
   *               y: Math.random() * window.innerHeight,
   *               rotation: Math.random() * 360,
   *               scale: Math.random() * 0.5 + 0.5,
   *               onUpdate: function () {
   *                 // here you can check collision and change the direction
   *               },
   *               ease: Linear.easeNone,
   *               repeat: -1,
   *             });
   *
   *             // Add the animation to the timeline
   *             animationTimeline.add(animation, Math.random());
   *           });
   *         }
   *       });
   *     });
   *     // Observe the container element
   *     observer.observe(containerRef.current);
   */

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const triangles = document.querySelectorAll(".triangle");
          const animationTimeline = gsap.timeline({ repeat: -1 });
          triangles.forEach((triangle) => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * ref.current.clientHeight;
            const rotation = Math.random() * 360;
            const scale = Math.random() * 0.5 + 0.5;
            gsap.set(triangle, { x, y, rotation, scale });
            const animation = gsap.to(triangle, {
              duration: 17,
              x: Math.random() * window.innerWidth,
              y: Math.random() * ref.current.clientHeight,
              rotation: Math.random() * 360,
              scale: Math.random() * 0.5 + 0.5,
              onUpdate: function () {
                // here you can check collision and change the direction
              },
              ease: "linear",
              repeat: -1,
            });
            animationTimeline.add(animation, Math.random());
          });
        }
      });
    } );

    observer.observe(ref.current);
  }, []);

  return (
    <Container ref={ref}>
      {Array.from({ length: triangleCount }, (_, i) => (
        <Triangle key={i} className="triangle" />
      ))}
    </Container>
  );
}

export default Animation;