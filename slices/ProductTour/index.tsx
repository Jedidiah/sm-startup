import { animated, config, useTransition } from "react-spring";
import { Canvas, useFrame } from "react-three-fiber";
import { RichText } from "prismic-reactjs";
import {
  TProductTourItem,
  TProductTourProps,
  TProductTourSlice,
} from "./ProductTour";
import ProductModel from "./ProductModel";
import React, { useCallback, useEffect, useRef, useState } from "react";

function JumpToItem({ item, index, setCurrentItem }) {
  const jumpTo = useCallback(() => {
    setCurrentItem(index);
  }, [index, setCurrentItem]);
  return (
    <button onClick={jumpTo}>
      {index + 1}: {item.title}
    </button>
  );
}

export function UnwrappedProductTour({ items = [] }: TProductTourProps) {
  const [currentItemIndex, setCurrentItem] = useState(0);
  const currentItem = items[currentItemIndex];
  const next = useCallback(() => {
    if (currentItemIndex + 1 < items.length) {
      setCurrentItem(currentItemIndex + 1);
    } else {
      setCurrentItem(0);
    }
  }, [currentItemIndex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "80vh",
        background: "#ccc",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      <ProductModel {...currentItem} />
      <div style={{ width: "20rem", maxWidth: "100%", padding: "2rem" }}>
        <h3>{currentItem.title}</h3>
        <RichText render={currentItem.description} />
        <button onClick={next}>next</button>
      </div>
      <div style={{ width: "100%" }}>
        {items.map((item, index) => (
          <JumpToItem
            item={item}
            index={index}
            setCurrentItem={setCurrentItem}
          />
        ))}
      </div>
    </div>
  );
}

function unwrapSlice(Component: typeof UnwrappedProductTour) {
  return ({ slice }: { slice: TProductTourSlice }) => (
    <Component items={slice.items} />
  );
}

export default unwrapSlice(UnwrappedProductTour);
