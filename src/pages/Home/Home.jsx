import React, { useContext } from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import Register from "./Register";
import LocationSprade from "./LocationSprade";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";
import CategoryShowCase from "./CategoryShowCase";
import { AuthContext } from "../../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      {!user && <Register />}
      <LocationSprade />
      {!user && <AboutUs />}
      <AppSection />
      <Sponsor />
    </div>
  );
};

export default Home;
