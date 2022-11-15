const easeing = [0.6, -0.05, 0.01, 0.99];

export const skillFromLeft: {} = {
  hidden: {
    x: -600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const skillFromRight: {} = {
  hidden: {
    x: 600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const letterAnimation: {} = {
  initial: {
    y: 400,
    opacity: 0,
  },
  animate: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.05,
    },
  }),
};

export const heroImageAnimation: {} = {
  initial: {
    x: 600,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export const titleAnimation: {} = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const socialsAnimation: {} = {
  initial: {
    y: 400,
    opacity: 0,
  },
  animate: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.2,
    },
  }),
};

export const aboutCardAnimation: {} = {
  hidden: {
    x: 250,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: custom * 0.3,
    },
  }),
};

export const projectAnimation: {} = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

export const contactCardsAnimation: {} = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: custom * 0.3,
    },
  }),
};

export const formAnimation: {} = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export default easeing;
