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
    <footer className="text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <Logo /> <span className="text-xl font-bold tracking-widest uppercase">Setapp</span>
            </div>

            <div className="max-w-xs">
              <p className="text-sm mb-4 flex items-center gap-2 opacity-90">
                Updates from our team, written with love <span className="text-orange-400">🧡</span>
              </p>
              <div className="flex overflow-hidden rounded-md border border-gray-600 focus-within:border-white transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 grow px-4 py-3 text-sm outline-none placeholder:text-gray-400"
                />
                <button className="bg-white px-4 py-3 hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-5 h-5 text-black"
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

            <div className="mt-24">
              <span className="bg-[#444B53] text-[10px] font-bold px-2 py-1 rounded tracking-tighter">
                DMCA <span className="text-gray-400">PROTECTED</span>
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[13px] text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <img src="imgs/en.svg" alt="English" className="w-4 h-3" />
            <span>English</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-[11px] text-gray-500">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID:
                IE3425001BH
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-[#444B53] rounded-full flex items-center justify-center hover:bg-gray-500 transition-all opacity-70 hover:opacity-100"
                >
                  <img src={`imgs/${social}.svg`} alt={social} className="w-4 h-4 invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer;
