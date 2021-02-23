import { css } from "@emotion/react";

export const productTourStyles = {
  container: css`
    display: flex;
    flex-direction: row;
    min-height: 60vh;
    background: #fff;
    position: relative;
    flex-wrap: wrap;
    max-width: 80rem;
    margin: auto;
  `,
  jumpTo: css`
    padding: 0.25rem;
    list-style: none;
    margin: 0;
  `,
  jumpToButton: css`
    width: 100%;
    border-radius: 2rem;
    border: 0 none transparent;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.2rem;
  `,
  header: css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 80rem;
    margin: auto;
    padding: 2rem 1rem;
  `,
  title: css`
    font-size: 3rem;
    margin: 0;
    padding: 0;
    line-height: 1;
    flex-grow: 1;
  `,
  menu: css`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0 0 0;
    text-indent: 0;
    margin: 0;
  `,
  slider: css`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 835px) {
      flex-direction: row;
    }
  `,
  featureDetails: css`
    max-width: 100%;
    padding: 2rem;
    align-self: flex-end;
    line-height: 1.5;
    padding-bottom: 4rem;
    @media (min-width: 835px) {
      width: 20rem;
    }
  `,
  featureTitle: css`
    font-size: 2rem;
  `,
  featureDescription: css`
    line-height: 1.5;
  `,
  canvasContainer: css`
    flex-grow: 1;
    overflow: hidden;
    min-height: 60vh;
    max-height: 60vh;
  `,
};
