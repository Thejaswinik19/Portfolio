import { FaJava, FaHtml5, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiC, SiCplusplus, SiMongodb, SiMysql, SiCss3 } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava size={30} color="#f89820" /> },
    { name: "C", icon: <SiC size={30} color="#283593" /> },
    { name: "C++", icon: <SiCplusplus size={30} color="#00599C" /> },
    { name: "HTML/CSS", icon: <FaHtml5 size={30} color="#E34F26" /> },
    { name: "React.js", icon: <FaReact size={30} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={30} color="#68A063" /> },
    { name: "MongoDB", icon: <SiMongodb size={30} color="#4DB33D" /> },
    { name: "PHP", icon: <FaPhp size={30} color="#777BB4" /> },
    { name: "MySQL", icon: <SiMysql size={30} color="#00758F" /> }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Technical Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-3 col-6 mb-3" key={index}>
              <div className="p-3 border rounded text-center bg-white shadow-sm">
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
