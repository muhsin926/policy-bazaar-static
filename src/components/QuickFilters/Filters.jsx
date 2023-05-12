import { useRef } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { filters } from "../../constants";

const Filters = () => {
  const containerRef = useRef(null);

  const handleScrollRight = () => {
    const container = containerRef.current;
    container.scrollLeft += 200; // Adjust the value as needed
  };
  const handleScrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft -= 200; // Adjust the value as needed
  };
  return (
    <section className="py-2 flex items-center justify-center">
      <h4 className="font-bold">Quick filters</h4>
      <button
        className="text-blue-600 text-2xl ml-4"
        onClick={handleScrollLeft}
      >
        <AiOutlineLeftCircle />
      </button>
      <div
        className="w-[63rem] px-2 flex gap-3 overflow-x-auto scrollbar-hide"
        ref={containerRef}
      >
        <div className="border border-gray-400 rounded-3xl p-2 pl-3 flex gap-2 items-center">
          <CiSearch /> <pre className="text-gray-700">Search </pre>
        </div>
        {filters.map((data, i) => (
          <div
            key={i}
            className="border min-w-fit border-gray-400 rounded-3xl p-2 flex gap-2 items-center text-gray-700"
          >
            {data} <BsChevronDown />
          </div>
        ))}
      </div>
      <button
        className="text-blue-600 text-2xl ml-4"
        onClick={handleScrollRight}
      >
        <AiOutlineRightCircle />
      </button>
      <button className="relative border broder-gray-400 rounded-3xl p-2 px-5 flex gap-2 ml-4 justify-center items-center">
        <FiFilter /> All filters
        <div className="absolute rounded-full w-5 text-sm -top-2 right-3 shadow-xl shadow-gray-500 bg-green-500 text-white ">
          2
        </div>
      </button>
    </section>
  );
};

export default Filters;
