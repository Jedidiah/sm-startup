import { IPrismicImage, ISlice } from "../../types/sm";

type TSiteTitle = string;
type TSiteLogo = IPrismicImage;

export type TEmailSignupPrimary = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
}

export type TEmailSignupItem = {
  linkText: string;
  linkUrl: {
    link_type: string;
    url: string;
  };
};

export type TEmailSignupProps = {
  siteTitle: TSiteTitle;
  siteLogo: TSiteLogo;
  items: TEmailSignupItem[];
}

export type TEmailSignupSlice = ISlice<TEmailSignupPrimary, TEmailSignupItem>;
