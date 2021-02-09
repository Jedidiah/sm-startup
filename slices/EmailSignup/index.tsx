import React from "react";
import { TEmailSignupProps, TEmailSignupSlice } from "./EmailSignup";

export const UnwrappedEmailSignup = (props: TEmailSignupProps) => (
  <section>Email Signup</section>
);

function unwrapSlice(Component: typeof UnwrappedEmailSignup) {
  return ({ slice }: { slice: TEmailSignupSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedEmailSignup);
