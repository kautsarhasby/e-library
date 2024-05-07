import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Booklist = (props) => {
  return (
    <main className="flex justify-center items-center my-4 ">
      {props.children}
    </main>
  );
};

export const Books = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:5050/record", {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            console.error();
          }
          return response.json();
        })
        .then((data) => {
          setBooks(data);
        });
    };
    fetchData();
  }, []);

  return (
    <section className="flex items-center flex-col">
      <div className="flex justify-between py-4 w-full px-4">
        <span className="font-bold text-xl ">{props.children}</span>
        {books.length >= 3 ? (
          <span className="font-semibold text-red-600 cursor-pointer">
            Lainnya
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-center w-full rounded-md">
        <ul className="md:flex-row gap-2 flex justify-center border-2 flex-wrap">
          {books.map((item, index) => {
            return (
              <NavLink
                className="w-[210px] h-[440px] rounded-md place-items-center  justify-center items-center shadow-md shadow-black/20 bg-white relative"
                key={index}
                to={`/details/${item._id}`}
              >
                <div className="absolute right-0 rounded-tr-md rounded-bl-md  bg-green-400 px-2 text-green-700 font-bold">
                  <span>20%</span>
                </div>
                <section className="p-4">
                  <img
                    src={`../../../images/${item.imageName}`}
                    className="w-[200px] object-fill aspect-[4/6]"
                    loading="lazy"
                  />
                  <div className="grid">
                    <div className="flex flex-col">
                      <span className=" text-sm  text-slate-500 ">
                        {item.writer}
                      </span>
                      <span className="font-medium h-6">{item.title}</span>
                      <span className="font-bold mb-auto py-5">
                        Rp. {item.price}
                      </span>
                    </div>
                    <div className="flex justify-between border-t-2 border-red-400 font-medium text-slate-600">
                      <span>Rent</span>
                      <span>Rp. {item.rentPrice || ""}</span>
                    </div>
                  </div>
                </section>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const Popular = (props) => {
  // const popularData =.filter((item) => item.read > 1000);
  return (
    <>
      <Books>{props.children}</Books>
    </>
  );
};

Booklist.Books = Books;
Booklist.Popular = Popular;

export default Booklist;
