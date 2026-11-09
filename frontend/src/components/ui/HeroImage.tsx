"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { siteImages } from "../../constants/site-images";

export default function HeroImage(props: ImageProps) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      onError={() => {
        if (src !== siteImages.heroFallback) setSrc(siteImages.heroFallback);
      }}
    />
  );
}
