import { Link } from "react-router-dom";
import React from "react";
import { posts } from "./posts.js";
import "./blogIndex.module.scss";

function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1>Blog</h1>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16 }}>
        {sorted.map((p) => (
          <li key={p.slug} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
            <h2 style={{ margin: "0 0 6px" }}>
              <Link to={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <div style={{ opacity: 0.7, fontSize: 14 }}>{new Date(p.date).toDateString()}</div>
            <p style={{ margin: "10px 0 0" }}>{p.excerpt}</p>
            {p.tags?.length ? (
              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ fontSize: 12, padding: "2px 8px", border: "1px solid #ccc", borderRadius: 999 }}>
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BlogIndex;
