import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);

  // Motion values for x/y position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth follow animation
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 25);
      mouseY.set(e.clientY - 25);
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMagnetEnter = (e) => {
      if (e.target.classList.contains("magnetic")) setIsMagnetic(true);
    };
    const handleMagnetLeave = (e) => {
      if (e.target.classList.contains("magnetic")) setIsMagnetic(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseover", handleMagnetEnter);
    window.addEventListener("mouseout", handleMagnetLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseover", handleMagnetEnter);
      window.removeEventListener("mouseout", handleMagnetLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: springX,
        translateY: springY,
        width: isHovered ? 80 : 45,
        height: isHovered ? 80 : 45,
        background: isMagnetic
          ? "radial-gradient(circle at center, #00ffa3, #7a00ff)"
          : "radial-gradient(circle at center, #7a00ff, #ff00cc)",
        mixBlendMode: "difference",
      }}
      animate={{
        scale: isMagnetic ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    />
  );
}
