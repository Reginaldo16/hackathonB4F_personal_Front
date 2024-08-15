import React from 'react';

export default function ClientCardPopUp({ client, onClose }) {
  if (!client) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 max-w-sm mx-auto relative">
        <div className="p-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              src={client.image || ''} 
              alt={client.name}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-900">{client.name}</h2>
            <p className="text-sm text-gray-600">{client.email}</p>
            <p className="text-sm text-gray-600">{client.phone}</p>
            <p className="mt-2 text-gray-700">{client.description}</p>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Contactar
          </button>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
