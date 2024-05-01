import React from "react";
import PropTypes from "prop-types";
import { PasswordButton } from "../button/PasswordButton";

export const Input = React.forwardRef((props, ref) => {
  const { children, password, className, ...rest } = props;
  return (
    <div className="flex flex-col p-4 relative ">
      <label
        htmlFor={rest.name}
        className="flex items-center gap-2 font-semibold"
      >
        {children}
      </label>
      <input
        {...rest}
        className={`p-2 rounded-lg bg-slate-100 ${className}`}
        ref={ref}
        required
      />
      {password ? <PasswordButton id={rest.name} className={rest.name} /> : ""}
    </div>
  );
});

Input.displayName = "Input";
Input.propTypes = {
  children: PropTypes.any,
  password: PropTypes.bool,
  className: PropTypes.string,
};
