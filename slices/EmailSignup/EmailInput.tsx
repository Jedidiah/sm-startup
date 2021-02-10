/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { AriaTextFieldOptions } from "./EmailSignup";
import { useTextField } from "@react-aria/textfield";
import { useFocusRing } from "@react-aria/focus";
import { useVisuallyHidden } from "@react-aria/visually-hidden";
import { emailSignupStyles } from ".";

export function EmailInput(props: AriaTextFieldOptions) {
  const ref = React.useRef();
  const { labelProps, inputProps } = useTextField(props, ref);
  const { visuallyHiddenProps } = useVisuallyHidden();
  const { isFocusVisible, focusProps } = useFocusRing();

  const inputElement = (
    // @ts-ignore: Incorrect type coming from react-aria for inputProps
    <input
      ref={ref}
      {...inputProps}
      {...focusProps}
      css={
        isFocusVisible
          ? [emailSignupStyles.input, emailSignupStyles.inputFocus]
          : emailSignupStyles.input
      }
      type="email"
    />
  );

  return (
    <>
      <label {...labelProps} {...visuallyHiddenProps}>
        Email Address:
      </label>
      {inputElement}
    </>
  );
}
