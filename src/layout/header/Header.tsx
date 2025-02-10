"use client";

import { Input } from "@/components/ui/input";
import { Compass, Heart, House, SquarePlus } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between h-20 w-full items-center gap-1.5 py-8 px-8">
      <Image
        src={"/images/logo.svg"}
        priority
        alt="logo"
        width={104}
        height={30}
      />
      <Input type="search" placeholder="serch" className="w-1/3" />
      <div className="flex items-center justify-center gap-2">
        <Link href="/" className="py-2 px-3">
          <House />
        </Link>
        <Link href="/" className="py-2 px-3">
          <SquarePlus />
        </Link>
        <Link href="/" className="py-3 px-3">
          <Compass />
        </Link>
        <Link href="/" className="p-[117px]">
          <Heart />
        </Link>
      </div>
    </header>
  );
};
