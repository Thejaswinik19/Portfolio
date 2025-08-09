import { useState } from "react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      title: "Java Programming Online Course",
      org: "GeeksforGeeks",
      year: "2025",
      image: "/images/cert-java.jpg"
    },
    {
      title: "DevOps Training Program",
      org: "Technical Career Education",
      year: "2025",
      image: "/images/cert-devops.jpg"
    },
    {
      title: "Social Innovation Program",
      org: "Technical Career Education",
      year: "2023",
      image: "/images/cert-social.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Certifications</h2>
        <div className="row g-4">
          {certs.map((c, i) => (
            <div key={i} className="col-md-4">
              <div
                className="card shadow-sm h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCert(c)}
                data-bs-toggle="modal"
                data-bs-target="#certModal"
              >
                <img src={c.image} alt={c.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text">{c.org} — {c.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for certificate preview */}
      <div
        className="modal fade"
        id="certModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {selectedCert && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedCert.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="img-fluid rounded"
                  />
                  <p className="mt-3">
                    <strong>{selectedCert.org}</strong> — {selectedCert.year}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
