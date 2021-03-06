import React from "react";
import "./CustomLink.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? "link-active" : "inactive"} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
