"use client";
import { AuthContext } from "../component/provider";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className=" flex items-center justify-between">
      <h2 className="text-5xl">Todo App</h2>
      <ul className="text-xl font-semibold">
        <Link className="mx-2" href={"/"}>
          Home
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
