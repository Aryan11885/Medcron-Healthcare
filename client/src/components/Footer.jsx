export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="w-full bg-slate-800 text-white/70">
        {/* Top Section: Logo + Description */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center text-center">
          <div className="flex items-center font-bold space-x-3 mb-2">
            Medcron Healthcare
          </div>
          <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
            A pharmacutical company which is providing a trusted medicine to the Distributors and Customers
          </p>
        </div>

        {/* Bottom Section: Links + Copyright */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>Copyright © 2025 Medcron Healthcare. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-all">
              Contact Us
            </a>
            <a href="#" className="hover:text-white transition-all">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-all">
              Trademark Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
