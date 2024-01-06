"use client";

// Import necessary modules and components
import React, { createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";

// This type is used to define the props for the context provider
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// This type is used to define the context value
type ActiveSectionContextType = {
    activeSection: SectionName; // The active section
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;  // Function to set the active section
    timeOfLastClick: number;  // The time of the last click
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>; // Function to set the time of the last click
};

// This context is used to keep track of the active section
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {

  // This state is used to keep track of the active section
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  // This state is used to prevent the active section from changing when the user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    // This context provider is used to provide the context value to its children
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// This custom hook is used to access the context value
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  // Throw an error if the hook is used outside of the context provider
  if (context === null) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
}