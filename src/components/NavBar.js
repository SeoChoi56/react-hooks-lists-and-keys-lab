import React from "react";



function NavBar() {
  const links = ["home", "about", "projects"];
  const showLinks = links.map((link) => {
    let hashLink = "#" + link
    return <a key={link} href={hashLink}>{link}</a>
  })
  return <nav>{showLinks}</nav>;
}

export default NavBar;
