import React, { use } from "react";
import { DataContext } from "../Context/Data/DataContext";
import SkillsCard from "./SkillsCard";
import Loading from "./Loading";

const Services = () => {
  const { data, loading } = use(DataContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {data.map((skill) => (
          <SkillsCard key={skill.skillId} skill={skill}></SkillsCard>
        ))}
      </section>
    </div>
  );
};

export default Services;
