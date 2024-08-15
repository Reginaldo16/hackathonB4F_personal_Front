import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardCard = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <span className="text-3xl">{icon}</span> 
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-sm text-gray-500">{change}</div>
    </div>
  );
};

const Dashboard = () => {
  const [totalClients, setTotalClients] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(0);

  useEffect(() => {

    axios.get('http://localhost:3036/api/clients')
      .then(response => {
        setTotalClients(response.data.length);
      })
      .catch(error => {
        console.error("Erro ao buscar dados de clientes:", error);
      });

  
    axios.get('http://localhost:3036/api/appointment')
      .then(response => {
        setTotalAppointments(response.data.length); 
      })
      .catch(error => {
        console.error("Erro ao buscar dados de marcações:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-6">
      <DashboardCard
        title="Total de Clientes"
        value={totalClients}
        icon="👥"
      />
      <DashboardCard
        title="Próximas Marcações"
        value={totalAppointments}
        icon="📅"
      />
      <DashboardCard
        title="Tempo médio por secção"
        value="1:45 min" 
        icon="⏱️"
      />
    </div>
  );
};

export default Dashboard;
