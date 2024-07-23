"use client";
import "./navbar.scss";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = ({}) => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("#nav-item");
    navLinks.forEach((link) => {
      if (link.pathname === window.location.pathname)
        link.classList.add("navbar-h2-active");
    });
  }, []);
  return (
    <div className="navbar-main">
      <div className="navbar-components">
        <Link id="nav-item" href="/">
          home
        </Link>
        <Link id="nav-item" href="/onair">
          on-air
        </Link>
        <Link id="nav-item" href="/">
          shows
        </Link>
        <Link id="nav-item" href="/">
          team
        </Link>
        <Link id="nav-item" href="/">
          links
        </Link>
        <Link id="nav-item" href="/">
          faqs
        </Link>
        <Link id="nav-item" href="/">
          contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
