// @ts-nocheck
import { TProductTourProps } from "./ProductTour";
import ProductModel from "./ProductModel";

export default {
  title: "components/TourStep",
  component: ProductModel,
};

export const Default = (props: TProductTourProps) => {
  return <ProductModel {...props} />;
};
