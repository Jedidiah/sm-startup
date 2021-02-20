import { IPrismicImage, ISlice } from "../../types/sm";
import { AriaTextFieldProps } from "@react-types/textfield";
import { RichTextBlock } from "prismic-reactjs";

export type TProductHeaderPrimary = {
  title: string;
  subtitle: string;
  description: RichTextBlock[];
  price: number;
  availability: "soldout" | "preorder" | "available";
};

export type TProductHeaderItem = {
  image: IPrismicImage & { thumbnail: IPrismicImage };
  youtubeId: string;
  altText: string;
  caption: string;
};

export type TProductHeaderProps = TProductHeaderPrimary & {
  images: TProductHeaderItem[];
};

export type TProductHeaderSlice = ISlice<
  TProductHeaderPrimary,
  TProductHeaderItem
>;
