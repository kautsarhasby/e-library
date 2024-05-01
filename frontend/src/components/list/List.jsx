import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const List = (props) => {
  const { children, className, ...rest } = props;
  return (
    <NavLink
      {...rest}
      className={`border-b-2 flex justify-between p-2 ${className}`}
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
