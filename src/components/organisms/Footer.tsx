import Logo from "../atoms/Logo";

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: ["Home", "How It Works", "All Apps", "Pricing", "Setapp for Teams", "Blog", "Podcast", "Download"],
    },
    {
      title: "Company",
      links: [
        "About",
        "Support",
        "Education Discount",
        "Family Plan",
        "For Developers",
        "Gift Cards",
        "Redeem Card or Code",
        "Setapp Reviews",
        "Affiliate Program",
        "Mac Developer Survey 2023",
      ],
    },
    {
      title: "Guides",
      links: [
        "Getting started with Setapp",
        "Remote access to other Mac",
        "Fix macOS Ventura problems",
        "Best productivity apps",
        "Best YouTube downloaders",
        "Uninstall apps",
      ],
    },
  ];

  return (
    <footer className="text-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <Logo />{" "}
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase">Setapp</span>
            </div>

            <div className="max-w-xs">
              <p className="text-xs sm:text-sm mb-3 md:mb-4 flex items-center gap-2 opacity-90">
                Updates from our team, written with love <span className="text-orange-400">🧡</span>
              </p>
              <div className="flex overflow-hidden rounded-md border border-gray-600 focus-within:border-white transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 grow px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none placeholder:text-gray-400"
                />
                <button className="bg-white px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-12 md:mt-24">
              <span className="bg-[#444B53] text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded tracking-tighter">
                DMCA <span className="text-gray-400">PROTECTED</span>
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-2 sm:gap-3">
                {column.links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="flex justify-center sm:justify-end">
          <button className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
            <img src="imgs/en.svg" alt="English" className="w-4 h-3" />
            <span>English</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 mt-8 md:mt-12 flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
              <p className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID:
                IE3425001BH
              </p>
              <div className="flex justify-center md:justify-start gap-4 md:gap-6">
                <a href="#" className="text-[10px] sm:text-[11px] text-gray-500 hover:text-white transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="text-[10px] sm:text-[11px] text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-[#444B53] rounded-full flex items-center justify-center hover:bg-gray-500 transition-all opacity-70 hover:opacity-100"
                >
                  <img src={`imgs/${social}.svg`} alt={social} className="w-3.5 h-3.5 sm:w-4 sm:h-4 invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
