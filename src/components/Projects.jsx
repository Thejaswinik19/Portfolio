import { useState } from "react";
import projects from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-4" key={p.id}>
              <div
                className="card h-100 shadow-sm"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedProject(p)}
                data-bs-toggle="modal"
                data-bs-target="#projectModal"
              >
                <img src={p.image} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description.substring(0, 60)}...</p>
                  <small className="text-muted">{p.tech}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project modal */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {selectedProject && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid rounded mb-3"
                  />
                  <p>{selectedProject.description}</p>
                  <p><strong>Tech Stack:</strong> {selectedProject.tech}</p>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View on GitHub
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
