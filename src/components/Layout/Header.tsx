import { FC, memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const SearchBar = dynamic(() => import("components/SearchBar"));

const Header: FC = () => (
  <nav className="nav pt-5 h-32 pb-5 md:pb-0 md:h-20">
    <div className="container">
      <ul className="flex items-center justify-between flex-wrap">
        <li className="text-center mb-3 md:mb-0 w-full md:w-auto md:text-left text-xl">
          <Link href="/?clear=true" as="/">
            <a>React Infinite Card Example</a>
          </Link>
        </li>
        <li className="w-full md:w-auto px-5">
          <SearchBar />
        </li>
      </ul>
    </div>
  </nav>
);

export default memo(Header);
