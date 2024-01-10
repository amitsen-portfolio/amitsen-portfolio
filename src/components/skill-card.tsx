import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  skills: readonly string[];
};

// Define the animation variants for fading in elements
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100, // Start 100 pixels down from the final position
  },
  animate: (index: number) => ({
    opacity: 1, // Fade to fully visible
    y: 0, // Move to final position
    transition: {
      duration: 0.075 * index, // Duration depends on the index (stagger effect)
      ease: "easeOut", // Type of easing
    },
  }),
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    // Animated container for the skill card
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4 flex flex-col h-full"
      initial={{ opacity: 0, y: 100 }} // Start state for the animation
      animate={{ opacity: 1, y: 0 }} // End state for the animation
      transition={{
        type: "spring", // Type of transition
        delay: 1, // Delay before the animation starts
      }}
    >
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>{" "}
      {/* Skill category title */}
      <div className="flex flex-col justify-center flex-grow">
        <ul className="flex flex-wrap justify-center gap-3 text-l text-slate-800">
          {/* Mapping through the skills array */}
          {skills.map((skill, index) => (
            // Animated list item for each skill
            <motion.li
              variants={fadeInAnimationVariants} // Animation variants
              initial="initial" // Start state
              whileInView="animate" // Animate when in view
              viewport={{ once: true }} // Run animation only once
              custom={index} // Pass index to the animation for staggering effect
              key={index}
              className="bg-slate-100 my-border-slate-300 rounded-xl px-5 py-1 text-xs sm:text-lg"
            >
              {skill} {/* Display the skill */}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
