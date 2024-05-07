import { useEffect, useState } from "react";
import { SearchBar } from "../admin/SearchBar";

export const Booklist = () => {
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

  console.log(books);
  return (
    <main className="w-full flex justify-center">
      <section className=" flex justify-center flex-col items-center w-3/4">
        <span className="font-bold text-xl">Booklist</span>
        <SearchBar />
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index} className="flex">
                <span>{item.title}</span>
                <span>{item.writer}</span>
                <span>{item.year}</span>
                <span>{item.language}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
