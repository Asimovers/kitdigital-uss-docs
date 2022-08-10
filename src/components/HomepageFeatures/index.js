import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Valores de Marca',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mollis dolor. Ut varius arcu vitae eleifend tristique. Vestibulum et nisl vel enim viverra tempus id sed odio. Morbi elit enim, egestas eget dictum sed, consequat vel nibh.
      </>
    ),
  },
  {
    title: 'Diseño',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mollis dolor. Ut varius arcu vitae eleifend tristique. Vestibulum et nisl vel enim viverra tempus id sed odio. Morbi elit enim, egestas eget dictum sed, consequat vel nibh.
      </>
    ),
  },
  {
    title: 'Desarrolladores',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mollis dolor. Ut varius arcu vitae eleifend tristique. Vestibulum et nisl vel enim viverra tempus id sed odio. Morbi elit enim, egestas eget dictum sed, consequat vel nibh.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
