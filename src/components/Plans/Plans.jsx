import { insurancePlans } from "../../constants";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Button from "../Common/Button";
import { useState } from "react";
import PlanCard from "./PlanCard";

const Plans = () => {
  const [salamaPlan, setSalamaPlan] = useState(false);
  return (
    <div>
      {insurancePlans.map((plan, i) => (
        <div key={i} className="grid grid-cols-12 mb-5 ">
          <div className="col-span-2 rounded-md p-2 ">
            <div className="border border-gray-200 rounded p-2 flex flex-col items-center">
              <img
                className="w-20 border border-gray-200"
                src={plan?.company}
                alt="company logo"
              />
              <hr className="mt-2" />
              <div className="flex items-center justify-center flex-col text-blue-500">
                <Button
                  style={"text-blue-500 text-xs "}
                  title={`${plan?.plans?.length} ${
                    salamaPlan ? "Hiden Plans" : "More Plans"
                  }`}
                  click={() => setSalamaPlan(!salamaPlan)}
                />
                {salamaPlan ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </div>
          </div>
          {salamaPlan ? (
            plan?.plans?.map((data, index) => (
              <PlanCard key={index} plan={data} i={index} />
            ))
          ) : (
            <PlanCard plan={plan?.plans[0]} i={i} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Plans;
