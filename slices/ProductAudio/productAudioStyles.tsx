import { css } from "@emotion/react";

export const productAudioStyles = {
  containerInner: css`
    background-color: #eee;
    background-size: cover;
    min-height: 50vh;
    height: 400px;
    transition: all ease-in-out 1s;
    opacity: 0;
    clip-path: circle(0% at 50% 50%);
  `,
  containerInnerPlaying: css`
    background-color: #eee;
    background-size: cover;
    min-height: 50vh;
    height: 400px;
    transition: all ease-in-out 3s;
    clip-path: circle(100% at 50% 50%);
  `,
  containerOuter: css`
    background-color: #eee;
    background-size: cover;
    min-height: 30vh;
    position: relative;
    background-position: bottom;
  `,
  player: css`
    position: absolute;
    width: 400px;
    height: 400px;
    z-index: 1;
    margin-left: -200px;
    margin-top: -200px;
    left: 50%;
    top: 50%;
    cursor: pointer;
  `,
};
