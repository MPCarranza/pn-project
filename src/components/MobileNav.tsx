"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/UiComponents/sheet";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "class guide",
    path: "/guidebalance",
  },

  {
    name: "patch notes",
    path: "/patchnotes",
  },
];

const MobileNav: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-blacky" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link href="/">
            <h1 className="text-2xl text-white font-AgrandirWideItalic">
              PN-PROJECT
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center gap-8 font-AgrandirRegular">
          {links.map((link: LinkItem, index: number) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={` text-xl capitalize text-white transition-all`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
