import { IPrismicImage, ISlice } from "../sm";

type TSiteTitle = string;
type TSiteLogo = IPrismicImage;

export type TCustomerTestimonialsPrimary = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
}

export type TCustomerTestimonialsItem = {
  linkText: string;
  linkUrl: {
    link_type: string;
    url: string;
  };
};

export type TCustomerTestimonialsProps = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
  items: TCustomerTestimonialsItem[];
}

export type TCustomerTestimonialsSlice = ISlice<TCustomerTestimonialsPrimary, TCustomerTestimonialsItem>;
