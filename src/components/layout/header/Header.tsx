"use client";

import { Input } from "@/components/ui/input";
import { Compass, Heart, House, SearchIcon, SquarePlus } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export const Header = () => {
  return (
    <header
      className={`lg:max-w-[1040px] lg:m-auto bg-white flex items-center justify-between
      gap-1.5 p-4 w-full`}
    >
      <Image
        src={"/images/logo.svg"}
        priority
        alt="logo"
        width={104}
        height={30}
      />
      <div className="hidden md:block relative md:w-[280px]">
        <SearchIcon
          className={`pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px]
          -translate-y-1/2 text-gray-500 peer-focus:text-gray-900`}
        />
        <Input
          type="search"
          placeholder="serch"
          className="w-full pl-9 bg-card"
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        {/* Home */}
        <Link href="/" className="p-2">
          <House width={22} height={22} />
        </Link>
        {/* Add post */}
        <Link href="/" className="p-2">
          <SquarePlus width={22} height={22} />
        </Link>
        {/* Some */}
        <Link href="/" className="p-2">
          <Compass width={22} height={22} />
        </Link>
        {/* Add like */}
        <Link href="/" className="p-2">
          <Heart width={22} height={22} />
        </Link>
      </div>
    </header>
  );
};
