import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Button } from "../button/Button";

export const Navbar = (props) => {
  const { username, handleLogOut, isOpen, setIsOpen } = props;
  const [openProfile, setOpenProfile] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const num = 5000000;

  return (
    <main className="top-0 sticky ">
      <section>
        <main
          className={`hidden lg:block transition-transform absolute bg-white h-screen z-20 w-2/6 
          ${
            openCart
              ? "transition-all animate-sliderRight"
              : "transition-all animate-sliderLeft -translate-x-full "
          }
        `}
        >
          <section className="flex flex-col h-full">
            <div className="flex justify-center">
              <span className="font-bold text-2xl">Cart</span>
            </div>
            <table className="w-full border-2">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Quantity</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Halo</td>
                  <td>Halo</td>
                  <td>Halo</td>
                </tr>
              </tbody>
            </table>
            <div className="font-bold border-2 text-end h-3/4">
              Total Rp.{" "}
              {num.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </div>
            <div className="justify-center flex ">
              <button className="w-3/4 p-4 bg-green-500 hover:bg-green-800 text-white font-bold text-2xl rounded-md">
                Checkout
              </button>
            </div>
          </section>
        </main>
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
            <FaShoppingBag size={30} color="tomato" />
          </button>
          <div className="bg-black absolute w-1/4 top-20"></div>
          <section className="flex items-center justify-between">
            <ul className="lg:flex gap-2 items-center hidden ">
              <NavLink to="/login" className={username ? "hidden" : "block"}>
                <Button color={"bg-red-500"} hover={"bg-red-700"}>
                  Log in
                </Button>
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
                  <button className="p-1" onClick={handleLogOut}>
                    Log out
                  </button>
                </ul>
              </div>
            </ul>
          </section>
        </nav>
      </section>
    </main>
  );
};
