import Logo from "../atoms/Logo";
import HeroOverlay from "../molecules/HeroOverlay";

export default function Hero() {
  return (
    <>
      <div className="relative mt-8 sm:mt-12 md:mt-16 mb-32 sm:mb-48 md:mb-60 px-4 sm:px-6 md:px-8">
        <HeroOverlay />
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <div className="bg-black hover:bg-card transition duration-300 w-fit rounded-2xl py-2 px-4 sm:px-6">
            <Logo size={80} />
          </div>

          <div className="flex flex-col justify-center items-center gap-2 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-2 sm:my-4 text-center">
            <h1>Dozens of apps.</h1>
            <h1>One subscription.</h1>
            <h1>$9.99</h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="#"
              className="rounded-tertiary px-4 sm:px-6 py-2 sm:py-4 text-black bg-gray-50 hover:text-white hover:bg-black transition text-sm sm:text-base md:text-lg font-medium"
            >
              Try free for 7 days
            </a>
            <a href="#" className="rounded-tertiary p-2 sm:p-3 md:p-4 bg-gray-50 hover:bg-gray-200 transition">
              <img src="imgs/Apple.svg" alt="Apple" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="rounded-tertiary p-2 sm:p-3 md:p-4 bg-gray-50 hover:bg-gray-200 transition">
              <img src="imgs/Google.svg" alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-sm text-center font-light leading-relaxed">
            Power up your workflow with Setapp, a smart way to get apps.
          </p>
        </div>
      </div>
    </>
  );
}
