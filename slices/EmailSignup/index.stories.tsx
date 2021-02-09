import { UnwrappedEmailSignup } from ".";
import { TEmailSignupProps } from "./EmailSignup";

export default {
  title: "slices/EmailSignup",
  component: UnwrappedEmailSignup,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Let's stay in touch!",
    },
    subtitle: {
      control: "text",
      defaultValue:
        "Join the mailinglist and we'll let you know when we have a new batch of birdhouses and keep you up-to-date with what we're working on.",
    },
    placeholder: {
      control: "text",
      defaultValue: "Your Email",
    },
    buttonLabel: {
      control: "text",
      defaultValue: "Subscribe",
    },
  },
};

export const Default = (props: TEmailSignupProps) => {
  return <UnwrappedEmailSignup {...props} />;
};
