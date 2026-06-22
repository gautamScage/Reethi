import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-[#d8e4cc] relative w-full rounded-t-[50%_2%] rounded-b-[50%_2%]">
      {/* Background Images */}
      <div
        className="absolute -rotate-[16deg] -top-20 w-32 h-40 -left-4
                md:rotate-0 md:-top-10 md:left-22 md:w-48 md:h-56"
      >
        <img
          src="/images/about_top_left.webp"
          alt="Gift set with thank you card"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className="absolute rotate-[10deg] -right-12 -top-10 w-32 h-40 
                md:rotate-0 md:top-20 md:-right-12 md:w-56 md:h-80"
      >
        <img
          src="/images/About_top_right.webp"
          alt="Product packaging collection"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className="absolute -bottom-10 -left-4 w-32 h-24 -rotate-[30deg] 
                md:rotate-0 md:-bottom-12 md:-left-10 md:w-72 md:h-40"
      >
        <img
          src="/images/about_left_bt.webp"
          alt="Gift items collection"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      <div
        className="absolute -bottom-10 right-[-50px] w-32 h-32 rotate-[30deg] 
                md:rotate-0 md:-bottom-20 md:right-20 md:w-64 md:h-64"
        style={{ zIndex: 1 }}
      >
        <img
          src="/images/About_bottom_right.webp"
          alt="Premium gift box"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-16 px-4 py-20 max-w-3xl mx-auto">
        <h2
          className="text-[2.5rem] mt-4 text-neutral-800 md:tracking-wider"
          style={{ fontFamily: "Alta, sans-serif" }}
        >
          ABOUT US
        </h2>

        <div className="flex flex-col gap-8 max-w-xs md:max-w-full text-xs md:text-base">
          <p>
            At Reethi, which means beautiful, we believe that thoughtful
            gestures build lasting relationships. That's why we're dedicated to
            providing exceptional corporate gifting solutions that help
            businesses like yours show appreciation, build connections, and
            drive success. With a curated selection of unique and high- quality
            gifts, we make it easy to express your gratitude and elevate your
            brand. We're passionate about the art of gifting and we're built on
            a foundation of creativity, integrity, and customer devotion.
          </p>

          <p>
            Our journey began with a simple idea, to help businesses connect
            with their clients, employees, and partners on a deeper level.
            Founded by Meenu Batra and Mahima Agarwal in 2023, our company has
            grown into a trusted partner for corporate gifting, delivering
            personalized and memorable experiences that foster loyalty and
            appreciation. As a leading corporate gifting company, Reethi brings
            years of expertise and innovation to the table. Our team of seasoned
            professionals has a deep understanding ofthe industryand a keen eye
            for detail. We partner with reputable suppliers to offer an
            extensive range of premium gifts, ensuring that every item meets our
            high standards. Whether you're looking to reward employees, retain
            clients, or promote your brand, we've got the expertise to guide
            you.
          </p>

          <p className="text-center">
            We're proud to be a part of your business's story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
