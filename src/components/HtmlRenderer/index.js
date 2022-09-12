import React from "react";
import { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import "./styles.scss";

// import "@elias-cl/uss-kitdigital/dist/css/main.css";

export default function HtmlRenderer({ category, name }) {
  if (category === undefined || name === undefined) return null;
  const [html, setHtml] = useState("Cargando...");
  const [options, setOptions] = useState({});

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleOptions = (html) => {
    const optionsIndex = html.indexOf("---\n");
    if (optionsIndex === -1) return html;
    const optionsEndIndex = html.indexOf("\n---\n", optionsIndex);
    const options = html.substring(optionsIndex + 4, optionsEndIndex);
    const optionsObject = options
      .split("\n")
      .map((option) => option.split(": "))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    if (optionsObject.title) {
      optionsObject.title = capitalize(optionsObject.title);
    }
    setOptions(optionsObject);
    const htmlWithoutOptions = html.substring(optionsEndIndex + 5);

    return htmlWithoutOptions;
  };

  const handleHtml = (html) => {
    setHtml(handleOptions(html));
  };

  const handleIframe = (html) => {
    return (
      <iframe
        className="uss-renderer__iframe"
        title={options.title ?? `${capitalize(category)} / ${capitalize(name)}`}
        srcDoc={`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@elias-cl/uss-kitdigital@latest/dist/css/main.css"
            crossorigin
          />

        </head>
        <body style="display:flex; ">
        ${html}
        <script src="https://unpkg.com/@elias-cl/uss-kitdigital@latest/dist/js/main.js"></script>
        <script>
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
      `@elias-cl/uss-kitdigital/docs/components/${category}/${name}.html`
    ).then((module) => {
      handleHtml(module.default);
    });
  }, []);

  return (
    <div className="uss-renderer">
      <div className="uss-renderer__title">
        {options.title ?? `${capitalize(category)} / ${capitalize(name)}`}
      </div>

      <div className="uss-renderer__buttons">
        {options.title ?? `${capitalize(category)} / ${capitalize(name)}`}
      </div>
      <div
        className="uss-renderer__renderer"
        style={{ height: options.height ?? "100%" }}
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
