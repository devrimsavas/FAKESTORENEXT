import React from "react";
import MainFooter from "./MainFooter"; // <-- Import MainFooter (NOT MainNav)

const PageFooter = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <MainFooter />
    </footer>
  );
};

export default PageFooter;
