import {
  GiSwordsEmblem,
  GiEternalLove,
  GiDramaMasks,
  GiArchiveResearch,
  GiClown,
  GiMaterialsScience,
  GiDragonHead,
} from "react-icons/gi";

const genrelist = [
  {
    name: "Action",
    image: GiSwordsEmblem,
  },
  {
    name: "Romance",
    image: GiEternalLove,
  },
  {
    name: "Drama",
    image: GiDramaMasks,
  },
  {
    name: "Mystery",
    image: GiArchiveResearch,
  },
  {
    name: "Comedy",
    image: GiClown,
  },
  {
    name: "Science Fition",
    image: GiMaterialsScience,
  },
  {
    name: "Fantasy",
    image: GiDragonHead,
  },
];

export const Genre = () => {
  return (
    <main className="flex justify-center flex-col items-center s">
      <section className="">
        <ul className="flex gap-4 flex-wrap justify-center">
          {genrelist.map((item, index) => {
            return (
              <li
                key={index}
                className="w-32 h-32 flex justify-center items-center flex-col  bg-white shadow-xl rounded-md transition-all ease-in-out cursor-pointer"
              >
                <item.image size={60} />
                <span className="font-semibold">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
