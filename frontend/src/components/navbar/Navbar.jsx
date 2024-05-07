import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingBasket, FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CartList } from "../list/CartList";

export const Navbar = (props) => {
  const { username, handleLogOut, isOpen, setIsOpen } = props;
  const [openProfile, setOpenProfile] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <main className="top-0 sticky shadow-lg">
      <section>
        <CartList openCart={openCart} />
        <nav className="w-full h-auto bg-white p-4 justify-around flex flex-col lg:flex-row relative">
          <section className="flex justify-between lg:flex-none items-center pb-4 lg:p-0 ">
            <NavLink to="/" className="flex items-center">
              <img src="/firebookly.svg" className="w-44" />
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-transform ease-in-out animate-jelly lg:hidden"
            >
              {isOpen ? (
                <ImCross size={30} className="animate-jelly" />
              ) : (
                <FaBars size={30} className="animate-jelly" />
              )}
            </button>
          </section>
          <section className="flex items-center gap-2 w-full lg:w-[60%]">
            <input
              type="text"
              placeholder="Cari Buku, Penulis ,Jurnal... "
              className=" p-2 border-slate-200 border-2 w-full rounded-lg "
              disabled={isOpen ? true : false}
            />
          </section>
          <button
            className="hidden items-center lg:flex"
            onClick={() => setOpenCart(!openCart)}
          >
            <FaShoppingBasket
              size={30}
              color="tomato"
              className="hover:fill-red-900"
            />
          </button>
          <div className="bg-black absolute w-1/4 top-20"></div>
          <section className="flex items-center justify-between">
            <ul className="lg:flex gap-2 items-center hidden ">
              <NavLink to="/login" className={username ? "hidden" : "block"}>
                <button className="bg-black p-3  text-white rounded-md hover:bg-white hover:text-black hover:outline-black hover:outline-2 hover:outline text-lg font-medium">
                  Log in
                </button>
              </NavLink>

              {username && (
                <button
                  className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition ease-in-out duration-500"
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  <span className="font-bold">{username}</span>
                  <FaUserCircle size={30} />
                </button>
              )}
              <div
                className={
                  openProfile
                    ? "block absolute bg-white top-[4.8rem] right-0 rounded-sm shadow-xl"
                    : "hidden"
                }
              >
                <ul className="p-2 font-semibold">
                  <li className="border-b-slate-300 border-b-2 p-1 block  ">
                    Account Settings
                  </li>
                  {username == "admin" && (
                    <NavLink
                      to="/admin"
                      className="border-b-slate-300 border-b-2 p-1 block"
                    >
                      Admin Page
                    </NavLink>
                  )}
                  <button onClick={handleLogOut}>Log out</button>
                </ul>
              </div>
            </ul>
          </section>
        </nav>
      </section>
    </main>
  );
};
