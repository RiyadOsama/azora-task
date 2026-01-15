export default function Features() {
  return (
    <>
      <div className="container mx-auto mt-6 md:mt-24 px-6">
        <hr />

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-10 md:mt-20 mb-8 md:mb-16 gap-4">
          <div className="text-3xl md:text-4xl font-bold max-w-md">What you get on Setapp.</div>
          <div className="text-lg md:text-xl font-light">
            With a single monthly subscription at $9.99, you get 240+ apps for
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2 bg-[#DF96AE] rounded-3xl text-[#1d1d1f] overflow-hidden">
            <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-6">
              <div className="shrink-0">
                <img src="imgs/scan-icon.svg" alt="Scan Icon" className="w-16 md:w-20" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold mb-2">Keep your Mac clean</div>
                <div className="text-lg md:text-xl opacity-90">
                  Remove junk, scan for malware, wipe email attachments
                </div>
              </div>
            </div>
            <div className="px-8 md:px-12 pb-0">
              <img src="imgs/scan.svg" alt="Scan Interface" className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="col-span-1 bg-[#F4F0E4] rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="pt-8">
              <img src="imgs/code.svg" alt="Code interface" className="w-full" />
            </div>
            <div className="p-8 md:p-12 pb-0 text-primary">
              <img src="imgs/code-icon.svg" alt="Code Icon" className="w-12 md:w-14 mb-6" />
              <div className="text-2xl font-bold mb-2">Write code</div>
              <div className="text-lg opacity-80">Create applications in more than 25 languages</div>
            </div>
          </div>

          <div className="col-span-1 bg-[#384C75] text-white rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="p-8 md:p-12 pb-0">
              <img src="imgs/meet-icon.svg" alt="Meet Icon" className="w-12 md:w-14 mb-6" />
              <div className="text-2xl font-bold mb-2">Join meetings in a click</div>
              <div className="text-lg opacity-80">Quickly access links to your meetings from menu bar</div>
            </div>
            <div className="pt-8">
              <img src="imgs/meet.svg" alt="Meeting interface" className="w-full" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 md:py-32">
          <a href="#" className="group flex justify-center items-center">
            <div className="text-xl md:text-2xl relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-logo after:transition-all hover:after:w-full">
              View all superpowers
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mb-16 gap-6">
          <div className="text-3xl md:text-4xl font-bold max-w-md">Your Setapp journey.</div>
          <div className="text-lg md:text-xl font-light">Type in your task into Setapp search and get instant app</div>
        </div>

        <hr className="mb-20" />
      </div>
    </>
  );
}
