import { useEffect, useState } from "react";
import { getVideoSummary } from "../services/api";

export default function Summary() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSummary() {
      try {
        const data = await getVideoSummary();
        setSummary(data);
      } catch (err) {
        setError("Failed to load video summary");
      } finally {
        setLoading(false);
      }
    }

    loadSummary();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-2">Video-Based Concept Summary</h1>
      <p className="text-muted mb-4">
        Quick revision notes and exam-focused insights based on the provided
        videos.
      </p>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Ec19ljjvlCI"
              title="Economics Video 1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Z_S0VA4jKes"
              title="Economics Video 2"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="h5 mb-0">Key Takeaways</h2>
        </div>
        <div className="card-body">
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}
          {!loading && !error && (
            <pre className="whitespace-pre-wrap">{summary}</pre>
          )}
        </div>
      </div>
    </div>
  );
}
