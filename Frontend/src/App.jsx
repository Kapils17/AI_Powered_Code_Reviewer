import { useState } from "react";
import Editor from "@monaco-editor/react";
import Axios from "axios";
import Markdown from "react-markdown";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    try {
      setLoading(true);

      const response = await Axios.post(
        "http://localhost:3000/ai/get-review",
        { code }
      );

      setReview(response.data);
    } catch (err) {
      console.log(err);

      setReview(
        "# Error\nUnable to connect to AI server.\n\nPlease make sure your backend is running."
      );
    } finally {
      setLoading(false);
    }
  }

  function clearEditor() {
    setCode("");
    setReview("");
  }

  async function copyReview() {
    if (!review) return;

    await navigator.clipboard.writeText(review);
  }

  return (
    <main>

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-dot"></span>
          AI Code Reviewer
        </div>

        <div className="nav-buttons">

          <button
            className="secondary-btn"
            onClick={clearEditor}
          >
            Clear
          </button>

          <button
            className="primary-btn"
            onClick={reviewCode}
            disabled={loading}
          >
            {loading ? "Reviewing..." : "Review Code"}
          </button>

        </div>

      </nav>

      {/* Workspace */}

      <section className="workspace">

        {/* Left */}

        <div className="left-panel">

          <Editor
            height="100%"
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: {
                enabled: false,
              },

              fontSize: 16,

              automaticLayout: true,

              scrollBeyondLastLine: false,

              fontFamily:
                "'JetBrains Mono','Fira Code',Consolas,monospace",

              wordWrap: "on",

              smoothScrolling: true,

              cursorBlinking: "smooth",

              tabSize: 2,

              padding: {
                top: 20,
                bottom: 20,
              },
            }}
          />

        </div>

        {/* Right */}

        <div className="right-panel">

          <div className="review-top">

            <h2>
              AI Analysis
            </h2>

            <button
              className="secondary-btn"
              onClick={copyReview}
            >
              Copy
            </button>

          </div>

          <div className="review-body">

            {loading ? (

              <div className="loading">

                <div className="spinner"></div>

                <p>
                  AI is reviewing your code...
                </p>

              </div>

            ) : review ? (

              <Markdown>
                {review}
              </Markdown>

            ) : (

              <div className="empty">

                <div className="empty-icon">
                  ✨
                </div>

                <h3>
                  Ready to review your code
                </h3>

                <p>
                  Paste or write your code in the editor and click
                  <strong> Review Code </strong>
                  to receive an AI-powered review with suggestions,
                  improvements, and best practices.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default App;