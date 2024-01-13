// Define the animation variants for fading in elements
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100, // Start 100 pixels down from the final position
  },
  animate: (index: number) => ({
    opacity: 1, // Fade to fully visible
    y: 0, // Move to final position
    transition: {
      delay: 0.05 * index, // Duration depends on the index (stagger effect)
    },
  }),
};
