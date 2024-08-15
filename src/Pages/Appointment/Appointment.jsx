import React, { useState, useEffect } from "react";

function Appointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:3036/api/appointment");
        if (response.ok) {
          const data = await response.json();

       
          data.sort((a, b) => new Date(a.date + "T" + a.time) - new Date(b.date + "T" + b.time));

          setAppointments(data);
        } else {
          console.error("Erro ao buscar agendamentos");
        }
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      }
    };

    fetchAppointments();
  }, []);


  const periods = {
    morning: { label: "Manhã", start: 4, end: 12 },
    afternoon: { label: "Tarde", start: 13, end: 17 },
    evening: { label: "Noite", start: 18, end: 22 },
  };

  const groupedAppointments = appointments.reduce((acc, appointment) => {
    const hour = parseInt(appointment.time.split(":")[0], 10);


    let period;
    if (hour >= periods.morning.start && hour <= periods.morning.end) {
      period = "morning";
    } else if (hour >= periods.afternoon.start && hour <= periods.afternoon.end) {
      period = "afternoon";
    } else if (hour >= periods.evening.start && hour <= periods.evening.end) {
      period = "evening";
    }

    if (period) {
      if (!acc[period]) {
        acc[period] = [];
      }
      acc[period].push(appointment);
    }

    return acc;
  }, {});


  const colors = ["#bfdbfe", "#fff1e6", "#fbcfe8"];

  return (
    <div className="bg-gray-100 p-6 h-[35rem] rounded-md z-10 shadow overflow-y-auto">
      <header className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">Minha Agenda</h1>
        <div className="flex items-center space-x-2 text-sm">
          <button className="px-2 py-1 bg-gray-200 rounded">&lt;</button>
          <span>Today</span>
          <span className="font-bold">Oct 19, 2022</span>
          <button className="px-2 py-1 bg-gray-200 rounded">&gt;</button>
        </div>
      </header>

      <div className="space-y-6">
        {Object.keys(periods).map((period) => (
          <div key={period}>
            <h2 className="text-lg font-bold mb-2">{periods[period].label}</h2>
            <div className="space-y-4">
              {groupedAppointments[period] ? (
                groupedAppointments[period].map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-3 rounded shadow-md"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    <div>
                      <p className="font-bold">
                        {appointment.time} - {appointment.name}
                      </p>
                      <p>{appointment.workout}</p>
                    </div>
                    {/* <div>
                      <span className="text-sm">
                        {new Date(appointment.date).toLocaleDateString()}
                      </span>
                    </div> */}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Nenhum agendamento neste período.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointment;
