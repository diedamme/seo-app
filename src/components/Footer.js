import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer font-small bg-dark mt-5">
      <div className="footer-copyright text-center py-3 text-white">
        © {"2020 - " + year}{" "}
        <a
          href="https://sergey-motaylenko.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sergey Motaylenko
        </a>
      </div>
    </footer>
  );
};

export default Footer;
