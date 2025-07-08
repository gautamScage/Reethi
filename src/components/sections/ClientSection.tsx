import React from "react";

const ClientSection: React.FC = () => {
  const clients = [
    // Line 1 - 4 clients
    { name: "Client 1", logo: "/images/Client_l1_1.svg" },
    { name: "Client 2", logo: "/images/Client_l1_2.svg" },
    { name: "Client 3", logo: "/images/Client_l1_3.svg" },
    // Line 2 - 3 clients
    { name: "Client 5", logo: "/images/Client_l2_1.svg" },
    { name: "Client 6", logo: "/images/Client_l2_2.svg" },
    { name: "Client 7", logo: "/images/Client_l2_3.svg" },
    { name: "Client 4", logo: "/images/Client_l1_4.svg" },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 bg-background gap-8">
      {/* Heading */}
      <h2
        className="text-4xl md:text-6xl font-light text-neutral-800 mb-16 text-center tracking-widest uppercase"
        style={{ fontFamily: "Alta, Arial, sans-serif" }}
      >
        Our Valuable Clients
      </h2>

      {/* First Row - 4 clients */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 p-4 max-w-5xl">
        {clients.slice(0, 4).map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-5 md:p-10 border border-[#90AE70]/50 h-24 w-24 md:w-48 md:h-48 flex items-center justify-center hover:shadow-md"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="
          w-full h-auto object-contain 
        "
              style={{ filter: "grayscale(20%)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(20%)";
              }}
            />
          </div>
        ))}
        {clients.slice(4, 7).map((client, index) => (
          <div
            key={index + 4}
            className="bg-white rounded-md p-5 md:p-10 border border-[#90AE70]/50 h-24 w-24 md:w-48 md:h-48 flex items-center justify-center hover:shadow-md"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="
          w-full h-auto max-w-12 md:max-w-20 max-h-16 object-contain 
        "
              style={{ filter: "grayscale(20%)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(20%)";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
