import NewChapter_FollowedComic from "@/components/FollowedComic/newChapter_FollowedComic";
import LatestHitCoimc from "@/components/Latest_Hit_Comic/latesHitComic";

export default function Home() {
  return (
    <main className=" md:flex gap-5 p-1">
      <div className="md:w-[70%] lg:w-[75%] space-y-5">
        <NewChapter_FollowedComic />
        <LatestHitCoimc />
      </div>
      <div className="">Side Content</div>
    </main>
  );
}
