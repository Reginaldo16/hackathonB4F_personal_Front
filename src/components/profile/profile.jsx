import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm  mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-purple-500 via-yellow-500 to-green-400"></div>
      <div className="px-6 py-4">
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-20 h-20 rounded-full border-4 border-white -mt-16"
            src="path_to_profile_image.jpg"
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Ulisses</h2>
            <p className="text-gray-600">26 Years old</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="bg-blue-100 rounded-full h-2 mb-2">
            <div className="bg-blue-500 rounded-full h-2 w-[89%]"></div>
          </div>
          <p className="text-sm text-gray-600">Completa o seu perfil 89%</p>
        </div>
        <div className="space-y-2">
          <ProfileItem icon="👤" label="Nome" value="Ulisses" />
          <ProfileItem icon="👤" label="Sexo" value="Masculino" />
          <ProfileItem
            icon="🎂"
            label="Data de Nascimento"
            value="19/09/1998"
          />
          <ProfileItem icon="📞" label="Telefone" value="84687635/873873633" />
          <ProfileItem icon="🏠" label="Morada" value="Maputo Cidade" />
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center text-sm">
      <span className="mr-2">{icon}</span>
      <span className="font-medium w-24">{label}</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
};

export default ProfileCard;
