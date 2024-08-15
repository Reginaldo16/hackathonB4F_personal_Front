import React from "react";
import Header from "../../components/header.js/Header";
import Appointment from "../Appointment/Appointment";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="w-full relative min-h-screen">
        <div className="container-md bg-gray-100">
          <Header />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white mb-2 ">
          <div className=" flex justify-center items-center mt-2">
            <div className="flex-1 my-2">
              <h1 className="text-start font-bold text-2xl ">
                Bem-Vindo, Ulisses
              </h1>
              <div className="bg-white shadow my-4 py-8 rounded-md px-8">
                <p className="text-xl">
                  Aqui você pode visualizar todos os compromissos marcados para
                  hoje, as próximas semanas e as datas futuras.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img src="/logo.png" alt="" />
            </div>
          </div>
          <section className="mb-12">
            <Appointment />
          </section>
        </div>

        <div className=" ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
