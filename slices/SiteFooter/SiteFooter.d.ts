import { IPrismicImage, ISlice } from "../../types/sm";

type TSiteTitle = string;
type TSiteLogo = IPrismicImage;

export type TSiteFooterPrimary = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
}

export type TSiteFooterItem = {
  linkText: string;
  linkUrl: {
    link_type: string;
    url: string;
  };
};

export type TSiteFooterProps = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
  items: TSiteFooterItem[];
}

export type TSiteFooterSlice = ISlice<TSiteFooterPrimary, TSiteFooterItem>;
