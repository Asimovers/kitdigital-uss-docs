import React from "react";

const FeatureList = [
  {
    title: "Marca",
    description: "Lorem ipsum dolor sit amet",
    CTAlink: "/docs/category/valores-de-marca",
    CTAlabel: "Guía de marca",
  },
  {
    title: "Diseño",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh consectetur consequat scelerisque donec imperdiet donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. ",
    CTAlink: "/docs/category/diseño",
    CTAlabel: "Diseño con el kit",
  },
  {
    title: "Desarrollo",
    description: "Lorem ipsum dolor sit amet",
    CTAlink: "/docs/category/desarrolladores",
    CTAlabel: "Desarrollo con el kit",
  },
];

function Feature({ CTAlink, CTAlabel, title, description }) {
  return (
    <div className="uss-card uss-card--background-alt" style={{ width: "30%" }}>
      <img
        lazy
        className={"card-img"}
        src={"/img/placeholder-img.png"}
        alt={"dummyimage"}
      />
      <div className={"uss-card__body"}>
        <div className={"h5 mb-16"}>{title}</div>
        <p className={"p-size--s  mb-32"}>{description}</p>
        <a href={CTAlink} className={"uss-btn btn-ternary mt-auto"}>
          {CTAlabel}
          <i className={"uss-icon ri-arrow-right-circle-line"}></i>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div style={{ padding: "96px 0px" }}>
      <div className="container">
        <div style={{ display: "flex", gap: "28px", justifyContent: "center" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
