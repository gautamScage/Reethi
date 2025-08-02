const WhatsappCTA = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <img
        src="/icons/whatsapp.png"
        alt="whatsapp"
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-12 md:h-12 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() =>
          window.open(
            "https://wa.me/9958100762?text=Hi%20Reethi%20Gifts%20team!%20I%27m%20interested%20in%20your%20corporate%20gifting%20solutions.%20Please%20share%20your%20catalog%20or%20help%20me%20with%20a%20custom%20gifting%20plan%20for%20my%20company.%20Thanks!",
            "_blank"
          )
        }
      />
    </div>
  );
};

export default WhatsappCTA;
