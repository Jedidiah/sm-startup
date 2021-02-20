import { RichText } from "prismic-reactjs";
import React, { useState } from "react";
import { TProductHeaderProps, TProductHeaderSlice } from "./ProductHeader";
import { productHeaderStyles } from "./productHeaderStyles";

export const UnwrappedProductHeader = (props: TProductHeaderProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <section css={productHeaderStyles.container}>
      <aside css={productHeaderStyles.imagesContainer}>
        <img
          css={productHeaderStyles.mainImage}
          style={{ width: "100%" }}
          src={props.images[currentImage].image.url}
          alt={props.images[currentImage].image.alt}
        />

        <ul css={productHeaderStyles.thumbnails}>
          {props.images?.map((image, index) => (
            <li
              key={image.image.thumbnail.url}
              onClick={() => {
                setCurrentImage(index);
              }}
            >
              <img
                css={
                  Boolean(index === currentImage)
                    ? productHeaderStyles.selectedThumbnail
                    : productHeaderStyles.thumbnail
                }
                src={image.image.thumbnail.url}
                alt={image.image.alt}
              />
            </li>
          ))}
        </ul>
      </aside>
      <div css={productHeaderStyles.details}>
        <hgroup css={productHeaderStyles.titleGroup}>
          <h1 css={productHeaderStyles.title}>{props.title}</h1>
          <h2 css={productHeaderStyles.subtitle}>{props.subtitle}</h2>
        </hgroup>

        <RichText render={props.description} />
        <p css={productHeaderStyles.price}>£{props.price}</p>
        <p>
          <button css={productHeaderStyles.buyNowButton}>
            Order your own birdbox
          </button>
        </p>
      </div>
    </section>
  );
};

function unwrapSlice(Component: typeof UnwrappedProductHeader) {
  return ({ slice }: { slice: TProductHeaderSlice }) => (
    <Component {...slice.primary} images={slice.items} />
  );
}

export default unwrapSlice(UnwrappedProductHeader);
