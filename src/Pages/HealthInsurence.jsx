import QuickFilters from "../components/QuickFilters/Filters";
import EditDetails from "../components/EditDetails/EditDetails";
import Advantages from "../components/Aside/Advantages";
import Plans from "../components/Plans/Plans";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/ValuesForMoney/Card";
import BasicPlans from "../components/BasicPlans/BasicPlans";
import QuicklyFind from "../components/Aside/QuicklyFind";
import ShortlistedPlans from "../components/Aside/ShortlistedPlans";

const HealthInsurence = () => {
  return (
    <>
      <Navbar />
      <main className="mx-5">
        <QuickFilters />
        <EditDetails />
        <section className="grid grid-cols-12">
          <article className="col-span-12 md:col-span-8">
            <Plans />
            <Card />
            <BasicPlans />
          </article>
          <aside className="hidden md:block col-span-4 ">
            <div className="flex flex-col items-end">
              <QuicklyFind />
              <ShortlistedPlans />
              <Advantages />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default HealthInsurence;
