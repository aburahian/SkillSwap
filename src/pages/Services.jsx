import React, { useEffect, useState } from "react";
import SkillsCard from "./SkillsCard";
import Loading from "./Loading";

const Services = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://skillswap-server-beta.vercel.app/skills")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (loading) return <Loading />;

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const applyFilter = (category = selectedCategory, text = search) => {
    let updated = data;

    if (category !== "All") {
      updated = updated.filter((item) => item.category === category);
    }

    if (text.trim()) {
      updated = updated.filter(
        (item) =>
          item.skillName.toLowerCase().includes(text.toLowerCase()) ||
          item.providerName.toLowerCase().includes(text.toLowerCase())
      );
    }

    setFiltered(updated);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    applyFilter(cat, search);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    applyFilter(selectedCategory, value);
  };

  return (
    <div className="w-11/12 mx-auto my-12">
      <h2 className="text-2xl text-[#f76305] font-bold mb-6">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 p-4 bg-white shadow rounded-lg h-fit">
          <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>

          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg 
                    ${
                      selectedCategory === cat
                        ? "bg-[#f76305] text-white"
                        : "bg-gray-100"
                    }
                  `}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="md:col-span-3 mb-6">
          <div className="flex justify-end items-center gap-2 mb-6 ">
            <input
              type="text"
              placeholder="Search skills..."
              value={search}
              onChange={handleSearchChange}
              className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f76305] transition duration-200"
            />

            <button
              onClick={() => applyFilter(selectedCategory, search)}
              className="px-4 py-2 bg-[#f76305] text-white rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Search
            </button>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">
                No results found.
              </p>
            ) : (
              filtered.map((skill) => (
                <SkillsCard key={skill.skillName} skill={skill} />
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
