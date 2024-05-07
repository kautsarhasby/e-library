import React from "react";
import PropTypes from "prop-types";
import { PasswordButton } from "../button/PasswordButton";

const InputSystem = (props) => {
  const { children } = props;
  return <div className="flex flex-col p-4 relative ">{children}</div>;
};

const Input = React.forwardRef((props, ref) => {
  const { children, password, className, ...rest } = props;
  return (
    <>
      <Label>{children}</Label>
      <input
        {...rest}
        className={`p-2 rounded-lg bg-slate-100 ${className}`}
        ref={ref}
        required
      />
      {password ? <PasswordButton id={rest.name} className={rest.name} /> : ""}
    </>
  );
});

const Label = (props) => {
  const { children, ...rest } = props;
  return (
    <label {...rest} className="flex items-center gap-2 font-semibold">
      {children}
    </label>
  );
};

const TextArea = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="flex flex-col p-4 relative ">
      <Label>{children}</Label>
      <textarea
        rows={5}
        className="rounded-lg bg-slate-100 p-2"
        {...rest}
      ></textarea>
    </div>
  );
};

Input.displayName = "Input";
Input.propTypes = {
  children: PropTypes.any,
  password: PropTypes.bool,
  className: PropTypes.string,
};
InputSystem.Input = Input;
InputSystem.TextArea = TextArea;

export default InputSystem;
