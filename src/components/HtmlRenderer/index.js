import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import theme from "prism-react-renderer/themes/nightOwl";
import "./styles.css";

// import html from "./file.html"; this fails

export default function HtmlRenderer({ src, title = "componente de prueba" }) {
  const exampleCode = "test" //

  return (
    <div className="uss-renderer">
      <div className="uss-renderer__title">{title}</div>
      <div
        className="uss-renderer__renderer"
        dangerouslySetInnerHTML={{ __html: exampleCode }}
      ></div>

      <div className="uss-renderer__displayer">
        <Highlight
          {...defaultProps}
          theme={theme}
          code={exampleCode}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className + " pre"} style={style}>
              {tokens.map((line, i) => (
                <div
                  className="line"
                  ey={i}
                  {...getLineProps({ line, key: i })}
                >
                  <div className="lineNo">{i + 1}</div>
                  <div className="lineContent">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
