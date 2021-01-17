import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer font-small bg-dark mt-5">
      © {year == "2020" ? year : "2020 - " + year} Sergey Motaylenko
    </footer>
  );
};

export default Footer;
