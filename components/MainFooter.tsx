import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="bg-gray-100 mt-20 py-8 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        {/* Left - Company Info */}
        <div>
          <h2 className="text-xl font-bold">Fake ZEMO Company</h2>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Products
          </Link>
        </div>

        {/* Right - Socials or Contact */}
        <div>
          <p className="text-gray-600 text-sm">Made with ❤️ of MONEY AND LIES  by Your Team</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
