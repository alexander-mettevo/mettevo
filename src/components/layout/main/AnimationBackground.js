import {Container, Triangle} from "@/components/layout/main/styles";
import {useEffect, useRef} from "react";
import gsap from "gsap";

const Animation = ({ triangleCount }) => {
  const ref = useRef(null);


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