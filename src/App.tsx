import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";

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
              <Mail size={23} color="#0645AD" />
            </a>
            <a
              href="https://www.linkedin.com/in/ze-kang-khoo-"
              className=" inline-flex items-center ml-4 align-middle"
            >
              <Linkedin size={23} color="#0645AD" />
            </a>
          </p>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold my-4 text-gray-800">
          Education
        </h2>
        <div className="text-base lg:text-lg inline-flex container h-20 mb-4">
          <div className=" w-2/12">
            <img
              src="/src/assets/NTULogo.svg.png"
              className=" size-20 align-middle"
            />
          </div>
          <div className=" w-full">
            <div className=" flex justify-between">
              <p className=" font-semibold">Nanyang Technological University</p>
              <p className=" ">2023 - 2027</p>
            </div>
            <p className=" ">Bachelor of Computing in Computer Science</p>
          </div>
        </div>
        <div className="text-base lg:text-lg inline-flex container h-20">
          <div className=" w-2/12">
            <img
              src="/src/assets/NYPLogo.jpeg"
              className=" size-20 align-middle"
            />
          </div>
          <div className=" w-full">
            <div className=" flex justify-between">
              <p className=" font-semibold">Nanyang Polytechnic</p>
              <p className=" ">2019 - 2021</p>
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
            <p className=" ">May 2024 - Aug 2024</p>
          </div>
          <p>Part-Time Coding Instructor</p>
          <div className=" flex justify-between mt-4">
            <p className=" font-semibold ">Meiban Micro Pte Litd</p>
            <p className=" ">Jun 2020 - Aug 2020</p>
          </div>
          <p>Internship</p>
        </div>
      </div>
    </div>
  );
}

export default App;
