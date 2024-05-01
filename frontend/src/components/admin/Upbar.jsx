import { FaBell } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
export const Upbar = (props) => {
  const { title, onClick } = props;

  return (
    <div className="bg-white shadow-lg lg:w-full w-full h-14 font-semibold flex items-center p-2 sticky top-0 z-10">
      <div className="flex justify-between items-center w-full p-8">
        <span className="text-xl">{title}</span>
        <ul className="flex gap-2">
          <li>
            <FaBell size={25} className="hover:text-slate-500" />
          </li>
          <li>
            <MdEmail size={25} />
          </li>
          <button className="lg:hidden" onClick={onClick}>
            <FaBars size={25} />
          </button>
        </ul>
      </div>
    </div>
  );
};

Upbar.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.any,
};
