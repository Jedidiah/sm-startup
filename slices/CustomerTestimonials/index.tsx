import React from "react";
import {
  TCustomerTestimonialsProps,
  TCustomerTestimonialsSlice,
} from "./CustomerTestimonials";

export const UnwrappedCustomerTestimonials = (
  props: TCustomerTestimonialsProps
) => <section>Customer Testimonials</section>;

function unwrapSlice(Component: typeof UnwrappedCustomerTestimonials) {
  return ({ slice }: { slice: TCustomerTestimonialsSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedCustomerTestimonials);
