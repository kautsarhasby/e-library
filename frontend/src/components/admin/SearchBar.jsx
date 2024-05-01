import { FaArrowUp, FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBar = () => {
  const sortOption = ["Title", "Writer", "Year", "Language"];
  return (
    <main className="w-3/4">
      <section>
        <div className="relative">
          <FaMagnifyingGlass
            className="absolute top-[16px] left-3"
            color="gray"
          />
          <input
            type="text"
            placeholder="Search something"
            className="border-[#0855b1] border-2 rounded-md px-8 h-12 w-full
            focus:outline-none"
          />
        </div>
        <div className="font-semibold">
          <span>Sort by</span>
          <ul className="flex justify-between">
            {sortOption.map((item, index) => {
              return (
                <li
                  className="cursor-pointer flex gap-1 items-center"
                  key={index}
                >
                  <span className=" text-gray-400 hover:text-black">
                    {item}
                  </span>
                  <FaArrowUp color="green" size={10} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};
