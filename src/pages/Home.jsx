import { use } from "react";
import { DataContext } from "../Context/Data/DataContext";
import SkillsCard from "./SkillsCard";
import Loading from "./Loading";
import { Link } from "react-router";

const Home = () => {
  const { data, loading } = use(DataContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto my-12">
      <h2 className="text-2xl font-bold text-[#f76305] mb-4">
        Available Skills
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 my-10">
        {data.map((skill) => (
          <SkillsCard key={skill._id} skill={skill}></SkillsCard>
        ))}
      </section>
      <div className="flex justify-center  my-16">
        <Link to={"service/"} className="btn btn-ghost w-30 text-white bg-[#f76305]">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Home;
