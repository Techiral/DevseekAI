import Image from "next/image"; 
import config from "@/config";
import Supabase from "@/app/bb.png";
import TestimonialsAvatars from "./TestimonialsAvatars";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 font-size: 60px font-weight: 900 letter-spacing: -0.4px line-height: 1 text-gray-200">
              Build Apps {" "}
              <span className="bg-yellow-500 text-gray-900 px-1.5 mx-1 rounded transition duration-200 hover:bg-gray-900 hover:text-yellow-500 leading-tight">
                  No Devs
              </span>

        </h1>

        <p className="text-lg opacity-80 leading-relaxed">
          Your AI-powered dev team—zero humans, zero limits.
        </p>
        <a href="https://devseek-ai.vercel.app/signin">
          <button className="btn btn-primary btn-wide">
            <h4><b>Get Devseek ⭐</b></h4>
          </button>
        </a>
        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src={Supabase}
          alt="You Don’t Need Developers Anymore."
          className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_5px_15px_rgba(253,224,71,0.6)]"
          priority={true}
          width={4000}
          height={2250}
        />
      </div>
    </section>
  );
};

export default Hero;
