import { RichTextBlock } from "prismic-reactjs";
import { IPrismicImage, ISlice } from "../../types/sm";

type TSiteTitle = string;
type TSiteLogo = IPrismicImage;

export type TTechSpecsPrimary = {
  title: string;
  description: RichTextBlock[];
  labelTitle: string;
  descriptionTitle: string;
};

export type TTechSpecsItem = {
  label: string;
  description: string;
};

export type TTechSpecsProps = TTechSpecsPrimary & {
  items: TTechSpecsItem[];
};

export type TTechSpecsSlice = ISlice<TTechSpecsPrimary, TTechSpecsItem>;
