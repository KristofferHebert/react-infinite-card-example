import { FC, memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const SearchBar = dynamic(() => import("components/SearchBar"));

const Header: FC = () => (
  <nav className="nav pt-5">
    <div className="container">
      <ul className="flex items-center justify-between flex-wrap">
        <li className="text-xl">
          <Link href="/">
            <a>React Infinite Card Example</a>
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </div>
  </nav>
);

export default memo(Header);
