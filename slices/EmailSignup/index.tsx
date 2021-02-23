import { TEmailSignupProps, TEmailSignupSlice } from "./EmailSignup";
import { SubmitButton } from "./SubmitButton";
import { EmailInput } from "./EmailInput";
import { emailSignupStyles } from "./emailSignupStyles";
import { useState } from "react";

export function UnwrappedEmailSignup(props: TEmailSignupProps) {
  const [signupComplete, setSignupComplete] = useState(
    Boolean(props.signupComplete)
  );
  return (
    <section css={emailSignupStyles.container}>
      <h2 css={emailSignupStyles.title}>{props.title}</h2>
      <p css={emailSignupStyles.subtitle}>{props.subtitle}</p>
      {signupComplete || props.signupComplete ? (
        <div css={emailSignupStyles.success}>
          Subscribed! Check your inbox for a confirmation email.
        </div>
      ) : (
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            setSignupComplete(true);
            return false;
          }}
          css={emailSignupStyles.form}
        >
          <EmailInput placeholder={props.placeholder} />
          <SubmitButton>{props.buttonLabel}</SubmitButton>
        </form>
      )}
    </section>
  );
}

function unwrapSlice(Component: typeof UnwrappedEmailSignup) {
  return ({ slice }: { slice: TEmailSignupSlice }) => (
    <Component {...slice.primary} />
  );
}

export default unwrapSlice(UnwrappedEmailSignup);
