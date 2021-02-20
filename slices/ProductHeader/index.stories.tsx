import { UnwrappedProductHeader } from ".";
import { TProductHeaderProps } from "./ProductHeader";

export default {
  title: "slices/ProductHeader",
  component: UnwrappedProductHeader,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Birdsong Box",
    },
    subtitle: {
      control: "text",
      defaultValue: "Ambient bliss at the flick of a switch",
    },
    description: {
      control: "object",
      defaultValue: [
        {
          type: "paragraph",
          text:
            "Switch on birdsong as easily as you turn on a light. Listening to birdsong has proven benefits to mood, mental health and relaxation. Lockdown has been challenging for us all if you can't get to nature bring some of the benefits to you.",
          spans: [],
        },
        {
          type: "paragraph",
          text:
            "These small wooden birdboxes are handmade in Scotland using sustainable wood. The schematics for the insides are open-source so you are free to upgrade or customise your birdhouse as you see fit.",
          spans: [],
        },
      ],
    },
    price: {
      control: "number",
      defaultValue: 30,
    },
    images: {
      control: { type: "select", options: ["1 Image", "2 Images", "3 Images"] },
      defaultValue: "3 Images",
    },
  },
};

const exampleImages = [
  {
    image: {
      dimensions: {
        width: 900,
        height: 450,
      },
      alt: "Placeholder image",
      copyright: null,
      url:
        "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=450&fit=crop",
      thumbnail: {
        dimensions: {
          width: 300,
          height: 150,
        },
        alt: "Placeholder image",
        copyright: null,
        url:
          "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=300&h=150&fit=crop",
      },
    },
    youtube: {
      link_type: "Web",
      url: "http://twitter.com",
    },
    caption: "visualize viral bandwidth",
  },
  {
    image: {
      dimensions: {
        width: 900,
        height: 450,
      },
      alt: "Placeholder image",
      copyright: null,
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&h=450&fit=crop",
      thumbnail: {
        dimensions: {
          width: 300,
          height: 150,
        },
        alt: "Placeholder image",
        copyright: null,
        url:
          "https://images.unsplash.com/photo-1448375240586-882707db888b?w=300&h=150&fit=crop",
      },
    },
    youtube: {
      link_type: "Web",
      url: "http://twitter.com",
    },
    caption: "syndicate revolutionary schemas",
  },
  {
    image: {
      dimensions: {
        width: 900,
        height: 450,
      },
      alt: "Placeholder image",
      copyright: null,
      url:
        "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=450&fit=crop",
      thumbnail: {
        dimensions: {
          width: 300,
          height: 150,
        },
        alt: "Placeholder image",
        copyright: null,
        url:
          "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=300&h=150&fit=crop",
      },
    },
    youtube: {
      link_type: "Web",
      url: "http://twitter.com",
    },
    caption: "expedite holistic communities",
  },
];

const demoImages = {
  "1 Image": exampleImages.slice(0, 1),
  "2 Images": exampleImages.slice(0, 2),
  "3 Images": exampleImages,
};

export const Default = (props: TProductHeaderProps) => {
  return (
    <UnwrappedProductHeader
      {...props}
      images={demoImages[String(props.images)]}
    />
  );
};
