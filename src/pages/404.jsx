import React, { useEffect, useState } from "react";

const Error = () => {
    const [nilai, setNilai] = useState(5);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNilai((prevNilai) => prevNilai - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (nilai === 0) window.history.back()
  }, [nilai])
  

  return (
    <div className="w-full h-[50vh] flex justify-center items-center flex-col gap-2 p-3">
      <p className="text-3xl text-slate-300 font-bold">404 NOT FOUND</p>
      <div className="flex">
        <p className="font-bold dark:text-slate-100">Nyasar Ngab?</p>
        <a href="/" className="text-blue-500 font-medium underline">Yuk Balik</a>
      </div>
      <p className="dark:text-slate-100 animate-ping">{nilai}</p>
    </div>
  );
};

export default Error;
