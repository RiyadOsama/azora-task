import Logo from "../atoms/Logo";
import HeroOverlay from "../molecules/HeroOverlay";

export default function Hero() {
  return (
    <>
      <div className="relative mt-16 mb-90">
        <HeroOverlay />
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="bg-black hover:bg-card transition duration-300 w-fit rounded-2xl py-2 px-6">
            <Logo size={100} />
          </div>

          <div className="flex flex-col justify-center items-center gap-2 font-bold text-6xl my-4">
            <h1>Dozens of apps.</h1>
            <h1>One subscription.</h1>
            <h1>$9.99</h1>
          </div>

          <div className="flex justify-center items-center gap-3">
            <a
              href="#"
              className="rounded-tertiary px-6 py-4 text-black bg-gray-50 hover:text-white hover:bg-black transition text-lg"
            >
              Try free for 7 days
            </a>
            <a href="#" className="rounded-tertiary p-4 bg-gray-50 ">
              <img src="imgs/Apple.svg" alt="Apple" />
            </a>
            <a href="#" className="rounded-tertiary p-4  bg-gray-50">
              <img src="imgs/Google.svg" alt="Google" />
            </a>
          </div>

          <p className="text-xl max-w-sm text-center font-light">
            Power up your workflow with Setapp, a smart way to get apps.
          </p>
        </div>
      </div>
    </>
  );
}
