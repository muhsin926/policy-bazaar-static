import { useContext } from "react";
import { ShortlistedContext } from "../../context/ShortlistedContext";

const ShortlistedPlans = () => {
  const { shortlisted } = useContext(ShortlistedContext);
  return (
    <section className="rounded-lg shadow-lg border border-gray-200 w-5/6 h-fit mb-5 p-5">
      <div className="flex gap-2 ">
        <h1 className="mb-3">Shortlisted Plans</h1>
        {shortlisted.length > 0 && (
          <div className=" mt-1 w-5 h-5 flex justify-center items-center bg-green-500 rounded-full text-white text-sm">
            {shortlisted.length}
          </div>
        )}
      </div>
      {shortlisted.length > 0 ? (
        <div>
          <div className="flex gap-1 mb-2">
            <img src={shortlisted[shortlisted.length - 1]?.company} alt="" />
            <h3>{shortlisted[shortlisted.length - 1]?.plan?.plan}</h3>
          </div>
          <div>
            <div className="flex justify-between">
              <p>Medical Cover (AED)</p>
              <h3>{shortlisted[shortlisted.length - 1]?.plan?.medicalCover}</h3>
            </div>
            <div className="flex justify-between">
              <p>Premiume</p>
              <h3>
                AED {shortlisted[shortlisted.length - 1]?.plan?.AED} Yearly
              </h3>
            </div>
          </div>
          <hr className="mt-8 mb-4" />
          <h4 className="text-center text-blue-600">View shortlisted plans</h4>
        </div>
      ) : (
        <div>
          <h4 className="mb-10 text-gray-500">
            Add plans to shortlist to quickly find them later
          </h4>
          <div className="border border-dotted rounded p-3 text-center">
            <h4 className="text-gray-500">No plans added to shortlist yet</h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShortlistedPlans;
