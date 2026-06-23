import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./styles.css";
import { company } from "./config/company";

// Sync <title> and meta tags from the centralized company config so changing
// src/config/company.ts updates the entire site (including SEO) after rebuild.
document.title = company.metaTitle;
const setMeta = (selector: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [attr, val] = selector.replace(/[[\]"]/g, "").split("=");
    el.setAttribute(attr, val);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};
setMeta('meta[name="description"]', company.metaDescription);
setMeta('meta[name="author"]', company.name);
setMeta('meta[property="og:title"]', company.metaTitle);
setMeta('meta[property="og:description"]', company.metaDescription);
setMeta('meta[name="twitter:title"]', company.metaTitle);
setMeta('meta[name="twitter:description"]', company.metaDescription);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
