import React from "react";
import { TSiteFooterProps, TSiteFooterSlice } from "./SiteFooter";

export const UnwrappedSiteFooter = (props: TSiteFooterProps) => (
  <section>Site Footer</section>
);

function unwrapSlice(Component: typeof UnwrappedSiteFooter) {
  return ({ slice }: { slice: TSiteFooterSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedSiteFooter);
