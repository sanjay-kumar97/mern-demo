import { Image } from "@mantine/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 md:py-3 md:px-8 bg-[#1f1f1f] flex justify-between items-center text-white">
      <Image
        src="https://sbr-technologies.com/wp-content/uploads/2021/06/mern.png"
        width={180}
        fallbackSrc={"https://placehold.co/180x50?text=LogoHere"}
        className="hidden lg:block drop-shadow-[0_1px_2px_rgba(255,255,255,0.75)]"
      />
      <h1 className="hidden lg:block font-semibold text-2xl">LEARN MERN</h1>
      <div className="lg:hidden flex flex-col items-center gap-2">
        <Image
          src="https://sbr-technologies.com/wp-content/uploads/2021/06/mern.png"
          width={75}
          fallbackSrc={"https://placehold.co/180x50?text=LogoHere"}
          className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.75)]"
        />
        <h1 className="font-semibold text-xs text-center">LEARN MERN</h1>
      </div>
      <div className="md:basis-[180px] pr-4 text-right">
        <Link to="/" className="underline underline-offset-1">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
