const Cards = ({ allSeries }) => {
  return (
    <div
      id="card"
      className="w-full h-full group bg-slate-100 dark:bg-[#3b4248] rounded-xl overflow-hidden shadow-md"
    >
      <div className="flex flex-col w-full h-full">
        <div id="poster" className="bg-blue-300 h-full relative overflow-hidden">
          <img
            loading="lazy"
            src={allSeries.poster}
            className="w-full h-full brightness-90 group-hover:scale-125 group-hover:brightness-100 duration-300"
            alt={allSeries.title}
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
        </div>
        <div className="p-1 py-0.5 text-sm h-[50px] shrink-0">
          <p className="line-clamp-2 group-hover:text-blue-400 duration-300 dark:text-white text-black font-sans">{allSeries.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
