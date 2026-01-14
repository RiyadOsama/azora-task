import Logo from "../atoms/Logo";

export default function Header() {
  return (
    <header>
      <nav className="mx-16 p-8 flex items-center justify-between">
        <Logo />

        <ul className="flex items-center gap-8">
          {["How it works", "All apps", "Pricing", "For teams", "Blogs", "Podcast"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-logo after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}

          <li className="h-4 w-px bg-gray-200" />

          <li>
            <a href="#" className="flex items-center">
              <img src="/imgs/en.svg" alt="English" className="h-4 w-4" />
            </a>
          </li>

          <li>
            <a href="#" className="rounded-tertiary px-3 py-1.5 hover:bg-gray-100 hover:text-black transition">
              Sign in
            </a>
          </li>

          <li>
            <a href="#" className="rounded-tertiary border px-3 py-1.5 hover:bg-black transition">
              Try free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
