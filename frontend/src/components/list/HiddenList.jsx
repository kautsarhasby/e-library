import { FaUserCircle } from "react-icons/fa";
import { List } from "./List";
import PropTypes from "prop-types";

export const HiddenList = (props) => {
  const { username, onClick, isOpen } = props;
  return (
    <>
      <main
        className={`transition-all absolute w-full bg-white ease-in-out duration-1000 ${
          isOpen ? "" : " -translate-y-full"
        }`}
      >
        <ul className="lg:hidden p-4">
          <List to="/login" className={username ? "hidden" : "block"}>
            <span>Masuk</span>
            <span>&rsaquo; </span>
          </List>
          <List className={username ? "block" : "hidden"}>
            <div className="p-4 flex gap-2 items-center font-bold">
              <FaUserCircle size={30} />
              <span>{username}</span>
            </div>
          </List>
          {username == "admin" && (
            <List to="/admin" className="p-1 block">
              Admin Page
            </List>
          )}
          <List to="/register" className={username ? "hidden" : ""}>
            <span>Daftar</span>
            <span>&rsaquo; </span>
          </List>
          <List>
            <span>Pengaturan</span>
            <span>&rsaquo; </span>
          </List>
          <List to={username ? "" : "/login"}>
            <span>Keranjang</span>
            <span>&rsaquo; </span>
          </List>
          <List>
            <span>Bantuan</span>
            <span>&rsaquo; </span>
          </List>
          <List
            to="/login"
            className={username ? "" : "hidden"}
            onClick={onClick}
          >
            <span className="font-bold">Log out</span>
            <span>&rsaquo; </span>
          </List>
        </ul>
      </main>
    </>
  );
};

HiddenList.propTypes = {
  username: PropTypes.any,
  onClick: PropTypes.func,
  isOpen: PropTypes.any,
};
