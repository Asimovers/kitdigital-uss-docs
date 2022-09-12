import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageCards from "@site/src/components/HomepageCards";
import GlobalTopbar from "@site/src/components/GlobalTopbar";
import HomepageNavbar from "@site/src/components/HomepageNavbar";
import Link from "@docusaurus/Link";

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "96px 0px" }}
    >
      <div style={{ textAlign: "center" }}>
        <h5 className="mb-20">Kit digital</h5>
        <h1 style={{ maxWidth: "620px" }}>
          Construye experiencias digitales para la USS
        </h1>
        <p style={{ maxWidth: "620px" }}>
          Aprovecha estos recursos de diseño, desarrollo y comunicación para
          construir productos digitales consistentes de forma simple y rápida
          para la Universidad San Sebastián
        </p>
        <div>
          <Link to="/docs/intro" className={"uss-btn btn-primary"}>
            Documentación
            <i class="uss-icon ri-arrow-right-circle-line" />
          </Link>
          {/* <Link to="/docs/intro" className={"uss-btn btn-primary"}>
              Documentación<i class="uss-icon ri-arrow-right-circle-line"></i>
            </Link> */}
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main style={{ backgroundColor: "var(--background)" }}>
        <GlobalTopbar />
        <HomepageNavbar />
        <HomepageHero />
        <HomepageCards />
      </main>
    </Layout>
  );
}
