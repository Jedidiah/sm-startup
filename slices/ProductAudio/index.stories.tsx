import { UnwrappedProductAudio } from ".";
import { TProductAudioProps } from "./ProductAudio";

export default {
  title: "slices/ProductAudio",
  component: UnwrappedProductAudio,
  argTypes: {
    imageOn: {
      type: "object",
      defaultValue: {
        url:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=500&fit=crop",
      },
    },
    imageOff: {
      type: "object",
      defaultValue: {
        url:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&h=500&fit=crop",
      },
    },
  },
};

export const Default = (props: TProductAudioProps) => {
  return <UnwrappedProductAudio {...props} />;
};
