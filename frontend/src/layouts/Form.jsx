import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { SocialMedia } from "../components/socialmedia/SocialMedia";
export const Form = (props) => {
  const { title, onSubmit, children } = props;

  return (
    <main className="h-auto w-3/4 rounded-xl p-4 bg-white flex flex-col lg:flex-row md:h-full justify-center  items-center shadow-xl  ">
      <section className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center p-2">
        <Link
          to="/"
          className="flex self-start font-semibold hover:text-red-500"
        >
          Back to homepage
        </Link>
        <div className=" flex-col flex justify-center items-center w-3/4 h-full">
          <div className="flex w-full justify-center ">
            <span className="font-bold text-xl">{title}</span>
          </div>
          <form onSubmit={onSubmit} className="w-full">
            {children}
            <button className="p-4 bg-black font-semibold hover:outline-black hover:outline-2 hover:outline hover:bg-white hover:text-black text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
        <div>
          <span>
            {title === "Login"
              ? "Don't have account? "
              : "Already have account? "}
            <Link
              to={title === "Register" ? "/login" : "/register"}
              className="text-[#0855b1] font-bold "
            >
              {title === "Login" ? "Register here" : "Login here"}
            </Link>
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="font-bold">Our social media</span>
          <SocialMedia color={"black"} size={30} />
        </div>
      </section>
      <section className="bg-slate-200 lg:w-1/2 w-full h-full items-center justify-center flex flex-col p-4">
        <img src="../firebookly.svg" className="w-80" />
        <p className="font-bold text-xl my-2">
          Make the Reading <span className="text-red-400">Fire</span>ful
        </p>
      </section>
    </main>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.any,
  children: PropTypes.any,
};
