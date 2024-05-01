import data from "../../assets/data.json";

export const Author = () => {
  return (
    <main className="w-full flex justify-center my-4 ">
      <div className="flex flex-col">
        <span className="font-bold text-xl my-2 px-4">Author Terpopuler</span>
        <section>
          <ul className="flex border-2 gap-4 md:flex-row flex-wrap justify-center">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-white w-[200px] h-[220px] rounded-md p-2 shadow-xl"
                >
                  <section className="w-full h-full flex items-center flex-col">
                    <div className="bg-slate-500 w-3/4 h-3/4 rounded-md"></div>

                    <span className="font-medium self-center">
                      {item.writer}
                    </span>

                    <div className=" border-t-red-500 border-t-2 w-full justify-end flex">
                      <span className="text-red-500 font-medium">Detail</span>
                    </div>
                  </section>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
};
