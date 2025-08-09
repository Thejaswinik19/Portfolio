export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-8">
            <p>I am a motivated Computer Science student from Mangalore with interests in web development, DevOps, and database management. I enjoy building full-stack applications and working on projects that solve real-world problems.</p>
            <p>Currently pursuing B.E in Computer Science with a CGPA of 9.6. Passionate about learning new technologies and contributing to innovative solutions.</p>
          </div>
         <div className="col-md-4 text-center">
  <img 
    src="/images/profile.jpg" 
    alt="Profile" 
    className="rounded-circle img-fluid shadow w-50"
  />
</div>

        </div>
      </div>
    </section>
  )
}
