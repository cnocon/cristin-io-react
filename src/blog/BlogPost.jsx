import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "./posts";

// Optional syntax highlighting
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

function BlogPost() {
  const { slug } = useParams();
  const meta = useMemo(() => posts.find((p) => p.slug === slug), [slug]);

  const [state, setState] = useState({ status: "idle" });

  useEffect(() => {
    if (!meta) return;

    let cancelled = false;
    setState({ status: "loading" });

    fetch(meta.file)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load post (${r.status})`);
        return r.text();
      })
      .then((text) => {
        if (!cancelled) setState({ status: "success", markdown: text });
      })
      .catch((e) => {
        const message = e instanceof Error ? e.message : "Unknown error";
        if (!cancelled) setState({ status: "error", message });
      });

    return () => {
      cancelled = true;
    };
  }, [meta]);

  if (!meta) {
    return (
      <main style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
        <p>Post not found.</p>
        <Link to="/blog">← Back to Blog</Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Link to="/blog">← Back</Link>
      <h1 style={{ marginBottom: 6 }}>{meta.title}</h1>
      <div style={{ opacity: 0.7, fontSize: 14 }}>{new Date(meta.date).toDateString()}</div>

      <article style={{ marginTop: 24, lineHeight: 1.65 }}>
        {state.status === "loading" || state.status === "idle" ? (
          <p>Loading…</p>
        ) : state.status === "error" ? (
          <p>Error: {state.message}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            // rehypePlugins={[rehypeHighlight]}
          >
            {state.markdown}
          </ReactMarkdown>
        )}
      </article>
    </main>
  );
}

export default BlogPost;
