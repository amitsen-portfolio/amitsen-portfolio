// Note: Custom hooks

// ----------------------------------------------------------------------------

// Import dependencies
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Import types
import type { SectionName } from "./types";

// Define props
type UseSectionInViewProps = {
  // The name of the section
  sectionName: SectionName;
  // The threshold for the intersection observer
  threshold?: number;
};

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  // The useInView hook returns an object with a ref and a boolean value
  // The threshold is the percentage of the section that needs to be visible to trigger the inView boolean
  const { ref, inView } = useInView({ threshold });

  // The useActiveSectionContext hook returns the setActiveSection function and the time of the last click
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // When the section is in view and the time of the last click is more than 1 second ago, set the active section
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  // Return the ref
  return {
    ref,
  };
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default useWindowSize;
