import { css } from "@emotion/react";

export const emailSignupStyles = {
  container: css`
    background-color: #eee;
    text-align: center;
    padding: 4rem 1rem;
  `,
  title: css`
    font-size: 3rem;
    margin: 0;
  `,
  subtitle: css`
    font-size: 1.2rem;
    max-width: 45em;
    margin: 2rem auto;
  `,
  form: css`
    display: flex;
    flex-wrap: wrap;
    max-width: 48rem;
    margin: 0 auto;
    min-height: 53px;
  `,
  input: css`
    border: 1px solid #333;
    flex-grow: 3;
    font-size: 1.25em;
    outline: 0 none;
    padding: 0.75rem 1rem;
    max-width: 100%;
  `,
  success: css`
    background: #fff;
    border: 1px solid green;
    font-size: 1.25em;
    padding: 0.75rem 1rem;
    max-width: 48rem;
    color: green;
    margin: 0 auto;
    border-radius: 6px;
  `,
  inputFocus: css`
    outline: lightblue 2px solid;
  `,
  button: css`
    background-color: #333;
    border: 1px solid #333;
    color: #fff;
    cursor: pointer;
    display: block;
    flex-grow: 1;
    font-weight: bold;
    font-size: 1.25em;
    letter-spacing: 1px;
    outline: 0 none;
    padding: 0.75rem;
    text-transform: uppercase;
    max-width: 100%;

    input + & {
      margin-left: -1px;
    }
  `,
  buttonFocus: css`
    background-color: #444;
    outline: lightblue 2px solid;
  `,
};
