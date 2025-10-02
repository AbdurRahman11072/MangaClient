import NewChapter_FollowedComic from "@/components/FollowedComic/newChapter_FollowedComic";

export default function Home() {
  return (
    <main className=" md:flex gap-5 p-1">
      <div className="md:w-[70%] lg:w-[75%] ">
        <NewChapter_FollowedComic />
      </div>
      <div className="">Side Content</div>
    </main>
  );
}
