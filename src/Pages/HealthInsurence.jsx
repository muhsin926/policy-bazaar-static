import QuickFilters from "../components/QuickFilters/Filters";
import EditDetails from "../components/EditDetails/EditDetails";
import Aside from "../components/Aside/Aside";
import Plans from "../components/Plans/Plans";
import Navbar from "../components/Navbar/Navbar";

const HealthInsurence = () => {
  return (
    <>
      <Navbar />
      <main className="mx-5">
        <QuickFilters />
        <EditDetails />
        <section className="grid grid-cols-12">
          <article className="col-span-8">
            <Plans />
          </article>
          <aside className="col-span-4 flex justify-end">
            <Aside />
          </aside>
        </section>
      </main>
    </>
  );
};

export default HealthInsurence;
