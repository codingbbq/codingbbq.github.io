import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Proficient in Crafting Immersive User Experiences',
    Svg: require('@site/static/img/home_page_proficient_html_css_js.svg')
      .default,
    description: (
      <>
        With a robust background in HTML, CSS, and JavaScript, I excel in
        creating captivating user interfaces that leave a lasting impression. I
        meticulously structure content with semantic HTML for enhanced
        accessibility and SEO. My finesse in CSS empowers me to bring designs to
        life with meticulous attention to detail, ensuring pixel-perfect layouts
        across devices. Leveraging the power of JavaScript.
      </>
    ),
  },
  {
    title: 'Expertise Across Leading Frameworks',
    Svg: require('@site/static/img/home_page_architect.svg').default,
    description: (
      <>
        My expertise extends beyond the basics, encompassing a wide range of
        cutting-edge frameworks such as Angular, React, and more. With a strong
        command of Angular, I architect sophisticated single-page applications
        with modular designs that facilitate scalability and maintenance. My
        proficiency in React empowers me to create reusable components and
        efficiently manage state, resulting in dynamic and performant user
        interfaces. This diverse skill set enables me to select the most
        suitable framework for each project, optimizing development speed and
        ensuring optimal outcomes.
      </>
    ),
  },
  {
    title: 'Streamlined Development Workflow and Collaboration',
    Svg: require('@site/static/img/home_page_team_collaboration.svg').default,
    description: (
      <>
        My experience as a seasoned front-end developer extends beyond coding
        prowess. I am well-versed in utilizing modern development tools and
        version control systems to streamline workflows. Through collaborative
        teamwork, I effectively communicate with designers, back-end developers,
        and stakeholders, ensuring seamless integration of front-end components
        into cohesive applications. My attention to detail and commitment to
        code quality make me a reliable partner in code reviews and debugging
        sessions.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <>
      <div className={clsx('col col--4')}>
        <div className='text--center'>
          <Svg className={styles.featureSvg} role='img' />
        </div>
        <div className='text--center padding-horiz--md'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <h2 className='text--center'>
          Embark on a Voyage of Learning and Passion for HTML, CSS, JS, Angular,
          React, and Beyond
        </h2>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
