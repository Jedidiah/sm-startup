import { css } from "@emotion/react";
import Link from "next/link";

export function Header() {
  return (
    <header
      css={css`
        background-color: #333;
        color: #eee;
        padding: 2rem;
        display: flex;
        flex-direction: row;
      `}
    >
      <h1
        css={css`
          flex-grow: 1;
          margin: 0;
          line-height: 1;
        `}
      >
        Whimsy
      </h1>
      <div
        css={css`
          display: block;
          padding: 0.5em 1em;
        `}
      >
        <Link href="/">Birdsong Box</Link>
      </div>
      <div
        css={css`
          display: block;
          padding: 0.5em 1em;
        `}
      >
        <Link href="/owl-speakers">Owl Speakers</Link>
      </div>
    </header>
  );
}
