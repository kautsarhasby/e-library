import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(0);
  const toggleMinus = useRef();
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:5050/record/${id}`, {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            console.error("Error Retrieving Data");
          }
          return response.json();
        })
        .then((data) => {
          setBooks(data);
        });
    };
    fetchData();
  }, [id]);

  const handleClick = (e) => {
    if (e.target.innerText == "+") {
      setCart(cart + 1);
    } else {
      setCart(cart - 1);
    }
  };
  useEffect(() => {
    if (cart <= 0) {
      toggleMinus.current.disabled = true;
    } else {
      toggleMinus.current.disabled = false;
    }
  });

  const handleCart = () => {};

  const price = books.price || 0;

  return (
    <>
      <main className="flex justify-center">
        <section className="border-2 justify-end flex">
          <div className="bg-white shadow-md rounded-md w-[400px] h-[500px] flex items-center justify-center">
            <img
              src={`../../../images/${books.imageName}`}
              className="w-[300px] border-2 h-[400px]"
            />
          </div>
        </section>
        <section className="w-1/2 border-2">
          <div className="flex flex-col">
            <span className="font-bold text-2xl">{books.tfitle}</span>
            <span>By {books.writer}</span>

            <hr className="w-full bg-black" />
            <div>
              <span className="font-bold ">Deskripsi Buku</span>
              <article>{books.description}</article>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-between ">
                <div className="flex gap-4">
                  <span>Beli</span>
                  <span>
                    Rp.{" "}
                    {price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </span>
                </div>
                <div className=" justify-between w-40 rounded-md items-center flex border-2 border-black font-bold text-xl">
                  <button
                    className="w-10 "
                    onClick={handleClick}
                    ref={toggleMinus}
                  >
                    -
                  </button>
                  <span>{cart || 0}</span>
                  <button
                    className="w-10 hover:bg-slate-100 rounded-md text-red-600"
                    onClick={handleClick}
                  >
                    +
                  </button>
                </div>
                <button
                  name="buyCart"
                  className="p-4 bg-green-500 text-white font-bold hover:bg-green-800 rounded-md w-52"
                  onClick={handleCart}
                >
                  + Keranjang ( Beli )
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                  <span>Sewa</span>
                  <span>Rp.{books.rentPrice || 0}</span>
                </div>
                <button
                  name="rentCart"
                  className="p-4 bg-green-500 text-white font-bold hover:bg-green-800 rounded-md w-52"
                >
                  + Keranjang ( Sewa )
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
