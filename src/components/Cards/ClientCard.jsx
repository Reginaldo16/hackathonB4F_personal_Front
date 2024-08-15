import { UserSquare } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';



const ClientModal = ({ client, onClose }) => {
  if (!client) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white flex gap-9 rounded-lg shadow-lg p-4 w-[30%] items-center justify-center">
      <div className=''>
        <h2 className="text-2xl font-bold mb-4">Detalhes do Cliente</h2>
        <div className="space-y-2">
             <div>
      <UserSquare size={82} className='text-black'/> 
      </div>
          <p><strong>Nome:</strong> {client.name}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Contacto:</strong> {client.contact}</p>
          <p><strong>Sexo:</strong> {client.sex}</p>
  
        </div>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
        

      
      </div>
     
    </div>
  );
};


const ClientCard = ({ client, onDetailsClick }) => (
  <div className="rounded-lg border shadow-sm bg-gray-100 hover:bg-[#fff1e6] transition delay-75">
    <div className="flex flex-col space-y-1.5 p-6 pb-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="font-medium">{client.name}</div>
          <div className="text-xs text-muted-foreground">Workout: {client.workout}</div>
        </div>
        <button
          className="inline-flex items-center bg-[#253468] text-white hover:text-white justify-center whitespace-nowrap text-sm font-medium h-9 rounded-md px-3"
          onClick={() => onDetailsClick(client)}
        >
          Detalhes
        </button>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">Progress: {client.progress}%</div>
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          role="progressbar"
          aria-label={`${client.progress}% progress`}
          className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20"
        >
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${client.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);


const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('http://localhost:3036/api/clients/');
        if (!response.ok) {
          throw new Error('Failed to fetch clients');
        }
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);


  const handleDetailsClick = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <section className="px-4 py-12 md:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">Clientes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.length > 0 ? (
            clients.map((client, index) => (
              <ClientCard
                key={index}
                client={client}
                onDetailsClick={handleDetailsClick} 
              />
            ))
          ) : (
            <p>Loading clients...</p>
          )}
        </div>
      </div>


      {isModalOpen && (
        <ClientModal client={selectedClient} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default ClientsSection;
