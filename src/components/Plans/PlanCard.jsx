/* eslint-disable react/prop-types */
import Button from "../Common/Button";
import { BsChevronRight } from "react-icons/bs";
import {
  bookMark,
  diagnosis,
  hand,
  heart,
  icon_circle_i,
  pharmacy,
  physician,
  physiotherapy,
} from "../../assets";
import { useContext } from "react";
import { ShortlistedContext } from "../../context/ShortlistedContext";

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

const PlanCard = ({ plan, company, flag }) => {
    const { shortlisted, setShortlisted } = useContext(ShortlistedContext)
  return (
    <div className={`col-span-10 border border-gray-200 rounded-md  w-full bg-white`}>
      <div className="flex justify-between px-5 pt-5">
        <div className="flex gap-2">
          {flag && (
            <div>
              <img className="w-20 border border-gray-200" src={company} alt="" />
            </div>
          )}
          <div>
            <h2 className="text-bold mb-2">{plan?.plan}</h2>
            <p className="flex gap-1 items-center">
              Network <img src={icon_circle_i} alt="" />
              <span className="mx-2 bg-slate-100 p-1 rounded">
                {plan?.network}
              </span>
              <Button
                style={"text-blue-600 flex gap-2 items-center text-xs"}
                title={"Network List"}
                icon={<BsChevronRight />}
              />
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="mb-2">Medical Cover(AED)</p>
            <h2>{plan?.medicalCover}</h2>
          </div>
          <div>
            <p className="mb-2">Pharmacy Limit</p>
            <h2>{plan?.pharmacyList}</h2>
          </div>
        </div>
      </div>

      <hr className="mt-2 mb-5" />
      <div className="flex my-3 px-5">
        <h4>Copay: </h4>
        <Button
          title={"Change options"}
          style={"text-blue-600 mx-1 flex gap-1 text-xs items-center"}
          icon={<BsChevronRight />}
        />
        <img src={icon_circle_i} alt="" />
      </div>

      <div className="grid grid-cols-12 px-5">
        <div className="col-span-8 grid grid-cols-12">
          {info.map((data, i) => (
            <div key={i} className="col-span-6 flex gap-2 mb-2">
              <img src={data?.icon} alt="icon" />
              <p>
                {data?.title}: {plan?.data?.mapKey}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <Button
            style={"bg-orange-500 text-white py-2 px-3 rounded-md"}
            title={`AED ${plan?.AED} Yearly`}
          />
        </div>
      </div>

      <div className="flex justify-end mt-5 items-center px-5 bg-gray-50 py-2">
        <Button
          style={"text-blue-700 flex gap-2 items-center text-xs"}
          title={"Plans Details"}
          icon={<BsChevronRight />}
        />
        <div className="border border-gray-300 rounded-full w-5 h-5 mx-2"></div>
        <Button style={"text-blue-700 mr-3 text-xs"} title={"Add to Campare"} />
        <button onClick={() => setShortlisted([...shortlisted, {plan,company}])} className="text-blue-700 flex gap-1 text-xs items-center">
          <img src={bookMark} alt="" />
          Shortlist
        </button>
      </div>
      {plan?.shouldKnow && (
        <div className={`flex gap-2 bg-yellow-50 py-2 px-5 items-center`}>
          <img src={hand} alt="" />
          <h3>What you should know?</h3>
          <p>{plan?.shouldKnow}</p>
        </div>
      )}
      {plan?.weLove && (
        <div className="flex gap-2  bg-blue-50 py-2 px-5 items-center">
          <img src={heart} alt="" />
          <h3>What we love?</h3>
          <p>{plan?.weLove}</p>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
