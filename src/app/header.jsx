import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <nav className=" flex items-center justify-between">
      <h2 className="text-5xl">Todo App</h2>
      <ul className="text-xl font-semibold">
        <Link className="mx-2" href={"/"}>
          Home
        </Link>
        <Link className="mx-2" href={"/about"}>
          About
        </Link>
        <Link className="mx-2" href={"/login"}>
          Login
        </Link>
      </ul>
    </nav>
  );
};

export default header;
