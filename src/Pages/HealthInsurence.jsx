import QuickFilters from "../components/QuickFilters/Filters";
import EditDetails from "../components/EditDetails/EditDetails";
import Aside from "../components/Aside/Aside";
import Plans from "../components/Plans/Plans";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/ValuesForMoney/Card";
import BasicPlans from "../components/BasicPlans/BasicPlans";
import QuicklyFind from "../components/QuicklyFind/QuicklyFind";
import ShortlistedPlans from "../components/ShortlistedPlans/ShortlistedPlans";

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
            <Card/>
            <BasicPlans/>
          </article>
          <aside className="col-span-4 flex flex-col items-end">
            <QuicklyFind/>
            <ShortlistedPlans/>
            <Aside />
          </aside>
        </section>
      </main>
    </>
  );
};

export default HealthInsurence;
