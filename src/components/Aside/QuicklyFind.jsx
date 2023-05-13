import { basicPlansVisa, moneyPlan } from "../../assets";

const QuicklyFind = () => {
  return (
    <section className="rounded-lg shadow-lg border border-gray-200 w-5/6 h-fit mb-5 p-5">
      <h1 className="ml-1">Quickly Find</h1>
      <a href="#valueForMoney" className="cursor-pointer">
        <div className="flex gap-2 items-center my-3">
          <img className="w-8" src={moneyPlan} alt="" />
          <h4>Value for money plans</h4>
        </div>
      </a>
      <a href="#basicPlan" className="cursor-pointer">
        <div className="flex gap-2 items-center mb-3">
          <img src={basicPlansVisa} alt="" />
          <h4>Basic plans for Visa</h4>
        </div>
      </a>
    </section>
  );
};

export default QuicklyFind;
