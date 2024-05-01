import { Link, useRouteError } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
import { Footer } from "../components/footer/Footer";
export const ErrorElement = () => {
  const error = useRouteError();
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <section className="flex flex-col items-center justify-center h-full">
        <TbFaceIdError size={100} />
        <div className="flex flex-col items-center mb-10">
          <span className="font-bold text-blue-500 text-3xl">Oops!</span>
          <p className="font-semibold">Something went error!</p>
          <p className="font-semibold">
            Error Status : {error.status || error.message}
          </p>
        </div>
        <Link to="/" className="hover:text-blue-500 font-bold">
          Back to Home
        </Link>
      </section>
      <Footer />
    </main>
  );
};
