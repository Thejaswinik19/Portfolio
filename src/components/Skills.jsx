export default function Skills() {
  const skills = ["Java", "C", "C++", "HTML/CSS", "React.js", "Node.js", "MongoDB", "PHP", "MySQL"];
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Technical Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-3 col-6 mb-3" key={index}>
              <div className="p-3 border rounded text-center bg-white shadow-sm">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
