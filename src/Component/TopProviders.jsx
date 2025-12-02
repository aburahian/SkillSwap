import React, { use } from "react";
import { DataContext } from "../Context/Data/DataContext";
import "animate.css";
import Loading from "../pages/Loading";

const TopProviders = () => {
  const { data, loading } = use(DataContext);
  if (loading) {
    return <Loading></Loading>;
  }
  const topProvider = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
  return (
    <section className="my-12 px-5 md:px-10 bg-base-300 py-9 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-[#f76305]  mb-8 text-center animate__animated animate__fadeInDown">
        Top Rated Providers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {topProvider.map((provider) => (
          <div
            key={provider._id}
            className="w-72 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full  flex items-center justify-center text-white text-xl font-bold">
                <img
                  className="w-14 h-14 rounded-full"
                  src={provider.image}
                  alt=""
                />
              </div>
            </div>
            <p className="text-sm">
              <span className="text-yellow-500 font-medium">
                ⭐ {provider.rating}
              </span>
            </p>
            <h3 className="text-lg font-semibold text-gray-800">
              {provider.providerName}
            </h3>
            <p className="text-sm text-gray-500">{provider.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProviders;
