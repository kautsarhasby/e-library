import { Landingpage } from "../../components/landing-page/LandingPage";
import { Genre } from "../../components/genre/Genre";
import { Booklist } from "../../components/booklist/Booklist";
import { Footer } from "../../components/footer/Footer";
import { Popular } from "../../components/popular/Popular";
import { Author } from "../../components/author/Author";
import { Navbar } from "../../components/navbar/Navbar";
import { HiddenList } from "../../components/list/HiddenList";
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [scroll, setScroll] = useState(false);
  const username = useLogin();
  useEffect(() => {
    if (isOpen == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 2) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // });
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>
      <section className="sticky top-0 bg-white z-10">
        <section
          className={`transition-all sticky top-0 ease-in-out duration-1000
          ${isOpen ? "pb-[50%]" : "pb-0"} 
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
      <Landingpage />
      <Genre />
      <Popular />
      <Booklist />
      <Author />
      <Footer />
    </>
  );
};
