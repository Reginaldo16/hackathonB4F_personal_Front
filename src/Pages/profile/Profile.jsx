import React from "react";
import Header from "../../components/header.js/Header";
import Footer from "../../components/Footer/Footer";
import ProfileCard from "../../components/profile/profile";


function Profile() {
  return (
    <div className="w-full relative min-h-screen">
      <div className="container-md bg-gray-100">
        <Header />
      </div>

      <div className="max-w-7xl h-[30rem] flex items-center pt-18 top-10 justify-center mx-auto px-4 sm:px-6 bg-white ">
       <ProfileCard/>
      </div>

      <div className=" absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
