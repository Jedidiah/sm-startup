import { UnwrappedCustomerTestimonials } from ".";
import { TCustomerTestimonialsProps } from "./CustomerTestimonials";

export default {
  title: "slices/CustomerTestimonials",
  component: UnwrappedCustomerTestimonials,
};

export const Default = (props: TCustomerTestimonialsProps) => {
  return <UnwrappedCustomerTestimonials {...props} />;
};
