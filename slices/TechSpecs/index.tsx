import React from "react";
import { TTechSpecsProps, TTechSpecsSlice } from "./TechSpecs";

export const UnwrappedTechSpecs = (props: TTechSpecsProps) => (
  <section>Tech Specs</section>
);

function unwrapSlice(Component: typeof UnwrappedTechSpecs) {
  return ({ slice }: { slice: TTechSpecsSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedTechSpecs);
