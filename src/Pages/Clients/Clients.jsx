import React from "react";

import Header from "../../components/header.js/Header";
import Dashboard from "../../components/Dashboard/Dashboard";
import ClientsSection from "../../components/Cards/ClientCard";
import Footer from "../../components/Footer/Footer";

function Clients() {
  return (
    <div className="w-full relative min-h-screen">
      <div className="container-md bg-gray-100">
        <Header />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white ">
        <section>
          <Dashboard />
        </section>
        <ClientsSection />
      </div>

      <div className="absolute bottom-0 bg-red-300 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Clients;
