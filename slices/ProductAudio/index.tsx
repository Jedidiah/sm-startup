import { RichText } from "prismic-reactjs";
import React, { useCallback, useEffect, useState } from "react";
import { TProductAudioProps, TProductAudioSlice } from "./ProductAudio";
import { productAudioStyles } from "./productAudioStyles";
import { Howl, Howler } from "howler";

export const UnwrappedProductAudio = (props: TProductAudioProps) => {
  const [soundIsPlaying, setSoundIsPlaying] = useState<Boolean>(false);
  const [sound, setSound] = useState<Howl>(null);

  useEffect(() => {
    const howl = new Howl({
      src: ["/exampletrack.mp3"],
      onstop: () => {
        setSoundIsPlaying(false);
      },
      onplay: () => {
        setSoundIsPlaying(true);
      },
    });
    setSound(howl);

    return () => {
      howl?.unload();
    };
  }, []);

  const toggleSound = useCallback(() => {
    console.log(sound, soundIsPlaying);

    if (soundIsPlaying) {
      sound?.stop();
    } else {
      sound?.play();
    }
  }, [sound, soundIsPlaying]);

  return (
    <section
      css={productAudioStyles.containerOuter}
      style={{ backgroundImage: `url(${props.imageOff.url})` }}
    >
      <img
        css={productAudioStyles.player}
        src="/play.png"
        alt="Play"
        onClick={toggleSound}
      />
      <div
        css={
          soundIsPlaying
            ? productAudioStyles.containerInnerPlaying
            : productAudioStyles.containerInner
        }
        style={{ backgroundImage: `url(${props.imageOn.url})` }}
      >
        Audio
      </div>
    </section>
  );
};

function unwrapSlice(Component: typeof UnwrappedProductAudio) {
  return ({ slice }: { slice: TProductAudioSlice }) => (
    <Component {...slice.primary} />
  );
}

export default unwrapSlice(UnwrappedProductAudio);
