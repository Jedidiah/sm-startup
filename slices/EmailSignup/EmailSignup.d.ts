import { IPrismicImage, ISlice } from "../../types/sm";

export type TEmailSignupPrimary = {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonLabel: string;
};

export type TEmailSignupItem = {};

export type TEmailSignupProps = TEmailSignupPrimary;

export type TEmailSignupSlice = ISlice<TEmailSignupPrimary, TEmailSignupItem>;
