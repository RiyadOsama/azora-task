import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Jason Staczek",
    quote:
      "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    image: "imgs/jason.svg",
    bgColor: "bg-[#765070]",
  },
  {
    id: 2,
    name: "Adam Chen",
    quote:
      "Designers use Setapp to streamline their workflow, finding the perfect tool for every pixel-perfect detail.",
    image: "imgs/adam.jpg",
    bgColor: "bg-[#bbbbc4]",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    quote:
      "Developers rely on Setapp to automate the mundane, allowing them to focus on writing clean code and solving complex problems.",
    image: "imgs/marcus.jpg",
    bgColor: "bg-[#000000]",
  },
];

export default function TestimonialTop() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination-container",
          }}
          className="rounded-primary overflow-hidden shadow-2xl"
        >
          {TESTIMONIAL_DATA.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`flex flex-col md:flex-row ${item.bgColor} min-h-125 md:min-h-150`}>
                {/* Arrows */}
                <div className="absolute top-10 right-10 hidden md:flex gap-6 z-10">
                  <button className="swiper-button-prev-custom cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button className="swiper-button-next-custom cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                {/* Left Column */}
                <div className="flex-1 p-10 md:p-16 lg:p-24 flex flex-col justify-center text-white relative">
                  <div className="max-w-md">
                    <p className="text-xl md:text-2xl lg:text-3xl leading-tight tracking-tight mb-8">{item.quote}</p>
                    <cite className="not-italic text-sm font-medium opacity-70 uppercase tracking-[0.2em]">
                      {item.name}
                    </cite>
                  </div>

                  <button className="mt-12 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group">
                    <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-[#7A5C7A] border-b-10 border-b-transparent ml-1 transition-colors group-hover:border-l-black" />
                  </button>
                </div>

                {/* Right Column */}
                <div className="flex-1 relative min-h-100 md:min-h-full mr-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 object-center bottom-0 h-full w-auto object-cover overflow-visible"
                  />
                  <div className="absolute inset-0 bg-black/5 md:hidden"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots */}
        <div className="custom-pagination-container flex justify-center gap-3 lexmt-10 mt-16"></div>
      </div>
    </section>
  );
}
