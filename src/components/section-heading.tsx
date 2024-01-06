import React from "react";

// This type is used to define the props for the SectionHeading component
type SectionHeadingProps = {
  children?: React.ReactNode;
};

// This component is used to render section headings
export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>;
}
