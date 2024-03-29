"use client";

import { ChapterImageResponse } from "@/type/response";
import Image from "next/image";
import { useState } from "react";

const ChapterImageList = ({
  chapterImage,
}: {
  chapterImage: ChapterImageResponse;
}) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);
  return (
    <Image
      alt={chapterImage.id.toString()}
      src={isImgError ? chapterImage.toonImageUrl : chapterImage.toonImageUrl}
      width={700}
      height={2000}
      // priority
      onError={() => setIsImgError(true)}
      // layout="fill"
      // blurDataURL={BLUR_IMAGE_SRC}
      // placeholder="blur"
    />
  );
};

export default ChapterImageList;
