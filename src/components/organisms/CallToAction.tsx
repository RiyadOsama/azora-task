import Logo from "../atoms/Logo";

export default function CallToAction() {
  return (
    <section id="for-teams" className="px-4 sm:px-6 md:px-0 bg-linear-to-b from-secondary from-50% to-primary to-50%">
      <div className="bg-card p-6 sm:p-8 md:p-10 lg:p-12 mx-4 sm:mx-6 md:mx-12 rounded-primary text-primary flex flex-col gap-4 sm:gap-6 md:gap-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="opacity-90 mt-4 sm:mt-6 md:mt-8">
          <Logo size={60} />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Superpowers starting $9.99/month.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-500">Free for 7 days.</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="rounded-tertiary px-6 py-3 text-white bg-primary border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 font-medium inline-block text-center text-sm sm:text-base w-full sm:w-auto"
          >
            Get started now
          </a>

          <a
            href="#"
            className="rounded-tertiary border-2 border-gray-200 px-6 py-3 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 font-medium inline-block text-center text-sm sm:text-base w-full sm:w-auto"
          >
            More about Setapp
          </a>
        </div>
      </div>
    </section>
  );
}
