import { UnwrappedProductTour } from ".";
import { TProductTourProps } from "./ProductTour";

export default {
  title: "slices/ProductTour",
  component: UnwrappedProductTour,
  argTypes: {
    items: {
      control: { type: "select", options: ["2 Steps", "3 Steps", "4 Steps"] },
      defaultValue: "2 Steps",
    },
  },
};

const demoSteps = {
  "2 Steps": [
    {
      title: "Step One",
      description: [
        {
          type: "paragraph",
          text:
            "Ad mollit commodo officia ex. Laborum deserunt sint minim mollit proident eu esse occaecat est. Duis tempor cupidatat ullamco quis dolore.",
          spans: [],
        },
      ],
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 1,
      translateX: -1.5,
      translateY: 0,
      translateZ: 0,
    },
    {
      title: "Step Two",
      description: [
        {
          type: "paragraph",
          text:
            "Irure duis eiusmod duis quis tempor incididunt do. Fugiat veniam eiusmod et ex voluptate adipisicing. Nisi amet labore sunt id amet adipisicing aliquip aliquip irure adipisicing voluptate laborum.",
          spans: [],
        },
      ],
      rotationX: 1,
      rotationY: 0.5,
      rotationZ: 0.5,
      scale: 2,
      translateX: -1,
      translateY: 0,
      translateZ: 0,
    },
  ],
  "3 Steps": [
    {
      title: "Step One",
      description: [
        {
          type: "paragraph",
          text:
            "Ad mollit commodo officia ex. Laborum deserunt sint minim mollit proident eu esse occaecat est. Duis tempor cupidatat ullamco quis dolore.",
          spans: [],
        },
      ],
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 1,
      translateX: -2,
      translateY: 0,
      translateZ: 0,
    },
    {
      title: "Step Two",
      description: [
        {
          type: "paragraph",
          text:
            "Irure duis eiusmod duis quis tempor incididunt do. Fugiat veniam eiusmod et ex voluptate adipisicing. Nisi amet labore sunt id amet adipisicing aliquip aliquip irure adipisicing voluptate laborum.",
          spans: [],
        },
      ],
      rotationX: 1,
      rotationY: 0.5,
      rotationZ: 0.5,
      scale: 2,
      translateX: -1,
      translateY: 0,
      translateZ: 0,
    },
    {
      title: "Step Three",
      description: [
        {
          type: "paragraph",
          text:
            "Irure duis eiusmod duis quis tempor incididunt do. Fugiat veniam eiusmod et ex voluptate adipisicing. Nisi amet labore sunt id amet adipisicing aliquip aliquip irure adipisicing voluptate laborum.",
          spans: [],
        },
      ],
      rotationX: 1,
      rotationY: 2,
      rotationZ: -0.5,
      scale: 1.5,
      translateX: -2,
      translateY: 0,
      translateZ: -1,
    },
  ],
  "4 Steps": [
    {
      title: "Step One",
      description: [
        {
          type: "paragraph",
          text:
            "Ad mollit commodo officia ex. Laborum deserunt sint minim mollit proident eu esse occaecat est. Duis tempor cupidatat ullamco quis dolore.",
          spans: [],
        },
      ],
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 1,
      translateX: -2,
      translateY: 0,
      translateZ: 0,
    },
    {
      title: "Step Two",
      description: [
        {
          type: "paragraph",
          text:
            "Irure duis eiusmod duis quis tempor incididunt do. Fugiat veniam eiusmod et ex voluptate adipisicing. Nisi amet labore sunt id amet adipisicing aliquip aliquip irure adipisicing voluptate laborum.",
          spans: [],
        },
      ],
      rotationX: 1,
      rotationY: 0.5,
      rotationZ: 0.5,
      scale: 2,
      translateX: -1,
      translateY: 0,
      translateZ: 0,
    },
    {
      title: "Step Three",
      description: [
        {
          type: "paragraph",
          text:
            "Irure duis eiusmod duis quis tempor incididunt do. Fugiat veniam eiusmod et ex voluptate adipisicing. Nisi amet labore sunt id amet adipisicing aliquip aliquip irure adipisicing voluptate laborum.",
          spans: [],
        },
      ],
      rotationX: 1,
      rotationY: 2,
      rotationZ: -0.5,
      scale: 1.5,
      translateX: -2,
      translateY: 0,
      translateZ: -1,
    },
    {
      title: "Step Four",
      description: [
        {
          type: "paragraph",
          text:
            "Irure duis eiusmod duis quis tempor incididunt do. Fugiat veniam eiusmod et ex voluptate adipisicing. Nisi amet labore sunt id amet adipisicing aliquip aliquip irure adipisicing voluptate laborum.",
          spans: [],
        },
      ],
      rotationX: 2,
      rotationY: 0,
      rotationZ: -1,
      scale: 2.5,
      translateX: -2,
      translateY: 0,
      translateZ: 0,
    },
  ],
};

export const Default = (props: TProductTourProps) => {
  console.log({ props });

  return (
    <UnwrappedProductTour {...props} items={demoSteps[String(props.items)]} />
  );
};
