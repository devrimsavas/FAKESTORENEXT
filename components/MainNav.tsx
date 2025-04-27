"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-6">
      <Link
        href="/"
        className={`hover:text-blue-600 transition duration-300 ${
          pathname === "/"
            ? "text-blue-800 font-semibold underline"
            : "text-gray-700"
        }`}
      >
        Home
      </Link>

      <Link
        href="/products"
        className={`hover:text-blue-600 transition duration-300 ${
          pathname === "/products"
            ? "text-blue-800 font-semibold underline"
            : "text-gray-700"
        }`}
      >
        Products
      </Link>
    </nav>
  );
};

export default MainNav;
