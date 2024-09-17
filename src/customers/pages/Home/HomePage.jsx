import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";

const HomePage = () => {
  const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);

  return (
    <div>
      {/* Banner section with video */}
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <video
          className="banner-video"
          src="BannerFoodeli.mp4"  // Provide your video file path here
          autoPlay
          loop
          muted
        />
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">Foodeli</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            <i>very fast! 🛵🚀</i>
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      {/* Top Meals Section */}
      <section className="p-10 lg:py-10 lg:px-20">
        <div>
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Meals
          </p>
          <MultipleItemsCarousel />
        </div>
      </section>

      {/* Handpicked Favorites Section */}
      <section className="px-5 lg:px-20">
        <div>
          <h1 className="text-2xl font-semibold text-gray-400 py-3">
            Order From Our Handpicked Favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around">
            {restaurant.restaurants.map((item, i) => (
              <RestaurantCard key={i} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
