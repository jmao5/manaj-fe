"use client";

import { useEffect } from "react";

import LinkButton from "@/components/common/LinkButton";
import Image from "next/image";

export default function ErrorPage({
  error,
}: {
  error?: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="mb-20 mt-6 text-xl font-semibold">
        데이터 처리 중 오류가 발생했어요!
      </h2>
      <Image
        src="/images/error3.jpg"
        alt="에러 이미지"
        height={300}
        width={300}
      />
      <LinkButton href={"/"} className="mt-4">
        시작 페이지로 돌아가기
      </LinkButton>
    </div>
  );
}
