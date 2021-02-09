import { IPrismicImage, ISlice } from "../../types/sm";

type TSiteTitle = string;
type TSiteLogo = IPrismicImage;

export type TSiteNavigationPrimary = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
}

export type TSiteNavigationItem = {
  linkText: string;
  linkUrl: {
    link_type: string;
    url: string;
  };
};

export type TSiteNavigationProps = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
  links: TSiteNavigationItem[];
}

export type TSiteNavigationSlice = ISlice<TSiteNavigationPrimary, TSiteNavigationItem>;
