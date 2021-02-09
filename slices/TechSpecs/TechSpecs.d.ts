import { IPrismicImage, ISlice } from "../../types/sm";

type TSiteTitle = string;
type TSiteLogo = IPrismicImage;

export type TTechSpecsPrimary = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
}

export type TTechSpecsItem = {
  linkText: string;
  linkUrl: {
    link_type: string;
    url: string;
  };
};

export type TTechSpecsProps = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
  items: TTechSpecsItem[];
}

export type TTechSpecsSlice = ISlice<TTechSpecsPrimary, TTechSpecsItem>;
