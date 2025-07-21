import Footer from "./Footer";
import WhatsappCTA from "./WhatsappCTA";
import { useNavigate } from "react-router-dom";

const TermsAndCondition = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen"
      
    >
      <main className="pt-8 pb-5 px-4 md:px-8 max-w-4xl mx-auto" style={{ fontFamily: "Alta, Arial, sans-serif" }}>
        <button
          onClick={handleGoHome}
          className="top-8 left-4 md:left-8 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
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
          <span className="text-sm md:text-base font-medium">Back to Home</span>
        </button>
        {/* Privacy Policy Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            Privacy Policy
          </h1>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">
          {/* Introduction */}
          <p className="text-base md:text-lg">
            Your privacy is important to us. This is why, as a Reethi Gifts
            customer, we are committed to the protection of your Privacy.
          </p>

          <p className="text-base md:text-lg font-medium pt-5">We assure:</p>

          <p className="text-base md:text-lg">
            While offering you valued added service, our foremost interest is to
            reciprocate your faith.
          </p>

          {/* Privacy Commitments List */}
          <div className="space-y-4 mt-8 mb-20">
            <div className="flex items-start">
              <span className="text-base md:text-lg font-medium mr-3">
                1.&nbsp;
              </span>
              <p className="text-base md:text-lg">
                We will safeguard your personal information.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-base md:text-lg font-medium mr-3">
                2.&nbsp;
              </span>
              <p className="text-base md:text-lg">
                We will limit the use of your information to the extent that we
                reasonably require to deliver our products, services and other
                opportunities, and to administer our business.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-base md:text-lg font-medium mr-3">
                3.&nbsp;
              </span>
              <p className="text-base md:text-lg">
                We will permit only authorised employees, who are trained in
                proper handling of customer information, to have access to that
                information. Employees who violate our Privacy Promise will be
                subject to our normal disciplinary process.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-base md:text-lg font-medium mr-3">
                4.&nbsp;
              </span>
              <p className="text-base md:text-lg">
                You can request us, in writing, to remove your name from
                marketing lists.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-base md:text-lg font-medium mr-3">
                5.&nbsp;
              </span>
              <p className="text-base md:text-lg">
                Whenever we hire other organisations to provide support
                services, we will require them to conform to our privacy
                standards and allow us to audit them for compliance.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-base md:text-lg font-medium mr-3">
                6.&nbsp;
              </span>
              <p className="text-base md:text-lg">
                We will attempt to keep your files complete, up to date, and
                accurate. We will continuously assess ourselves to ensure that
                your privacy is respected. We will conduct our business in a
                manner that fulfills our Promise in the many countries in which
                we do business.
              </p>
            </div>
          </div>
        </div>

        {/* How we use information section - moved outside the space-y-6 container */}
        <div className="text-gray-700 mt-20 pt-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-6 mt-20">
            How we use information
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            Your information is important to us at Reethi Gifts. We shall use
            your information to provide you with quick and convenient access to
            you, to provide you with information about products & services and
            of new items of interest. We undertake not to divulge your
            information, save and except where we are required, by law, to
            respond to statutory authorities or direction of any Court or legal
            authority.
          </p>
        </div>
      </main>
      <WhatsappCTA />
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
