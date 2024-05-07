import { AiFillDashboard } from "react-icons/ai";
import { FaArrowLeft, FaGear, FaHouse, FaPen, FaUser } from "react-icons/fa6";
import PropTypes from "prop-types";
import { LinkSide } from "../components/admin/LinkSide";
import { Profile } from "../components/admin/Profile";

export const AdminSidebar = (props) => {
  const { username, isOpen } = props;
  return (
    <aside
      className={`bg-red-800 h-full lg:w-[20%] z-20 w-1/2 left-0 transition-all lg:fixed ${
        isOpen
          ? " fixed ease-in-out duration-1000"
          : "-translate-x-full ease-in-out duration-1000  lg:translate-x-0 absolute"
      }`}
    >
      <div className="p-4">
        <section className="flex items-center justify-center gap-2 pb-10">
          <img src="/firebooklylogo.svg" className="invert w-16" />
          <span className="font-bold text-xl text-white">Admin</span>
        </section>
        <Profile username={username} />
        <section className="flex flex-col justify-center text-white">
          <span className="font-semibold py-4">Navigation</span>
          <ul>
            <LinkSide to={"/admin"}>
              <AiFillDashboard size={20} />
              <span>Dashboard</span>
            </LinkSide>
            <LinkSide to={"/admin/books"}>
              <FaPen size={20} />
              Books
            </LinkSide>
            <LinkSide to={"/admin/member"}>
              <FaUser size={20} />
              <span>Data member</span>
            </LinkSide>
            <LinkSide to={"/"}>
              <FaGear size={20} />
              <span>Account Settings</span>
            </LinkSide>
            <LinkSide to={"/"}>
              <FaArrowLeft size={20} />
              <span>Log out</span>
            </LinkSide>
            <LinkSide to="/">
              <FaHouse size={20} />
              <span>Back to Homepage </span>
            </LinkSide>
          </ul>
        </section>
      </div>
    </aside>
  );
};

AdminSidebar.propTypes = {
  username: PropTypes.any,
  isOpen: PropTypes.any,
};
