import { UnwrappedSiteNavigation } from ".";
import { TSiteNavigationProps } from "./SiteNavigation";

// mocks.forEach((variation) => {
//   storiesOf(model.name, Component).add(variation.name, () => <Component slice={variation} />);
// });

export default {
  title: "slices/SiteNavigation",
  component: UnwrappedSiteNavigation,
  argTypes: {
    siteTitle: {
      control: "text",
      defaultValue: "Birdhouse",
    },
    siteLogo: {
      control: { disable: true },
      defaultValue: {
        dimensions: {
          width: 900,
          height: 500,
        },
        alt: "Placeholder image",
        copyright: null,
        url:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop",
      },
    },
  },
};

export const Default = (props: TSiteNavigationProps) => {
  return <UnwrappedSiteNavigation {...props} />;
};
