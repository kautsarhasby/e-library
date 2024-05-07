import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { HiddenList } from "../../components/list/HiddenList";
import { Navbar } from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export const AppHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = useLogin();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>
      <section className="sticky top-0 bg-white z-10">
        <section
          className={`transition-all sticky top-0 ease-in-out duration-1000 xl:hidden
      ${isOpen ? "pb-[80%] md:pb-[40%]" : "pb-0"} 
    }
    `}
        >
          <HiddenList
            isOpen={isOpen}
            username={username}
            onClick={handleLogOut}
          />
        </section>
        <Navbar
          username={username}
          handleLogOut={handleLogOut}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </section>
      <Outlet />
    </>
  );
};
