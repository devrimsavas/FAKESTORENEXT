import React from "react";
import Link from "next/link";
import MainNav from "./MainNav";
import CompanyLogo from "./CompanyLogo";

const PageHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <Link href="/">
            <CompanyLogo />
          </Link>
        </div>
        <MainNav />
      </div>
    </header>
  );
};

export default PageHeader;
