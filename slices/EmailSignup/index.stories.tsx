import { UnwrappedEmailSignup } from ".";
import { TEmailSignupProps } from "./EmailSignup";

export default {
  title: "slices/EmailSignup",
  component: UnwrappedEmailSignup,
};

export const Default = (props: TEmailSignupProps) => {
  return <UnwrappedEmailSignup {...props} />;
};
