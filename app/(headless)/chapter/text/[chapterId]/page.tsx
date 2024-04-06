import { getSvPrevNext } from "@/apis/client/getSvChapterImage";
import ChapterText from "./_components/ChapterText";
import { getSvChapterText } from "@/apis/client/getSvChapterText";

export default async function ChapterTextPage({
  params,
}: {
  params: { chapterId: number };
}) {
  const { chapterId } = params;
  const { data: chapterText } = await getSvChapterText(chapterId);
  const { data: prevNextInfo } = await getSvPrevNext(chapterId);

  return (
    <ChapterText
      chapterText={chapterText}
      prevNextInfo={prevNextInfo}
      chapterId={chapterId}
    />
  );
}