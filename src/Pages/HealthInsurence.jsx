import QuickFilters from "../components/QuickFilters/Filters";
import EditDetails from "../components/EditDetails/EditDetails";
import { logo } from "../assets";
import { advantages } from "../constants";

const HealthInsurence = () => {
  return (
    <main className="mx-5">
      <QuickFilters />
      <EditDetails />
      <section className="grid grid-cols-12">
        <article className="col-span-8"></article>
        <aside className="col-span-4">
          <div className="rounded-lg shadow-lg w-96  p-5">
            <div className="flex gap-3">
              <img className="w-8" src={logo} alt="logo" />
              <h2>Advantage</h2>
            </div>
            <hr className=" m-3" />
              {advantages.map((data, i) => (
                <div className="flex gap-3 mb-3" key={i}>
                  <img src={data.icone} alt="icons" />
                  <p>{data.title}</p>
                </div>
              ))}
              <div className="flex justify-center">

              <button className="border border-blue-500 rounded-lg p-2">Know more</button>
              </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default HealthInsurence;
