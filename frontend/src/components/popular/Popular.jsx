import data from "../../assets/data.json";

export const Popular = () => {
  const popularData = data.filter((item) => item.read > 1000);

  return (
    <main className="w-full flex flex-col justify-center items-center mt-8">
      <span className="font-semibold text-xl">Popular minggu ini</span>
      <section>
        <div>
          <ul className="flex gap-2 flex-wrap justify-center">
            {popularData.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" w-[210px] h-[310px] shadow-md shadow-black/20  flex items-center justify-center bg-white rounded-md"
                >
                  <img
                    src={item.image}
                    className="object-fill p-4 aspect-[4/6]"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section></section>
    </main>
  );
};
