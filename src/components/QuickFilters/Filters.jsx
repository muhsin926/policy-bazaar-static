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
    container.scrollLeft += 500;
  };

  const handleScrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft -= 500;
  };

  return (
    <section className="py-2 flex items-center justify-center">
      <h2>Quick filters</h2>
      <button
        className="text-blue-600 text-2xl ml-4"
        onClick={handleScrollLeft}
      >
        <AiOutlineLeftCircle />
      </button>
      <div
        className=" px-2 w-[60rem] flex gap-3 overflow-x-auto scrollbar-hide"
        ref={containerRef}
      >
        <div className="border border-gray-400  rounded-3xl p-3 pl-3 pr-48 flex gap-2 items-center">
          <CiSearch /> <h4>Search </h4>
        </div>
        {filters.map((data, i) => (
          <div
            key={i}
            className="border min-w-fit border-gray-400 rounded-3xl p-3 flex gap-2 items-center text-gray-700"
          >
            <h4> {data} </h4>
            <BsChevronDown />
          </div>
        ))}
      </div>
      <button
        className="text-blue-600 text-2xl ml-4"
        onClick={handleScrollRight}
      >
        <AiOutlineRightCircle />
      </button>
      <button className="relative border border-gray-400 rounded-3xl p-3 px-5 flex gap-2 ml-4 justify-center items-center">
        <FiFilter /> All filters
        <div className="absolute rounded-full w-5 text-sm -top-2 right-3 shadow-xl shadow-gray-500 bg-green-500 text-white ">
          2
        </div>
      </button>
    </section>
  );
};

export default Filters;
