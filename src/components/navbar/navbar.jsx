"use client";
import "./navbar.scss";
import Link from "next/link";
const Navbar = ({}) => {
  return (
    <div className="navbar-main">
      <div className="navbar-components">
        <Link href="/">home</Link>
        <Link href="/">on-air</Link>
        <Link href="/">shows</Link>
        <Link href="/">team</Link>
        <Link href="/">links</Link>
        <Link href="/">faqs</Link>
        <Link href="/">contact us</Link>
      </div>
    </div>
  );
};

export default Navbar;
