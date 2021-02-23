import { RichText } from "prismic-reactjs";
import React, { Fragment } from "react";
import { TTechSpecsProps, TTechSpecsSlice } from "./TechSpecs";
import { techSpecStyles } from "./TechSpecsStyles";

export function UnwrappedTechSpecs(props: TTechSpecsProps) {
  return (
    <section css={techSpecStyles.container}>
      <h2 css={techSpecStyles.title}>{props.title}</h2>
      <div css={techSpecStyles.content}>
        <div css={techSpecStyles.description}>
          <RichText render={props.description} />
        </div>

        <dl css={techSpecStyles.specList}>
          {props.items?.slice(0, 5)?.map((term) => (
            <Fragment key={`${term.label}-${term.description}`}>
              <dt>{term.label}</dt>
              <dd>{term.description}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}

function unwrapSlice(Component: typeof UnwrappedTechSpecs) {
  return ({ slice }: { slice: TTechSpecsSlice }) => (
    <Component {...slice.primary} items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedTechSpecs);
