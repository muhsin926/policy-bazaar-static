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
    <>
      <section className="md:block hidden">
        <div className="py-2 flex items-center justify-center">
          <h2>Quick filters</h2>
          <button
            className="text-blue-600 text-2xl ml-4"
            onClick={handleScrollLeft}
          >
            <AiOutlineLeftCircle />
          </button>
          <div
            className=" px-2 w-9/12 flex gap-3 overflow-x-auto scrollbar-hide"
            ref={containerRef}
          >
            <div className="border border-gray-400  rounded-3xl p-3 pl-3 pr-40 flex gap-2 items-center">
              <CiSearch /> <h4>Search </h4>
            </div>
            {filters.map((data, i) => (
              <div
                key={i}
                className={`${
                  i == 3 || i == 4
                    ? "border border-blue-600"
                    : "border border-gray-400"
                } min-w-fit rounded-3xl p-3 flex gap-2 items-center text-gray-700`}
              >
                <h4 className={`${i == 3 || i == 4 ? "text-blue-600" : null}`}>
                  {data}
                </h4>
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
            <FiFilter /> <h4 className="hidden xl:block">All filters</h4>
            <div className="absolute rounded-full w-5 text-sm -top-2 right-3 shadow-xl shadow-gray-500 bg-green-500 text-white ">
              2
            </div>
          </button>
        </div>
      </section>
      <section className="md:hidden block ">
        <div className="py-2 gap-2 flex items-center justify-center">
          <div className="flex gap-2 items-center bg-gray-100 rounded p-2 px-3 w-5/6">
            <CiSearch /> <h4>Search </h4>
          </div>
          <div className="relative bg-blue-100 p-3 rounded">
            <FiFilter />
            <div className="absolute rounded-full w-5 text-sm -top-2 -right-2 shadow-xl shadow-gray-500 bg-green-500 text-center text-white ">
              2
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
