import React, { Suspense } from "react";
import SliderLoading from "../../utils/SliderLoading";
const Slider = React.lazy(() => import("./Slider"))

export const Carousell = () => {

  return (
    <main className="bg-[#343a40] my-5">
      <div className="container mx-auto py-2 sm:p-2">
        <div className="text-white font-mono mb-2 font-bold shadow-sm bg-[#0582ca] px-2 truncate">
          Recomendation
        </div>
        <Suspense fallback={<SliderLoading />}>
          <Slider />
        </Suspense>
      </div>
    </main>
  );
};

export default Carousell;
