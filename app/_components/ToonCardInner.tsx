"use client";

import Icon from "@/components/common/Icon/Icon";
import { BLUR_IMAGE_SRC } from "@/constants/blurImageSrc";
import { ToonResponse } from "@/type/response";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ToonCardInner: React.FC<{ item: ToonResponse }> = ({ item }) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);

  const today = dayjs().format("YYYY-MM-DD");
  const updateDate = dayjs(item.updateDate).format("YYYY-MM-DD");
  const dateDifference = dayjs(today).diff(updateDate, "day");
  const isDifferenceGreaterThan10Days = dateDifference < 10;

  return (
    <li>
      <Link
        href={`/chapter/${item.id}`}
        className="link block bg-white rounded-lg shadow-md overflow-hidden sm:w-32"
        // prefetch={false}
      >
        <div className="w-full h-32 relative">
          <Image
            alt={item.title}
            // src={"/images/blur.jpg"}
            // src={item.imagePath}
            src={!isImgError ? item.imagePath : "/images/blur.jpg"}
            // priority={true}
            // className="w-full h-full"
            // width={200}
            // height={300}
            layout="fill"
            // quality={30}
            unoptimized={true}
            onError={() => setIsImgError(true)}
            blurDataURL={BLUR_IMAGE_SRC}
            placeholder="blur"
          />
        </div>
        <div className="p-2 min-h-[84px]">
          <span className="text-md flex items-center">
            {isDifferenceGreaterThan10Days && (
              <Icon
                name="ARROW_CIRCLE_UP"
                color="rose-500"
                size="xl"
                classNameList={["relative", "right-1", "text-rose-500"]}
              />
            )}
            <span
              className={`truncate relative ${
                isDifferenceGreaterThan10Days && "right-1"
              }`}
            >
              {item.title}
            </span>
          </span>
          <span className="block text-blue-600 text-sm truncate">
            {item.genre}
          </span>
          <span className="flex items-center">
            <span className="text-sm truncate text-gray-400 flex-grow">
              {item.updateDate ? item.updateDate.toString() : ""}
            </span>
            <Icon name="FAVORITE" color="rose-600" size="sm" />
            <span className="text-sm text-rose-600">{item.activedCount}</span>
          </span>
        </div>
      </Link>
    </li>
  );
};

export default ToonCardInner;
