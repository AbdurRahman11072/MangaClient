import AllSeries from "@/components/AllSeries/allSeries";
import NewChapter_FollowedComic from "@/components/FollowedComic/newChapter_FollowedComic";
import History from "@/components/History/history";
import LatestHitCoimc from "@/components/Latest_Hit_Comic/latesHitComic";

export default function Home() {
  return (
    <main className="  p-2 pb-10 space-y-5">
      <div className="md:flex gap-5 ">
        <div className="md:w-[70%] lg:w-[75%] space-y-5">
          <NewChapter_FollowedComic />
          <History />
          <LatestHitCoimc />
        </div>
        <div className="">Side Content</div>
      </div>
      <AllSeries />
    </main>
  );
}
