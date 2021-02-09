import React from "react";
import { TSiteNavigationProps, TSiteNavigationSlice } from "./SiteNavigation";

export function UnwrappedSiteNavigation(props: TSiteNavigationProps) {
  return (
    <section>
      {props.siteTitle}
      <img src={props.siteLogo.url} />
    </section>
  );
}

function unwrapSlice(Component: typeof UnwrappedSiteNavigation) {
  return ({ slice }: { slice: TSiteNavigationSlice }) => (
    <Component {...slice.primary} links={slice.items} />
  );
}

export default unwrapSlice(UnwrappedSiteNavigation);
