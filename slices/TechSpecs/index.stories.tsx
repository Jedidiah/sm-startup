import { UnwrappedTechSpecs } from ".";
import { TTechSpecsProps } from "./TechSpecs";

export default {
  title: "slices/TechSpecs",
  component: UnwrappedTechSpecs,
  argTypes: {
    title: {
      defaultValue: "Specifications",
    },
    description: {
      defaultValue: [
        {
          type: "paragraph",
          text:
            "Laborum exercitation irure aliqua cupidatat sunt tempor veniam consequat dolor tempor. Qui pariatur occaecat ipsum mollit est elit. Laborum exercitation irure aliqua cupidatat sunt tempor veniam consequat dolor tempor.",
          spans: [],
        },
        {
          type: "paragraph",
          text:
            "Qui pariatur occaecat ipsum mollit est elit. Laborum exercitation irure aliqua cupidatat sunt tempor veniam consequat dolor tempor.",
          spans: [],
        },
      ],
    },
    labelTitle: {
      defaultValue: "Parameter",
    },
    descriptionTitle: {
      defaultValue: "Value",
    },
    items: {
      defaultValue: [
        {
          label: "Power",
          description: "Powered by built in USB cable with integrated switch",
        },
        {
          label: "Dimensions",
          description: "20cm x 20cm x 20cm",
        },
        {
          label: "Weight",
          description: "100g",
        },
        {
          label: "Storage",
          description: "2GB MicroSD Card",
        },
        {
          label: "Recording Length",
          description:
            "Comes preloaded with Cheshire Dawn Chorus, a 176 min field recording.",
        },
      ],
    },
  },
};

export const Default = (props: TTechSpecsProps) => {
  return <UnwrappedTechSpecs {...props} />;
};
