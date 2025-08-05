import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import WhatsappCTA from "./WhatsappCTA";

const SuccessRedirection = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="pl-20 pt-8">
        <button
          onClick={handleGoHome}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          style={{ fontFamily: "Alta, Arial, sans-serif" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:transform group-hover:-translate-x-1 transition-transform duration-200"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm md:text-base font-medium ml-2">Back to Home</span>
        </button>
      </div>
      <main
        className="flex-1 pb-2 px-4 md:px-8 max-w-4xl mx-auto"
        style={{ fontFamily: "Alta, Arial, sans-serif" }}
      >
        {/* Success Content */}
        <div className="text-center mb-6 mt-12">
          <div className="mb-8">
            <svg
              className="mx-auto h-20 w-20 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-gray-800">
            Thank you!
          </h1>
        </div>

        <div className="text-gray-700 leading-relaxed text-center">
          <p className="text-base md:text-lg">
            The form was submitted successfully
          </p>
        </div>
      </main>

      <div className="mt-auto">
        <WhatsappCTA />
        <Footer />
      </div>
    </div>
  );
};

export default SuccessRedirection;
