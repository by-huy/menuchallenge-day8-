export const translate = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {duration: 1.5, ease: [0.87, 0, 0.13, 1]}
    },
    exit: {
      y: "-100%",
      transition: {duration: 1, ease: [0.87, 0, 0.13, 1]}
    }
  };

export const width = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {duration: 2, ease: [0.87, 0, 0.13, 1]}
  },
  exit: {
    width: 0,
    transition: {duration: 1, ease: [0.87, 0, 0.13, 1]}
  },
}

export const masking = {
  initial: {
    width: 0,
  },
  animate: {
    width: 1,
  },
  exit: {
    width: 0,
  },
}

export const staggerContainer = { 
  show: {
    transition: {
      staggerChildren: 0.5,
      ease: [0.87, 0, 0.13, 1],
    }
  },
  hidden: {
  },
  
  exit: {
    transition: {
      staggerChildren: 0.075,
      ease: [0.87, 0, 0.13, 1],
    }
  }
}
  