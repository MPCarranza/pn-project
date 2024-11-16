"use client";
import React from "react";

import { usePathname, useRouter } from "next/navigation";

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
    path: "/class guide",
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (link: LinkItem) => {
    if (link.path.includes("#")) {
      const [basePath, hash] = link.path.split("#");

      if (pathname === basePath) {
        // Si ya estamos en la página correcta, desplazarse al elemento con el hash
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Si estamos en otra página, navegar a la página y luego desplazarse al hash
        router.push(link.path);
      }
    } else {
      // Navegación normal
      router.push(link.path);
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleNavigation(link)}
          className={`${
            link.path === pathname && "bg-black "
          } rounded-full bg-black px-2 font-AgrandirRegular border-2 border-blacky shadow-[5px_5px_0px_0px_rgba(44,44,44,1)] transition-transform hover:scale-95 `}>
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
