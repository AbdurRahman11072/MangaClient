import React from "react";
import {
  House,
  BookCopy,
  FileHeart,
  ScanSearch,
  CircleUser,
} from "lucide-react";
import Link from "next/link";

const menu = [
  {
    name: "Home",
    path: "/",
    icons: House,
  },
  {
    name: "Series",
    path: "/series",
    icons: BookCopy,
  },
  {
    name: "Bookmark",
    path: "/home",
    icons: FileHeart,
  },
  {
    name: "Search",
    path: "/advance_search",
    icons: ScanSearch,
  },
  {
    name: "Profile",
    path: "profile",
    icons: CircleUser,
  },
];

const BottomNavbar = () => {
  return (
    <div className="w-full h-16  fixed -bottom-1 z-50 bg-background text-white border-t border-t-white/10 px-6 py-5  md:hidden">
      <ul className="flex h-full gap-4 justify-between items-center font-sans  ">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex flex-col items-center justify-center text-center text-sm"
          >
            <item.icons />
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;
