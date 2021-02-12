import { RichTextBlock } from "prismic-reactjs";
import { IPrismicImage, ISlice } from "../../types/sm";

export type TProductTourPrimary = {};

export type TProductTourItem = {
  title: string;
  description: RichTextBlock[];
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  scale?: number;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
};

export type TProductTourProps = {
  items: TProductTourItem[];
};

export type TProductTourSlice = ISlice<TProductTourPrimary, TProductTourItem>;
