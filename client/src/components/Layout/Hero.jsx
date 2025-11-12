import { Link } from "react-router-dom";
import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="hero"
        className="w-full object-center h-[400px] md:h-[600px] lg:h-[calc(100vh-100px)] object-cover"
      />

      <div className="absolute inset-0 bg-brand-black/50 flex items-center justify-center">
        <div className="text-center text-brand-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6 max-w-lg mx-auto">
            Explore our exclusive collection of travel essentials designed to
            make your journeys comfortable and stylish.
          </p>
          <Link
            to="#"
            className="bg-brand-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
