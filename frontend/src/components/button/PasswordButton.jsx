import { useState } from "react";
import PropTypes from "prop-types";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const PasswordButton = (props) => {
  const { id } = props;
  const [buttonPass, setButtonPass] = useState(false);
  const passwordButton = () => {
    const password = document.querySelector(`#${id}`);
    if (buttonPass === false) {
      password.type = "text";
      setButtonPass(true);
    } else {
      password.type = "password";
      setButtonPass(false);
    }
  };
  return (
    <button
      type="button"
      className={`absolute top-[3.2rem] right-6`}
      onClick={passwordButton}
    >
      {buttonPass ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
    </button>
  );
};

PasswordButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};
