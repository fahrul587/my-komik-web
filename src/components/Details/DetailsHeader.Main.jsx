const Main = ({ details }) => {
  return (
    <div className="flex-initial w-full h-full bg-slate-950/30 p-3 rounded-lg">
      <div className="w-full text-lg font-bold text-slate-50 text-center lg:text-left">
        {details.title}
      </div>
      <div className="grid grid-cols-[auto,1fr] max-[250px]:grid-cols-1 mt-5 text-sm gap-x-5 gap-1">
        <div className="italic text-slate-50 font-medium">
          Alternative Title
        </div>
        <div className=" text-slate-100">{details.alternative_title}</div>
        <div className="italic text-slate-50 font-medium">Released</div>
        <div className=" text-slate-100">{details.released}</div>
        <div className="italic text-slate-50 font-medium">Author</div>
        <div className=" text-slate-100">{details.author}</div>
        <div className="italic text-slate-50 font-medium">Posted On</div>
        <div className=" text-slate-100">{details.posted_on}</div>
        <div className="italic text-slate-50 font-medium">Update On</div>
        <div className=" text-slate-100">{details.update_on}</div>
        <div className="italic text-slate-50 font-medium">Genres</div>
        <div className=" text-slate-100">{details.genres.join(", ")}</div>
        <div className="italic text-slate-50 font-medium">Status</div>
        <div className=" text-slate-100">{details.status}</div>
        <div className="italic text-slate-50 font-medium">Type</div>
        <div className=" text-slate-100">{details.type}</div>
      </div>
    </div>
  );
};

export default Main;
