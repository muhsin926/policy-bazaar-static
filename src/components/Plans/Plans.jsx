import {
  bookMark,
  diagnosis,
  icon_circle_i,
  pharmacy,
  physician,
  physiotherapy,
  watania_takaful,
} from "../../assets";
import { insurancePlans } from "../../constants";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Button from "../Common/Button";

const info = [
  { icon: diagnosis, title: "Daignosis", mapKey: "diagnosis" },
  {
    icon: physician,
    title: "Physician Consultation",
    mapKey: "PhysicianConsultaion",
  },
  { icon: pharmacy, title: "Pharmacy", mapKey: "pharmacy" },
  { icon: physiotherapy, title: "Physiotherapy", mapKey: "physiotharapy" },
];

const Plans = () => {
  return (
    <div>
      {insurancePlans.map((plan, i) => (
        <div key={i} className="grid grid-cols-12 mb-5 ">
          <div className="col-span-2 rounded-md p-2">
            <div className="border border-gray-200 rounded p-2 flex flex-col items-center">
              <img
                className="w-20 border border-gray-200"
                src={watania_takaful}
                alt="company logo"
              />
              <hr className="mt-2" />
              <div className="flex items-center justify-center flex-col text-blue-500">
                <Button
                  style={"text-blue-500 text-xs "}
                  title={`${plan?.plans?.length} More Plans`}
                />
                <BsChevronDown />
              </div>
            </div>
          </div>
          <div className="col-span-10 border border-gray-200 rounded-md p-5 w-full">
            <div className="flex justify-between">
              <div>
                <h2 className="text-bold mb-2">{plan?.plans[0]?.plan}</h2>
                <p className="flex gap-1 items-center">
                  Network <img src={icon_circle_i} alt="" />
                  <span className="mx-2 bg-slate-100 p-1 rounded">
                    {plan?.plans[0]?.network}
                  </span>
                  <Button
                    style={"text-blue-600 flex gap-2 items-center text-xs"}
                    title={"Network List"}
                    icon={<BsChevronRight />}
                  />
                </p>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="mb-2">Medical Cover(AED)</p>
                  <h2>{plan?.plans[0]?.medicalCover}</h2>
                </div>
                <div>
                  <p className="mb-2">Pharmacy Limit</p>
                  <h2>{plan?.plans[0]?.pharmacyList}</h2>
                </div>
              </div>
            </div>
            <hr className="mt-2 mb-5" />
            <div className="flex my-3">
              <h4>Copay: </h4>
              <Button
                title={"Change options"}
                style={"text-blue-600 mx-1 flex gap-1 text-xs items-center"}
                icon={<BsChevronRight />}
              />
              <img src={icon_circle_i} alt="" />
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-8 grid grid-cols-12">
                {info.map((data, i) => (
                  <div key={i} className="col-span-6 flex gap-2 mb-2">
                    <img src={data?.icon} alt="icon" />
                    <p>
                      {data?.title}: {plan?.plans[0]?.data?.mapKey}
                    </p>
                  </div>
                ))}
              </div>
              <div className="col-span-4 flex items-center justify-end">
                <Button
                  style={"bg-orange-500 text-white py-2 px-3 rounded-md"}
                  title={`AED ${plan?.plans[0]?.AED} Yearly`}
                />
              </div>
            </div>
            <div className="flex justify-end mt-5 items-center">
              <Button
                style={"text-blue-700 flex gap-2 items-center text-xs"}
                title={"Plans Details"}
                icon={<BsChevronRight />}
              />
              <div className="border border-gray-300 rounded-full w-5 h-5 mx-2"></div>
              <Button
                style={"text-blue-700 mr-3 text-xs"}
                title={"Add to Campare"}
              />
              <button className="text-blue-700 flex gap-1 text-xs items-center">
                <img src={bookMark} alt="" />
                Shortlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
