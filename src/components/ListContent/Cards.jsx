import { Container } from "./List.style";
const Cards = ({ allSeries }) => {
  return (
    <div
      id="card"
      className="w-full h-full bg-[#0582ca] rounded-xl overflow-hidden shadow-md"
    >
      <div className="flex flex-col w-full h-full">
        <div id="poster" className="group bg-blue-300 h-full relative">
          <img
            src={allSeries.poster}
            className="w-full h-full group-hover:brightness-50 duration-300"
            alt=""
          />
          <div
            className={`absolute max-w-full z-10 shadow-md rounded-bl-lg px-1 text-[12px] ${
              allSeries.type == "Manhwa"
                ? "bg-blue-500"
                : allSeries.type == "Manga"
                ? "bg-red-500"
                : "bg-indigo-500"
            } top-0 right-0`}
          >
            <p className="truncate text-white font-medium">{allSeries.type}</p>
          </div>
          <div
            className={`absolute w-full h-full py-4 px-2 hidden overflow-y-auto group-hover:block rounded-bl-lg text-[12px] sm:text-sm left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            <p className="text-ellipsis overflow-hidden text-white font-medium">
              {allSeries.title}
            </p>
          </div>
        </div>
        <div className="p-1 py-0.5 text-sm">
          <p className="truncate text-white">{allSeries.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
