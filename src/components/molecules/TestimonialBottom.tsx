import { useState, useMemo } from "react";

const SOCIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    quote:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    bgColor: "bg-[#717696]",
    socialIcon: "imgs/twitter.svg",
  },
  {
    id: 2,
    name: "Mauricio Sanchez",
    handle: "@m741s",
    quote: "My favorites from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    bgColor: "bg-[#D9A67E]",
    socialIcon: "imgs/instagram.svg",
  },
  {
    id: 3,
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    bgColor: "bg-[#7A5C7A]",
    socialIcon: "imgs/facebook.svg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    handle: "@sarah.johnson",
    quote: "Setapp has completely transformed how I work. Finding the right tools is now easier than ever before!",
    bgColor: "bg-[#4A7C59]",
    socialIcon: "imgs/twitter.svg",
  },
  {
    id: 5,
    name: "David Martinez",
    handle: "@davidm_dev",
    quote: "The best investment for Mac users. The productivity gains alone are worth the subscription price.",
    bgColor: "bg-[#8B5A8A]",
    socialIcon: "imgs/instagram.svg",
  },
  {
    id: 6,
    name: "Emily Chen",
    handle: "@emilychen.design",
    quote: "As a designer, Setapp gives me access to premium tools that would normally cost thousands.",
    bgColor: "bg-[#C9956F]",
    socialIcon: "imgs/facebook.svg",
  },
];

export default function TestimonialBottom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesPerView(3);
    } else if (width >= 640) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  };

  useMemo(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = SOCIAL_TESTIMONIALS.length;
  const visibleSlides = Math.min(slidesPerView, totalSlides);
  const maxIndex = totalSlides - visibleSlides;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleItems = SOCIAL_TESTIMONIALS.slice(currentIndex, currentIndex + visibleSlides);
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl relative testimonial-container">
        {/* Arrows */}
        <div className="flex justify-end gap-3 md:gap-4 mb-6 md:mb-8">
          <button
            onClick={handlePrev}
            type="button"
            className="group testimonial-prev-btn cursor-pointer opacity-60 hover:opacity-100 transition-all z-20 p-1.5 md:p-2 rounded-lg hover:bg-white"
            aria-label="Previous testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700 group-hover:text-gray-900 md:w-6 md:h-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            type="button"
            className="group testimonial-next-btn cursor-pointer opacity-60 hover:opacity-100 transition-all z-20 p-1.5 md:p-2 rounded-lg hover:bg-white"
            aria-label="Next testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700 group-hover:text-gray-900 md:w-6 md:h-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-8 md:pb-12">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-full rounded-lg md:rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className={`${item.bgColor} p-4 md:p-8 grow min-h-56 md:min-h-72 flex flex-col justify-between`}>
                <p className="text-white text-sm md:text-lg font-medium leading-relaxed mb-3 md:mb-4">{item.quote}</p>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="bg-white p-4 md:p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs md:text-sm">{item.name}</h4>
                  <p className="text-gray-400 text-[10px] md:text-xs mt-1">{item.handle}</p>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  <img src={item.socialIcon} alt={`${item.name} social`} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
          {Array.from({ length: totalSlides - visibleSlides + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-gray-900 w-6 md:w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentIndex ? "page" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
