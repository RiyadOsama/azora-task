import TestimonialBottom from "../molecules/TestimonialBottom";
import TestimonialTop from "../molecules/TestimonialTop";

export default function Testimonials() {
  return (
    <div id="pricing" className="bg-linear-to-b from-primary from-25% to-secondary to-25% py-8 md:py-16 lg:py-20">
      <TestimonialTop />

      <section className="px-4 sm:px-6 md:px-8 pt-6 md:pt-8 lg:pt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6 lg:gap-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 whitespace-normal lg:whitespace-nowrap">
              Setapp in your words.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed flex-1 max-w-sm">
              What you say about how Setapp powers you up.
            </p>

            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Facebook">
                <img src="imgs/facebook-fill.svg" alt="Facebook" className="w-8 sm:w-10" />
              </a>
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Twitter">
                <img src="imgs/twitter-fill.svg" alt="Twitter" className="w-8 sm:w-10" />
              </a>
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Instagram">
                <img src="imgs/instagram-fill.svg" alt="Instagram" className="w-8 sm:w-10" />
              </a>
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Youtube">
                <img src="imgs/youtube-fill.svg" alt="Youtube" className="w-8 sm:w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialBottom />

      <hr />
    </div>
  );
}
