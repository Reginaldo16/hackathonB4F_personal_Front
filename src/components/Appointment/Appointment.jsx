/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../header.js/Header";


const AppointmentForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sex: "",
    workout: "",
    contact: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  validateField(name, value);
  };

  const validateField = (name, value) => {
    let newError = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) newError = "Nome é obrigatório.";
        break;
      case "email":
        if (!value.trim()) {
          newError = "Email é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newError = "Email inválido.";
        }
        break;
      case "contact":
        if (!value.trim()) {
          newError = "Telefone é obrigatório.";
        } else if (!/^\d{10,15}$/.test(value)) {
          newError = "Telefone inválido. Deve ter entre 10 e 15 dígitos.";
        }
        break;
      case "date":
        if (!value.trim()) newError = "Data é obrigatória.";
        break;
      case "sex":
        if (!value) newError = "Sexo é obrigatório.";
        break;
      case "workout":
        if (!value.trim()) newError = "Descrição do treino é obrigatória.";
        break;
      case "time":
        if (!value.trim()) newError = "Hora é obrigatória.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: newError,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido.";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Telefone é obrigatório.";
    } else if (!/^\d{10,15}$/.test(formData.contact)) {
      newErrors.contact = "Telefone inválido. Deve ter entre 10 e 15 dígitos.";
    }
    if (!formData.date.trim()) newErrors.date = "Data é obrigatória.";
    if (!formData.sex) newErrors.sex = "Sexo é obrigatório.";
    if (!formData.workout.trim()) newErrors.workout = "Descrição do treino é obrigatória.";
    if (!formData.time.trim()) newErrors.time = "Hora é obrigatória.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:3036/api/appointment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulário enviado com sucesso");

        setFormData({
          name: "",
          email: "",
          sex: "",
          workout: "",
          contact: "",
          date: "",
          time: "",
        });
      } else {
        console.error("Erro ao enviar o formulário");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setFormData({
      ...formData,
      time: time,
    });
  };

  const morningSlots = [
    { label: "04:00-6:00", value: "04:00-6:00" },
    { label: "08:00-10:00", value: "08:00-10:00" },
    { label: "11:00-12:00", value: "11:00-12:00" },
  ];

  const afternoonSlots = [
    { label: "13:00-14:00", value: "13:00-14:00" },
    { label: "15:00-16:00", value: "15:00-16:00" },
    { label: "17:00-18:00", value: "17:00-18:00" },
  ];

  const eveningSlots = [
    { label: "18:30-19:30", value: "18:30-19:30" },
    { label: "20:00-21:00", value: "20:00-21:00" },
    { label: "21:00-22:00", value: "21:00-22:00" },
  ];

  return (
    <>
      <Header />
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto my-3 bg-slate-50">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
            Agendar um Treino
          </h3>
          <p className="text-sm text-muted-foreground">
            Preencha o formulário do agendamento
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="name"
              >
                Nome
              </label>
              <input
                className={`flex h-10 w-full rounded-md border ${
                  errors.name ? "border-red-500" : "border-input"
                } bg-slate-100 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`flex h-10 w-full rounded-md border ${
                  errors.email ? "border-red-500" : "border-input"
                } bg-slate-100 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="contact"
              >
                Telefone
              </label>
              <input
                className={`flex h-10 w-full rounded-md border ${
                  errors.contact ? "border-red-500" : "border-input"
                } bg-slate-100 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                id="contact"
                name="contact"
                placeholder="Enter your phone number"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="date"
              >
                Data
              </label>
              <input
                className={`flex h-10 w-full rounded-md border ${
                  errors.date ? "border-red-500" : "border-input"
                } bg-slate-100 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                id="date"
                name="date"
                placeholder="Select date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="sex">
              Sexo
            </label>
            <select
              className={`flex h-10 w-full rounded-md border ${
                errors.sex ? "border-red-500" : "border-input"
              } bg-slate-100 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.sex && <p className="text-red-500 text-sm">{errors.sex}</p>}
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="workout"
            >
              Objectivo do treino
            </label>
            <textarea
              className={`flex w-full rounded-md border ${
                errors.workout ? "border-red-500" : "border-input"
              } bg-slate-100 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[100px]`}
              id="workout"
              name="workout"
              placeholder="Describe your fitness goals"
              value={formData.workout}
              onChange={handleChange}
              required
            ></textarea>
            {errors.workout && <p className="text-red-500 text-sm">{errors.workout}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="time">
              Hora
            </label>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Manhã</h4>
                <div className="grid grid-cols-3 gap-4">
                  {morningSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot.value}
                      className={`flex items-center justify-center h-12 w-full rounded-md border ${
                        selectedTime === slot.value
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100"
                      }`}
                      onClick={() => handleTimeSelect(slot.value)}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Tarde</h4>
                <div className="grid grid-cols-3 gap-4">
                  {afternoonSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot.value}
                      className={`flex items-center justify-center h-12 w-full rounded-md border ${
                        selectedTime === slot.value
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100"
                      }`}
                      onClick={() => handleTimeSelect(slot.value)}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Noite</h4>
                <div className="grid grid-cols-3 gap-4">
                  {eveningSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot.value}
                      className={`flex items-center justify-center h-12 w-full rounded-md border ${
                        selectedTime === slot.value
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100"
                      }`}
                      onClick={() => handleTimeSelect(slot.value)}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AppointmentForm;
