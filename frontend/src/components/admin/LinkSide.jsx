import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const LinkSide = (props) => {
  const location = useLocation();
  const { to, children } = props;
  const [activeLink, setActiveLink] = useState(to);

  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname);
  }, [location]);

  return (
    <div>
      <NavLink
        to={to}
        className={`flex items-center gap-2 py-4 relative after:content-[""] after:absolute after:h-[2px] after:bg-white after:left-0 after:right-0 after:bottom-0 after:w-[0%]
    hover:after:w-full after:transition-all after:ease-in-out"${
      activeLink == to ? "after:bg-white after:w-full font-bold" : ""
    }`}
      >
        {children}
      </NavLink>
    </div>
  );
};

LinkSide.propTypes = {
  to: PropTypes.any,
  children: PropTypes.any,
};
