import { UnwrappedProductTour } from ".";
import { TProductTourProps } from "./ProductTour";

export default {
  title: "slices/ProductTour",
  component: UnwrappedProductTour,
};

export const Default = (props: TProductTourProps) => {
  return <UnwrappedProductTour {...props} />;
};
