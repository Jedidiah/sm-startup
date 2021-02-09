import { UnwrappedSiteFooter } from ".";
import { TSiteFooterProps } from "./SiteFooter";

export default {
  title: "slices/SiteFooter",
  component: UnwrappedSiteFooter,
};

export const Default = (props: TSiteFooterProps) => {
  return <UnwrappedSiteFooter {...props} />;
};
