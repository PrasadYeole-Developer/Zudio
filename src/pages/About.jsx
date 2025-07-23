import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover fixed top-0 left-0 z-10 pointer-events-none"
      >
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="w-full min-h-screen p-8 select-none font-black text-white flex flex-col relative z-10">
        <Navbar />
        <section className="top flex flex-col gap-4 px-4 sm:px-8 py-10 sm:py-16">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Style for All. <br /> Walk In. Stand Out.{" "}
          </h1>
          <p className="text-white text-xs sm:text-sm tracking-wider leading-6 font-semibold">
            Zudio, a fashion-forward brand by Tata’s Trent Limited, was created
            to serve India’s rising demand for trendy yet affordable clothing.
            Its mission is built around the “AAA” formula – Accessibility,
            Affordability, and an Attractive product line. With this, Zudio aims
            to make style democratic and easy for everyone.
            <br />
            Unlike most brands today, Zudio is proudly offline-first – its
            stores are the core of the brand experience. There’s no e-commerce
            or delivery; instead, each visit to a Zudio store feels like a
            treasure hunt, thanks to daily refreshed collections, vibrant
            designs, and budget-friendly prices (shirts starting at ₹299).
            <br />
            Whether you're updating your wardrobe or looking for something bold
            and new, Zudio makes fashion accessible without compromise.
          </p>
        </section>
        <section className="mb-16 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 flex items-center gap-2">
            <span role="img" aria-label="clock">
              🕒
            </span>{" "}
            Zudio Growth Timeline – Key Milestones
          </h2>
          <ol className="border-l-4 border-white/30 pl-4 sm:pl-8 space-y-6">
            <li>
              <div className="text-base sm:text-lg font-bold">2016</div>
              <div className="text-white/80">
                First Zudio store opened on Commercial Street, Bangalore
              </div>
            </li>
            <li>
              <div className="text-base sm:text-lg font-bold">2018</div>
              <div className="text-white/80">
                Nationwide launch as a fast-fashion value brand
              </div>
            </li>
            <li>
              <div className="text-base sm:text-lg font-bold">2023</div>
              <div className="text-white/80">
                Crossed 100 stores across India
              </div>
            </li>
            <li>
              <div className="text-base sm:text-lg font-bold">2024</div>
              <div className="text-white/80">
                Reached 545 stores in 164 cities with ₹7,000 crore annual
                revenue
              </div>
            </li>
            <li>
              <div className="text-base sm:text-lg font-bold">2025</div>
              <div className="text-white/80">
                600+ stores and counting – one of India’s fastest-growing
                fashion chains
              </div>
            </li>
          </ol>
        </section>
        <section className="mb-16 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 flex items-center gap-2">
            <span role="img" aria-label="speech">
              💬
            </span>{" "}
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-black/75 rounded-lg p-4 sm:p-6 shadow-lg">
              <p className="italic mb-2 text-sm sm:text-base">
                “Zudio’s clothes let me stay on-trend without spending a
                fortune.”
              </p>
              <div className="font-semibold text-xs sm:text-sm text-white/70">
                – Anita, Mumbai
              </div>
            </div>
            <div className="bg-black/75 rounded-lg p-4 sm:p-6 shadow-lg">
              <p className="italic mb-2 text-sm sm:text-base">
                “Zudio’s kids’ collection is colorful and comfy.”
              </p>
              <div className="font-semibold text-xs sm:text-sm text-white/70">
                – Rahul, Bengaluru
              </div>
            </div>
            <div className="bg-black/75 rounded-lg p-4 sm:p-6 shadow-lg">
              <p className="italic mb-2 text-sm sm:text-base">
                “Affordable denim and tees – perfect for college life.”
              </p>
              <div className="font-semibold text-xs sm:text-sm text-white/70">
                – Sneha, Delhi
              </div>
            </div>
            <div className="bg-black/75 rounded-lg p-4 sm:p-6 shadow-lg">
              <p className="italic mb-2 text-sm sm:text-base">
                “Got a wedding kurta set for a steal – looks amazing!”
              </p>
              <div className="font-semibold text-xs sm:text-sm text-white/70">
                – Priya, Kolkata
              </div>
            </div>
            <div className="bg-black/75 rounded-lg p-4 sm:p-6 shadow-lg">
              <p className="italic mb-2 text-sm sm:text-base">
                “Friendly staff and fresh collections every visit.”
              </p>
              <div className="font-semibold text-xs sm:text-sm text-white/70">
                – Varun, Jaipur
              </div>
            </div>
            <div className="bg-black/75 rounded-lg p-4 sm:p-6 shadow-lg">
              <p className="italic mb-2 text-sm sm:text-base">
                “Stylish shoes under ₹1000? Zudio nailed it.”
              </p>
              <div className="font-semibold text-xs sm:text-sm text-white/70">
                – Neha, Chennai
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 flex items-center gap-2">
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            Store Locator
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black/50 rounded-lg text-left text-xs sm:text-base">
              <thead>
                <tr className="text-white/90">
                  <th className="py-2 sm:py-3 px-2 sm:px-4">City</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4">Mall / Area</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4">Store Name</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4">Pincode</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Mumbai</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">
                    Phoenix Marketcity (Lower Parel)
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - Lower Parel</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">400013</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">New Delhi</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Select Citywalk Mall (Saket)</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - Saket</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">110017</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Bengaluru</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Phoenix Marketcity (Whitefield)</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - Whitefield</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">560066</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Chennai</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">
                    Express Avenue Mall (Royapettah)
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - Royapettah</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">600014</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Kolkata</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Axis Mall (New Town)</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - New Town</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">700156</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Pune</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">
                    Phoenix Marketcity (Viman Nagar)
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - Viman Nagar</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">411014</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Hyderabad</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">GVK One Mall (Banjara Hills)</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - Banjara Hills</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">500034</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Jaipur</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">GT Central Mall (JLN Marg)</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - JLN Marg</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">302017</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Ahmedabad</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">AlphaOne Mall (SG Highway)</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - SG Highway</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">380015</td>
                </tr>
                <tr>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Chandigarh</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">Metro Plaza Mall (Sector 17)</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">ZUDIO - Sector 17</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">160017</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="w-full p-8">
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
