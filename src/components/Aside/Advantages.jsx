import { advantages } from "../../constants";
import { logo } from "../../assets";
import Button from "../Common/Button";

const Advantages = () => {
  return (
    <>
      <div className="rounded-lg shadow-lg border border-gray-200 w-5/6 h-fit  p-5">
        <div className="flex gap-3 items-center">
          <img className="w-8" src={logo} alt="logo" />
          <h2>Advantage</h2>
        </div>
        <hr className=" m-3" />
        {advantages.map((data, i) => (
          <div className="flex gap-3 mb-3" key={i}>
            <img src={data.icone} alt="icons" />
            <h4>{data.title}</h4>
          </div>
        ))}
        <div className="flex justify-center">
          <Button
            style={"border border-blue-600 text-blue-600 rounded p-2"}
            title={"Know more"}
          />
        </div>
      </div>
    </>
  );
};

export default Advantages;
