/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { TEmailSignupProps, TEmailSignupSlice } from "./EmailSignup";
import { SubmitButton } from "./SubmitButton";
import { EmailInput } from "./EmailInput";

export const emailSignupStyles = {
  container: css`
    background-color: #eee;
    text-align: center;
    padding: 4rem;
  `,
  title: css`
    font-size: 3rem;
    margin: 0;
  `,
  subtitle: css`
    font-size: 1.2rem;
    max-width: 45em;
    margin: 2rem auto;
  `,
  form: css`
    display: flex;
    max-width: 48rem;
    margin: 0 auto;
  `,
  input: css`
    border: 1px solid #333;
    flex-grow: 3;
    font-size: 1.25em;
    outline: 0 none;
    padding: 0.75rem 1rem;
  `,
  inputFocus: css`
    outline: lightblue 2px solid;
  `,
  button: css`
    background-color: #333;
    border: 1px solid #333;
    color: #fff;
    cursor: pointer;
    display: block;
    flex-grow: 1;
    font-weight: bold;
    letter-spacing: 1px;
    outline: 0 none;
    padding: 1rem;
    text-transform: uppercase;
    input + & {
      margin-left: -1px;
    }
  `,
  buttonFocus: css`
    background-color: #444;
    outline: lightblue 2px solid;
  `,
};

export function UnwrappedEmailSignup(props: TEmailSignupProps) {
  return (
    <section css={emailSignupStyles.container}>
      <h2 css={emailSignupStyles.title}>{props.title}</h2>
      <p css={emailSignupStyles.subtitle}>{props.subtitle}</p>
      <form method="post" css={emailSignupStyles.form}>
        <EmailInput placeholder={props.placeholder} />
        <SubmitButton>{props.buttonLabel}</SubmitButton>
      </form>
    </section>
  );
}

function unwrapSlice(Component: typeof UnwrappedEmailSignup) {
  return ({ slice }: { slice: TEmailSignupSlice }) => (
    <Component {...slice.primary} />
  );
}

export default unwrapSlice(UnwrappedEmailSignup);
