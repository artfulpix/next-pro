"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <nav className="tw-p-4 tw-h-full">
      <ul className="tw-flex tw-justify-between">
        <div className="tw-flex tw-gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </div>
        <div>
          {status === "authenticated" ? (
            <div className="tw-flex tw-gap-4 tw-items-center">
              <Image
                src={`${session?.user?.image}`}
                width={"40"}
                height={"40"}
                alt=""
                className="tw-rounded-full"
              ></Image>
              <span className="tw-cursor-pointer" onClick={() => signOut()}>
                Log Out{" "}
              </span>
            </div>
          ) : (
            <span className="tw-cursor-pointer" onClick={() => signIn()}>
              Log In{" "}
            </span>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
