import { useState } from "react";
import Logo from "../atoms/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["How it works", "All apps", "Pricing", "For teams", "Blogs", "Podcast"];

  return (
    <header className="relative z-50">
      <nav className="mx-2 sm:mx-4 md:mx-8 py-3 sm:py-4 px-3 sm:px-4 md:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-logo after:transition-all hover:after:w-full text-xs sm:text-sm md:text-base"
              >
                {item}
              </a>
            </li>
          ))}

          <li className="h-4 w-px bg-gray-200 mx-2" />

          <li>
            <a href="#" className="flex items-center">
              <img src="/imgs/en.svg" alt="English" className="h-4 w-4" />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="rounded-tertiary px-3 py-1.5 hover:bg-gray-100 hover:text-black transition text-xs sm:text-sm"
            >
              Sign in
            </a>
          </li>

          <li>
            <a
              href="#"
              className="rounded-tertiary border px-4 py-1.5 hover:bg-black hover:text-white transition text-xs sm:text-sm font-medium"
            >
              Try free
            </a>
          </li>
        </ul>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-4">
          <a href="#" className="text-xs sm:text-sm font-medium border px-2 sm:px-3 py-1 rounded-tertiary">
            Try free
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
            <div className="w-5 h-0.5 bg-secondary mb-1.5 transition-all sm:w-6"></div>
            <div className="w-5 h-0.5 bg-secondary mb-1.5 sm:w-6"></div>
            <div className="w-5 h-0.5 bg-secondary sm:w-6"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-secondary rounded-tertiary border-t shadow-xl lg:hidden text-primary">
          <ul className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-base sm:text-lg font-medium block">
                  {item}
                </a>
              </li>
            ))}
            <hr className="my-2" />
            <li>
              <a href="#" className="text-base sm:text-lg block">
                Sign in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src="/imgs/en.svg" alt="English" className="h-5 w-5" />
              <span className="text-base">English</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
