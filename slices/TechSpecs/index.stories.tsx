import { UnwrappedTechSpecs } from ".";
import { TTechSpecsProps } from "./TechSpecs";

export default {
  title: "slices/TechSpecs",
  component: UnwrappedTechSpecs,
};

export const Default = (props: TTechSpecsProps) => {
  return <UnwrappedTechSpecs {...props} />;
};
