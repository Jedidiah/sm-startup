import { IPrismicImage, IPrismicLink, ISlice } from "../../types/sm";
import { AriaTextFieldProps } from "@react-types/textfield";
import { RichTextBlock } from "prismic-reactjs";

export type TProductAudioPrimary = {
  title: string;
  audioFile: IPrismicLink;
  imageOff: IPrismicImage;
  imageOn: IPrismicImage;
};

export type TProductAudioItem = {};

export type TProductAudioProps = TProductAudioPrimary;

export type TProductAudioSlice = ISlice<
  TProductAudioPrimary,
  TProductAudioItem
>;
