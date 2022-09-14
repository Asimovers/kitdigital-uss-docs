import React from "react";
import { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import "./styles.scss";

// import "@elias-cl/uss-kitdigital/dist/css/main.css";

export default function HtmlRenderer({
  category,
  component,
  title,
  height = null,
  width,
  responsive = false,
}) {
  if (category === undefined || component === undefined) return null;
  const [html, setHtml] = useState("Cargando...");

  const [uniqueId, setUniqueId] = useState(null);
  const [mobile, setMobile] = useState(false);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleIframe = (html) => {
    return (
      <iframe
        id={`iframe-${uniqueId}`}
        className="uss-renderer__iframe"
        title={title ?? `${capitalize(category)} / ${capitalize(component)}`}
        srcDoc={`
        <!DOCTYPE html>
        <html lang="en" style="height: 100%;">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@elias-cl/uss-kitdigital@latest/dist/css/main.css"
            crossorigin
          />

        </head>
        <body id="iframe-body-${uniqueId}" style="padding: 20px; padding-top: 50px; min-height: 100%; ${
          width ? "width: " + width : "width: 100%"
        }">
        ${html}
        <script crossorigin="anonymous" src="https://unpkg.com/@elias-cl/uss-kitdigital@latest/dist/js/main.js"></script>
        <script >
      window.onload = function () {
        const anchorTags = document.querySelectorAll("a");
        anchorTags.forEach(function (a) {
          a.addEventListener("click", function (ev) {
            ev.preventDefault();
          });
        });

      };
    </script>
        </body>
        </html>`}
        frameBorder="0"
      ></iframe>
    );
  };

  useEffect(() => {
    import(
      `@elias-cl/uss-kitdigital/docs/components/${category}/${component}.html`
    ).then((module) => {
      setHtml(module.default);
    });
    setUniqueId(Math.random().toString(36).substr(2, 9));
  }, []);

  return (
    <div className="uss-renderer">
      <div className="uss-renderer__title">
        {title ?? `${capitalize(category)} / ${capitalize(component)}`}
      </div>

      {responsive && (
        <div className="uss-renderer__buttons">
          {mobile && (
            <div
              onClick={() => {
                const iframe = document.querySelector(`#iframe-${uniqueId}`);
                iframe.classList.remove("uss-renderer__iframe--mobile");
                setMobile(false);
              }}
            >
              <i className="uss-icon uss-renderer__icon ri-computer-line"></i>
            </div>
          )}
          {!mobile && (
            <div
              onClick={() => {
                const iframe = document.querySelector(`#iframe-${uniqueId}`);

                iframe.classList.add("uss-renderer__iframe--mobile");
                setMobile(true);
              }}
            >
              <i className="uss-icon uss-renderer__icon ri-smartphone-line"></i>
            </div>
          )}
        </div>
      )}
      <div
        className="uss-renderer__renderer"
        style={{ height: height ?? "100%" }}
      >
        {handleIframe(html)}
      </div>

      <div className="uss-renderer__displayer">
        <div className="uss-renderer__code-block-container">
          <CodeBlock language="jsx" showLineNumbers>
            {html}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
