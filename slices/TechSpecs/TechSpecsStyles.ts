import { css } from "@emotion/react";

export const techSpecStyles = {
  container: css`
    padding: 2rem;
    max-width: 80em;
    margin: auto;
  `,
  title: css`
  font-size: 3rem;
  margin: 0 0 3rem 0;
}
  `,
  specList: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: calc(70% - 4rem);
    min-width: 400px;
    border-top: 1px dotted #ccc;
    border-bottom: 1px dotted #ccc;
    flex-grow: 1;
    padding: 2rem 0;
    margin: 0 0 2rem 2rem;

    & > dt,
    & > dd {
      flex-basis: 60%;
      padding: 0;
      margin: 0;
      text-indent: 0;
      line-height: 1.5;
      margin-bottom: 2em;
    }

    & > dt {
      font-weight: bold;
      text-align: right;
      padding-right: 3em;
      flex-basis: 30%;
    }

    & > dd + dd {
      margin-left: 50%;
    }
  `,
  content: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  description: css`
    flex-basis: calc(30%);
    flex-grow: 1;
    min-width: 300px;
    padding: 0 0 2rem 0;
    & p {
      margin-top: 0;
      margin-bottom: 2em;
    }
  `,
};
