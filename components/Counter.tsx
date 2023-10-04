import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  extra?: string
}

const Counter: React.FC<CounterProps> = ({ from, to, extra }) => {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = `${Math.round(value).toString()}${extra !== undefined ? extra : ''}`;
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return (
    <motion.p
      ref={nodeRef}
      initial={{ opacity: 0, scale: 0.1 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className='font-extrabold text-5xl text-[#b6c43f]'
    />
  );
};

export default Counter;