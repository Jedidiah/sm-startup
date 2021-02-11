import { IPrismicImage, ISlice } from "../../types/sm";
import { AriaTextFieldProps } from "@react-types/textfield";

export type TEmailSignupPrimary = {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonLabel: string;
  signupComplete?: boolean;
};

export type TEmailSignupItem = {};

export type TEmailSignupProps = TEmailSignupPrimary;

export type TEmailSignupSlice = ISlice<TEmailSignupPrimary, TEmailSignupItem>;

export interface AriaTextFieldOptions extends AriaTextFieldProps {
  /**
   * The HTML element used to render the input, e.g. 'input', or 'textarea'.
   * It determines whether certain HTML attributes will be included in `inputProps`.
   * For example, [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type).
   * @default 'input'
   */
  inputElementType?: ElementType;
}
