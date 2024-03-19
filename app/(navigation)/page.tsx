import ToonCard from "@/components/domain/toon/ToonList";
import { getServerToken } from "@/utils/auth";

export default async function Home() {
  const token = getServerToken();
  // const params = {
  //   size: 100,
  // };
  // const { data } = await getToonSeverList(params);

  return <ToonCard token={token} />;
}
