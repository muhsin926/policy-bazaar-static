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

const PlanCard = ({ plan, company, flag }) => {
  const { shortlisted, setShortlisted } = useContext(ShortlistedContext);

  const info = [
    { icon: diagnosis, title: "Daignosis", mapKey: plan?.diagnosis },
    {
      icon: physician,
      title: "Physician Consultation",
      mapKey: plan?.PhysicianConsultaion,
    },
    { icon: pharmacy, title: "Pharmacy", mapKey: plan?.pharmacy },
    {
      icon: physiotherapy,
      title: "Physiotherapy",
      mapKey: plan?.physiotharapy,
    },
  ];
  return (
    <div
      className={`col-span-12 md:col-span-10 border border-gray-200 rounded-md  w-full bg-white`}
    >
      <div className="md:flex-row flex-col flex justify-between px-5 pt-5">
        <div className="flex gap-2">
          {flag && (
            <div>
              <img
                className="md:block hidden w-20 border border-gray-200"
                src={company}
                alt=""
              />
            </div>
          )}
          <div className="md:hidden block">
            <img className="w-20 border border-gray-200" src={company} alt="" />
          </div>
          <div>
            <h2 className="text-bold mb-2">{plan?.plan}</h2>
            <div className="hidden lg:block">
              <p className="flex gap-1 items-center">
                Network <img src={icon_circle_i} alt="" />
                <span className="mx-2 bg-slate-100 p-1 rounded">
                  {plan?.network}
                </span>
                <div className="hidden lg:block ">
                  <Button
                    style={"text-blue-600 flex gap-2 items-center text-xs"}
                    title={"Network List"}
                    icon={<BsChevronRight />}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-1 md:gap-10">
          <div className="flex md:justify-normal justify-between md:flex-col ">
            <p className="mb-2">Medical Cover(AED)</p>
            <h2>{plan?.medicalCover}</h2>
          </div>
          <div className="flex md:justify-normal justify-between md:flex-col ">
            <p className="mb-2">Pharmacy Limit</p>
            <h2>{plan?.pharmacyList}</h2>
          </div>
          <div className="md:hidden block ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <p className="text-blue-600">Network List</p>
                <img className="w-3" src={icon_circle_i} alt="" />
              </div>
              <div>
                <h2 className="mx-2 bg-slate-100 p-1 rounded">
                  {plan?.network}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-2">
          <div className="flex justify-end">
            <Button
              style={"bg-orange-500 text-white py-2 px-3 rounded-md"}
              title={`AED ${plan?.AED} Yearly`}
            />
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
        <div className="col-span-12 md:col-span-8 grid grid-cols-12">
          {info.map((data, i) => (
            <div
              key={i}
              className="col-span-3 md:col-span-6 flex gap-2 md:mb-2 mt-1 md:mt-0"
            >
              <img src={data?.icon} alt="icon" />
              <p className="flex gap-2">
                <span className="hidden lg:block">{data?.title}:</span>
                <span>{data?.mapKey}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="hidden md:block col-span-4 ">
          <div className="flex items-center justify-end">
            <Button
              style={"bg-orange-500 text-white py-2 px-3 rounded-md"}
              title={`AED ${plan?.AED} Yearly`}
            />
          </div>
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
        <button
          onClick={() => setShortlisted([...shortlisted, { plan, company }])}
          className="text-blue-700 flex gap-1 text-xs items-center"
        >
          <img src={bookMark} alt="" />
          Shortlist
        </button>
      </div>
      {plan?.shouldKnow && (
        <div className="hidden lg:block">
          <div className={`flex gap-2 bg-yellow-50 py-2 px-5 items-center`}>
            <img src={hand} alt="" />
            <h3>What you should know?</h3>
            <p>{plan?.shouldKnow}</p>
          </div>
        </div>
      )}
      {plan?.weLove && (
        <di className="hidden lg:block">
          <div className="flex gap-2  bg-blue-50 py-2 px-5 items-center">
            <img src={heart} alt="" />
            <h3>What we love?</h3>
            <p>{plan?.weLove}</p>
          </div>
        </di>
      )}
    </div>
  );
};

export default PlanCard;
