import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="tw-p-4 tw-h-full">
      <ul className="tw-flex tw-gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
