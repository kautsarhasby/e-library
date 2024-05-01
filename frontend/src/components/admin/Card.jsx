import { FaBook, FaClock, FaUser } from "react-icons/fa6";

const list = [
  {
    icon: <FaUser size={50} color="orange" />,
    name: "Visited",
    count: 9210,
  },
  {
    icon: <FaClock size={50} color="skyblue" />,
    name: "Average Time",
    count: 192.5,
  },
  {
    icon: <FaBook size={50} color="green" />,
    name: "Books Total",
    count: 291,
  },
];

export const Card = () => {
  return (
    <div>
      <ul className="flex gap-4 items-center justify-center">
        {list.map((item, index) => {
          return (
            <li
              className="w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center flex-col shadow-lg"
              key={index}
            >
              {item.icon}
              <span className="text-[#0855b1] font-bold text-xl">
                {item.count}
              </span>
              <span className="font-semibold text-slate-500">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
