import { RichText } from "prismic-reactjs";
import { productTourStyles } from "./productTourStyles";
import { TProductTourProps, TProductTourSlice } from "./ProductTour";
import ProductModel from "./ProductModel";
import React, { useCallback, useEffect, useState } from "react";

function JumpToItem({ item, index, setCurrentItem, isActive = false }) {
  const jumpTo = useCallback(() => {
    setCurrentItem(index);
  }, [index, setCurrentItem]);
  return (
    <li css={productTourStyles.jumpTo}>
      <button
        css={productTourStyles.jumpToButton}
        style={{ background: isActive ? "#eee" : "transparent" }}
        onClick={jumpTo}
      >
        {item.title}
      </button>
    </li>
  );
}

export function UnwrappedProductTour({ items = [] }: TProductTourProps) {
  const [currentItemIndex, setCurrentItem] = useState(0);
  const currentItem = items[currentItemIndex];

  useEffect(() => {
    if (currentItemIndex > 0 && currentItemIndex >= items.length) {
      setCurrentItem(0);
    }
  }, [items, items.length, currentItemIndex]);

  const next = useCallback(() => {
    if (currentItemIndex + 1 < items.length) {
      setCurrentItem(currentItemIndex + 1);
    } else {
      setCurrentItem(0);
    }
  }, [currentItemIndex]);

  return (
    <div css={productTourStyles.container}>
      <header css={productTourStyles.header}>
        <h2 css={productTourStyles.title}>Features</h2>
        <ol css={productTourStyles.menu}>
          {items.map((item, index) => (
            <JumpToItem
              item={item}
              index={index}
              isActive={Boolean(index === currentItemIndex)}
              setCurrentItem={setCurrentItem}
              key={item.title}
            />
          ))}
        </ol>
      </header>
      <section css={productTourStyles.slider}>
        <ProductModel {...currentItem} />
        <div css={productTourStyles.featureDetails}>
          <h3 css={productTourStyles.featureTitle}>{currentItem?.title}</h3>
          <div css={productTourStyles.featureDescription}>
            <RichText render={currentItem?.description} />
          </div>

          <button onClick={next}>next</button>
        </div>
      </section>
    </div>
  );
}

function unwrapSlice(Component: typeof UnwrappedProductTour) {
  return ({ slice }: { slice: TProductTourSlice }) => (
    <Component items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedProductTour);
