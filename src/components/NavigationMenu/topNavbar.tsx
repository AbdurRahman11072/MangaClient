import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  House,
  BookCopy,
  FileHeart,
  ScanSearch,
  Search,
  CircleUser,
  BellRing,
  LayoutDashboard,
  HandCoins,
  BadgeDollarSign,
  Cog,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const menu = [
  {
    name: "Home",
    path: "/home",
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
    name: "Advance Search",
    path: "/advance_search",
    icons: ScanSearch,
  },
];

const TopNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b-1 border-b-white/10 backdrop-blur-md  z-50">
      <div>
        <h1 className="text-xl font-serif">Comico</h1>
      </div>
      <ul className="gap-4 hidden font-sans md:flex ">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className=" flex justify-center  items-center gap-1 text-sm"
          >
            <item.icons />
            {item.name}
          </Link>
        ))}
      </ul>
      <div className=" flex  items-center gap-3 text-xl">
        <Search size={25} strokeWidth={1} />
        <BellRing size={25} strokeWidth={1} />
        <DropdownMenu>
          <DropdownMenuTrigger className="hidden md:block">
            <CircleUser size={30} strokeWidth={1} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-gray-900 text-md border-0">
            <DropdownMenuLabel className="justify-center">
              <div className=" justify-center items-center text-center">
                <Image
                  src="https://imgs.search.brave.com/i3nbvjda_fdWRr5oZ7OKctN61jXv332ZzEL3kPFijOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi91c2VyLWlj/b24tc3ZnLWRvd25s/b2FkLXBuZy05NzUz/MTQ4LnBuZz9mPXdl/YnAmdz0xMjg"
                  alt="User image"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
                <h3>Md. Abdur Rahmna</h3>
                <h3>rjrahman019@gmail.com</h3>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuItem>
              <LayoutDashboard color="white" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HandCoins color="white" /> Reward
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BadgeDollarSign color="white" /> Transaction
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Cog color="white" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuItem>
              <LogOut color="red" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default TopNavbar;
