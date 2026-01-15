import TestimonialBottom from "../molecules/TestimonialBottom";
import TestimonialTop from "../molecules/TestimonialTop";

export default function Testimonials() {
  return (
    <>
      <TestimonialTop />

      <section className="px-4 md:px-8 pt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">Setapp in your words.</h2>

            <p className="text-lg text-gray-600 leading-relaxed flex-1 max-w-xs">
              What you say about how Setapp powers you up.
            </p>

            <div className="flex gap-4">
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Facebook">
                <img src="imgs/facebook-fill.svg" alt="Facebook" className="w-10" />
              </a>
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Twitter">
                <img src="imgs/twitter-fill.svg" alt="Twitter" className="w-10" />
              </a>
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Instagram">
                <img src="imgs/instagram-fill.svg" alt="Instagram" className="w-10" />
              </a>
              <a href="#" className="transition-opacity flex items-center justify-center" aria-label="Youtube">
                <img src="imgs/youtube-fill.svg" alt="Youtube" className="w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialBottom />

      <hr />
    </>
  );
}
