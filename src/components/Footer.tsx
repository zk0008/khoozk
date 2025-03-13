import React from "react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="text-center p-4 ">
    <a
      href="https://www.github.com/zk0008"
      className=" inline-flex items-center mx-8 align-middle"
    >
      <Github
        size={23}
        className=" text-gray-800 transform transition-all hover:-translate-y-0.5"
      />
    </a>
    <a
      href="mailto:zekangkhoo@gmail.com"
      className=" inline-flex items-center mx-8 align-middle"
    >
      <Mail
        size={23}
        className=" text-gray-800 transform transition-all hover:-translate-y-0.5"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/ze-kang-khoo-"
      className=" inline-flex items-center mx-8 align-middle"
    >
      <Linkedin
        size={23}
        className="text-gray-800 transform transition-all hover:-translate-y-0.5"
      />
    </a>
  </footer>
);

export default Footer;
