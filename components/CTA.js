import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <div className="relative hero-overlay bg-[#0a0026] bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="max-w-7xl px-8 py-16 md:py-32 text-center">
          <h2 className="max-w-3xl font-black text-4xl md:text-6xl lg:text-7xl tracking-[-0.01em] mb-16 md:mb-32">
            AI Builds, You Ship
          </h2>

          <a href="https://devseek-ai.vercel.app/signin">
            <button className="btn btn-primary btn-wide">
              <h4><b>Get Devseek ⭐</b></h4>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
