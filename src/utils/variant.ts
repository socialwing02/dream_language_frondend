export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "down" ? 40 : direction === "up" ? -40 : 0,
      x: direction === "right" ? 40 : direction === "left" ? -40 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const hover = (delay: number) => {
  return {
    hidden: {
      backgroundColor: "transparent",
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show: {
      backgroundColor: "red",
      cursor: "pointer",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerParent = () => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        type: "tween",
      },
    },
  };
};

export const staggerChild = () => {
  return {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
};
