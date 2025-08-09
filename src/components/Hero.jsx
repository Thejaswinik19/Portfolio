export default function Hero() {
  return (
    <section id="home" className="bg-dark text-white text-center py-5" style={{minHeight: "100vh", display: "flex", alignItems: "center"}}>
      <div className="container">
        <h1 className="display-4 fw-bold">Hi — I'm Thejaswini K</h1>
        <p className="lead mb-4">Aspiring Software Engineer | Passionate About Web Development & Database Management</p>
        <a href="#projects" className="btn btn-primary btn-lg me-2">View Projects</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg">
  View Resume
</a>

      </div>
    </section>
  )
}
