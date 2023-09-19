import React from "react";

const Nav = ({links}) => {
  return (
    <nav>
      <ul className="nav nav-pills">
        {links.map(({name, url}, index) => (
          <li>
            <a key={name} href={url}> {name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
