import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col justify-center items-center p-24 bg-primaryBg/10 w-[80%]  ">
      <h1 className="text-3xl font-bold text-textBg">Hello, Next.js 15</h1>
      <button className="mt-4 px-4 py-2 bg-primaryBg/80 text-textBg rounded">
        Click Me
      </button>
    </div>
  );
}
