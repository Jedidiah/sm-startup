/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { emailSignupStyles } from ".";

export function SubmitButton(props) {
  const ref = React.useRef();
  const { buttonProps } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...buttonProps}
      {...focusProps}
      css={
        isFocusVisible
          ? [emailSignupStyles.button, emailSignupStyles.buttonFocus]
          : emailSignupStyles.button
      }
      ref={ref}
    >
      {props.children}
    </button>
  );
}
