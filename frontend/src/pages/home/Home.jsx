import { Landingpage } from "../../components/landing-page/LandingPage";
import { Genre } from "../../components/genre/Genre";
import Booklist from "../../components/booklist/Booklist";
import { Footer } from "../../components/footer/Footer";
import { Author } from "../../components/author/Author";

export const Home = () => {
  return (
    <>
      <Landingpage />
      <Genre />
      <Booklist>
        <Booklist.Books>Buku Terpopuler</Booklist.Books>
      </Booklist>
      <Booklist>
        <Booklist.Popular>Buku Popular</Booklist.Popular>
      </Booklist>
      <Author />
      <Footer />
    </>
  );
};
