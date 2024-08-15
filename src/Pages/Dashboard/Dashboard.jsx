import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../../components/header.js/Header";
import Footer from "../../components/Footer/Footer";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardHome() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3036/api/appointment/")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as marcações:", error);
      });
  }, []);

  const clientRetentionData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Retenção de Clientes",
        data: [100, 150, 125, 50, 75, 130],
        borderColor: "rgb(34, 197, 94)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const sessionDurationData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Duração da Secção",
        data: [60, 90, 80, 30, 75, 85],
        backgroundColor: "rgb(34, 197, 94)",
      },
    ],
  };
  const handleDelete=(id) => {
    axios.delete(`http://localhost:3036/api/appointment/${id}`)
   .then(() => {
    
     setAppointments(appointments.filter(item => item._id!== id));
   })
  }

  return (
    <>
      <div className="w-full relative min-h-screen">
        <div className="container-md bg-gray-100">
          <Header />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white ">
          <section>
            <Dashboard />
          </section>
          <div className="flex flex-col space-y-8 p-8">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full">
              <h2 className="text-xl font-semibold mb-6">Próximas Marcações</h2>
              <table className="min-w-full text-left table-auto">
                <thead>
                  <tr className="text-gray-600 text-lg">
                    <th className="px-6 py-4">Cliente</th>
                    <th className="px-6 py-4">Data</th>
                    <th className="px-6 py-4">Hora</th>
                    <th className="px-6 py-4">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.length > 0 ? (
                    appointments.map((appointment, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-300 text-lg"
                      >
                        <td className="px-6 py-4">{appointment.name}</td>
                        <td className="px-6 py-4">{appointment.date}</td>
                        <td className="px-6 py-4">{appointment.time}</td>
                        <td className="px-6 py-4"> 1:30 min</td>
                        <td className="px-6 py-4"> 
                        <button onClick={()=>handleDelete(appointment._id)}>
                        <MdDelete  color="red"/>
                        </button>

                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Nenhuma marcação encontrada
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <Link
                to="/appointment"
                className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg text-lg"
              >
                + Agendar treino
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">
                    Retenção de Clientes
                  </h2>
                  <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
                    Relatório
                  </button>
                </div>
                <div className="h-[400px] w-full">
                  <Line
                    data={clientRetentionData}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Duração da Secção</h2>
                  <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
                    Relatório
                  </button>
                </div>
                <div className="h-[400px] w-full">
                  <Bar
                    data={sessionDurationData}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-red-300 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
