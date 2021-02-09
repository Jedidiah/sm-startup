import React from "react";
import { TEmailSignupProps, TEmailSignupSlice } from "./EmailSignup";

export const UnwrappedEmailSignup = (props: TEmailSignupProps) => (
  <section>Email Signup</section>
);

function unwrapSlice(Component: typeof UnwrappedEmailSignup) {
  return ({ slice }: { slice: TEmailSignupSlice }) => (
    <Component {...slice.primary} />
  );
}

export default unwrapSlice(UnwrappedEmailSignup);
