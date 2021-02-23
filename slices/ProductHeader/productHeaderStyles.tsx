import { css } from "@emotion/react";

export const productHeaderStyles = {
  container: css`
    background-color: #eee;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-size: 3rem;
    margin: 0;
  `,
  subtitle: css`
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  `,
  titleGroup: css`
    margin-bottom: 2rem;
  `,
  details: css`
    padding: 2rem;
    min-width: 20rem;
    max-width: 30rem;
    flex: 1;
    line-height: 1.4;
  `,
  price: css`
    font-size: 2rem;
    font-weight: bold;
  `,
  buyNowButton: css`
    font-size: 1rem;
    border: 0 none;
    background-color: #222;
    color: #fff;
    padding: 1rem 3rem;
    letter-spacing: 1px;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
      background-color: #333;
    }
  `,
  imagesContainer: css`
    max-width: 900px;
    flex: 3;
  `,
  thumbnails: css`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 1em 0;
    margin: 0;
    width: 100%;
  `,
  selectedThumbnail: css`
    opacity: 1;
    border: 6px solid yellow;
    margin: -6px;
    position: relative;
    z-index: 1;
    max-width: calc(100% + 12px);
  `,
  mainImage: css`
    max-width: 100%;
  `,
  thumbnail: css`
    opacity: 0.4;
    max-width: 100%;
    cursor: pointer;
  `,
};
