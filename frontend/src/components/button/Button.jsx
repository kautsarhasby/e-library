import PropTypes from "prop-types";

export const Button = (props) => {
  const { children, color, hover, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${color} ${
        hover && `hover:${hover}`
      } text-white p-2 rounded-md font-semibold `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  hover: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.any,
};
