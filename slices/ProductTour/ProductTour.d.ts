import { IPrismicImage, ISlice } from "../sm";

type TSiteTitle = string;
type TSiteLogo = IPrismicImage;

export type TProductTourPrimary = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
}

export type TProductTourItem = {
  linkText: string;
  linkUrl: {
    link_type: string;
    url: string;
  };
};

export type TProductTourProps = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
  items: TProductTourItem[];
}

export type TProductTourSlice = ISlice<TProductTourPrimary, TProductTourItem>;
