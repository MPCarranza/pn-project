import Link from "next/link";
import { NavigateButton } from "./NavigateButton";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <header className="py-8 m-2 text-white xl:py-12 bg-none">
      <div className="container flex items-center justify-between py-3 mx-auto border rounded-full backdrop-filter backdrop-blur-lg border-blacky/90">
        {/* logo */}
        <Link href="/">
          <h1 className="mx-10 text-2xl font-AgrandirWideItalic text-blacky">
            pn-project
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="items-center hidden gap-8 mx-10 xl:flex">
          <Nav />

          <NavigateButton
            href="/patchnotes"
            className="bg-amber-300 text-black rounded-full px-3 font-AgrandirRegular border-2 border-black shadow-[5px_5px_0px_0px_rgba(44,44,44,1)] transition-transform hover:scale-95 ">
            patch Notes
          </NavigateButton>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
