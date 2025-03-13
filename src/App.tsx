import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import ntulogo from "./assets/NTULogo.svg.png";
import nyplogo from "./assets/NYPLogo.jpeg";

function App() {
  return (
    <div className="flex justify-center">
      <div className="text-white mt-12 container max-w-[800px] font-raleway">
        <h1 className="text-3xl lg:text-4xl font-extrabold my-4">
          Hi, I'm Ze Kang
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold mt-5 mb-4 text-gray-800">
          About
        </h2>
        <div className=" text-lg lg:text-xl space-y-2">
          <p>
            NTU Computer Science student and aspiring full-stack developer
            passionate about developing efficient solutions that can positively
            impact society.
          </p>
          <p>
            My expertise includes front-end development with React.js and
            TailwindCSS, along with proficiency in other various programming
            languages.
          </p>
          <p>
            I'm actively looking for opportunities to enhance my skill set. If
            you have any suitable openings, contact me here
            <a
              href="mailto:zekangkhoo@gmail.com"
              className=" inline-flex items-center ml-4 align-middle"
            >
              <Mail
                size={23}
                className=" text-gray-800 transform transition-all hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ze-kang-khoo-"
              className=" inline-flex items-center ml-4 align-middle"
            >
              <Linkedin
                size={23}
                className="text-gray-800 transform transition-all hover:-translate-y-0.5"
              />
            </a>
          </p>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold my-4 text-gray-800">
          Education
        </h2>
        <div className="text-base lg:text-lg inline-flex container h-20 mb-4">
          <div className=" w-2/12">
            <img src={ntulogo} className=" size-20 align-middle" />
          </div>
          <div className=" w-full">
            <div className=" flex justify-between">
              <p className=" font-semibold">Nanyang Technological University</p>
              <p className=" italic">2023 - 2027</p>
            </div>
            <p className=" ">Bachelor of Computing in Computer Science</p>
          </div>
        </div>
        <div className="text-base lg:text-lg inline-flex container h-20">
          <div className=" w-2/12">
            <img src={nyplogo} className=" size-20 align-middle" />
          </div>
          <div className=" w-full">
            <div className=" flex justify-between">
              <p className=" font-semibold">Nanyang Polytechnic</p>
              <p className=" italic">2019 - 2021</p>
            </div>
            <p className=" ">Diploma in Electronic Systems</p>
            <p className=" italic">Specialized in Smart Connected Systems</p>
          </div>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold my-4 text-gray-800">
          Experience
        </h2>
        <div className=" text-lg lg:text-xl container mb-4">
          <div className=" flex justify-between">
            <p className=" font-semibold ">NK Robotics</p>
            <p className=" italic">May 2024 - Aug 2024</p>
          </div>
          <p>Part-Time Coding Instructor</p>
          <div className=" flex justify-between mt-4">
            <p className=" font-semibold ">Meiban Micro Pte Litd</p>
            <p className=" italic">Jun 2020 - Aug 2020</p>
          </div>
          <p>Internship</p>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold my-4 text-gray-800">
          Projects
        </h2>
        <div className=" text-lg lg:text-xl container mb-4">
          <div className=" flex justify-between">
            <p className=" font-semibold ">PolyQuest</p>
            <p className=" italic">React.js - TailwindCSS - TypeScript</p>
          </div>
          <p className=" w-1/2">
            A web application with personality quiz for personalized course
            recommendations
          </p>
          <div className=" flex justify-between mt-4">
            <p className=" font-semibold ">
              Hospital Management System Application
            </p>
            <p className=" italic">Java - OOP</p>
          </div>
          <p className=" w-1/2">
            A management system application using design principles including
            Model-View-Controller and SOLID
          </p>
          <div className=" flex justify-between mt-4">
            <p className=" font-semibold ">
              Contact Tracing Mobile Application
            </p>
            <p className=" italic">
              Java - Node.js - Firebase - Google Maps API
            </p>
          </div>
          <p className=" w-1/2">
            A location-tracking mobile application utilizing Cloud Firestore and
            Google Map services
          </p>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold my-4 text-gray-800">
          Programming Languages
        </h2>
        <div className=" text-lg lg:text-xl container mb-4">
          <p className=" italic">
            C - C++ - Java - JavaScript - HTML - CSS - React.js - Python -
            Assembly Language
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
