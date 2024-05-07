import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const List = (props) => {
  const { children, className, ...rest } = props;
  return (
    <NavLink
      {...rest}
      className={` flex justify-between p-2 ${className} hover:bg-slate-200 transition-all rounded-md`}
    >
      {children}
    </NavLink>
  );
};

List.propTypes = {
  onClick: PropTypes.any,
  children: PropTypes.any,
  linked: PropTypes.any,
  className: PropTypes.any,
};
