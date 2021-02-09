import React from "react";
import { TProductTourProps, TProductTourSlice } from "./ProductTour";

export const UnwrappedProductTour = (props: TProductTourProps) => (
  <section>Product Tour</section>
);

function unwrapSlice(Component: typeof UnwrappedProductTour) {
  return ({ slice }: { slice: TProductTourSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedProductTour);
