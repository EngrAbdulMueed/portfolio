import React, { useEffect, useRef } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
// import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa6';
import { VscAzure } from 'react-icons/vsc';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDotnet,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiJirasoftware,
  SiWebpack,
  SiPostman,
  SiKubernetes,
} from 'react-icons/si';

const skillsArray = [
  // { name: 'HTML', icon: SiHtml5 },
  // { name: 'CSS', icon: SiCss3 },
  { name: 'Java', icon: FaJava },

  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Python', icon: SiPython },
  { name: 'C#', icon: TbBrandCSharp },
  { name: 'ASP.NET', icon: SiDotnet },
  { name: 'PHP', icon: SiPhp },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },

  { name: 'Git', icon: SiGit },
  // { name: 'GitLab', icon: SiGitlab },
  { name: 'Jira', icon: SiJirasoftware },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'Azure', icon: VscAzure },

  // { name: 'Vite', icon: SiVite },
  // { name: 'Babel', icon: SiBabel },
  // { name: 'ESLint', icon: SiEslint },
  // { name: 'Firebase', icon: SiFirebase },
  { name: 'Postman', icon: SiPostman },
  // { name: 'Ubuntu', icon: SiUbuntu },
  // { name: 'Debian', icon: SiDebian },
  // { name: 'macOS', icon: SiApple },
];

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

// const StyledProject = styled.li`
//   position: relative;
//   cursor: default;
//   transition: var(--transition);

//   @media (prefers-reduced-motion: no-preference) {
//     &:hover,
//     &:focus-within {
//       .project-inner {
//         transform: translateY(-7px);
//       }
//     }
//   }

//   a {
//     position: relative;
//     z-index: 1;
//   }

//   .project-inner {
//     ${({ theme }) => theme.mixins.boxShadow};
//     ${({ theme }) => theme.mixins.flexBetween};
//     flex-direction: column;
//     align-items: flex-start;
//     position: relative;
//     height: 100%;
//     padding: 2rem 1.75rem;
//     border-radius: var(--border-radius);
//     background-color: var(--light-navy);
//     transition: var(--transition);
//     overflow: auto;
//   }

//   .project-top {
//     ${({ theme }) => theme.mixins.flexBetween};
//     margin-bottom: 35px;

//     .folder {
//       color: var(--green);
//       svg {
//         width: 40px;
//         height: 40px;
//       }
//     }

//     .project-links {
//       display: flex;
//       align-items: center;
//       margin-right: -10px;
//       color: var(--light-slate);

//       a {
//         ${({ theme }) => theme.mixins.flexCenter};
//         padding: 5px 7px;

//         &.external {
//           svg {
//             width: 22px;
//             height: 22px;
//             margin-top: -4px;
//           }
//         }

//         svg {
//           width: 20px;
//           height: 20px;
//         }
//       }
//     }
//   }

//   .project-title {
//     margin: 0 0 10px;
//     color: var(--lightest-slate);
//     font-size: var(--fz-xxl);

//     a {
//       position: static;

//       &:before {
//         content: '';
//         display: block;
//         position: absolute;
//         z-index: 0;
//         width: 100%;
//         height: 100%;
//         top: 0;
//         left: 0;
//       }
//     }
//   }

//   .project-description {
//     color: var(--light-slate);
//     font-size: 17px;

//     a {
//       ${({ theme }) => theme.mixins.inlineLink};
//     }
//   }

//   .project-tech-list {
//     display: flex;
//     align-items: flex-end;
//     flex-grow: 1;
//     flex-wrap: wrap;
//     padding: 0;
//     margin: 20px 0 0 0;
//     list-style: none;

//     li {
//       font-family: var(--font-mono);
//       font-size: var(--fz-xxs);
//       line-height: 1.75;

//       &:not(:last-of-type) {
//         margin-right: 15px;
//       }
//     }
//   }
// `;

const Skills = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     projects: allMarkdownRemark(
  //       filter: {
  //         fileAbsolutePath: { regex: "/content/projects/" }
  //         frontmatter: { showInProjects: { ne: false } }
  //       }
  //       sort: { fields: [frontmatter___date], order: DESC }
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             tech
  //             github
  //             external
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `);

  // const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  // const GRID_LIMIT = 6;
  // const projects = data.projects.edges.filter(({ node }) => node);
  // const firstSix = projects.slice(0, GRID_LIMIT);
  // const projectsToShow = showMore ? projects : firstSix;

  const StyledSkillsSection = styled.section`
    max-width: 900px;
    margin: 0 auto;
    padding: 100px 0;

    h2 {
      text-align: center;
      font-size: var(--fz-heading);
      margin-bottom: 40px;
      position: relative;
      &:after {
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        margin: 10px auto 0;
        background-color: var(--green);
      }
    }
  `;

  const SkillGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  `;

  const SkillCard = styled.div`
    background-color: var(--lightest-navy);
    border-radius: 12px;
    padding: 15px 25px;
    min-width: 120px;
    max-width: 160px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: var(--shadow);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-5px);
    }

    svg,
    img {
      width: 24px;
      height: 24px;
    }

    span {
      font-weight: 500;
      font-size: 16px;
    }
  `;

  const Skills = () => (
    <StyledSkillsSection id="skills">
      <h2>Skills</h2>
      <SkillGrid>
        {skillsArray.map(({ name, icon: IconComponent }, index) => (
          <SkillCard key={index}>
            <IconComponent size={24} />
            <span>{name}</span>
          </SkillCard>
        ))}
      </SkillGrid>
    </StyledSkillsSection>
  );

  // const projectInner = node => {
  //   const { frontmatter, html } = node;
  //   const { github, external, title, tech } = frontmatter;

  //   return (
  //     <div className="project-inner">
  //       <header>
  //         <div className="project-top">
  //           <div className="folder">
  //             <Icon name="Folder" />
  //           </div>
  //           <div className="project-links">
  //             {github && (
  //               <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
  //                 <Icon name="GitHub" />
  //               </a>
  //             )}
  //             {external && (
  //               <a
  //                 href={external}
  //                 aria-label="External Link"
  //                 className="external"
  //                 target="_blank"
  //                 rel="noreferrer">
  //                 <Icon name="External" />
  //               </a>
  //             )}
  //           </div>
  //         </div>

  //         <h3 className="project-title">
  //           <a href={external} target="_blank" rel="noreferrer">
  //             {title}
  //           </a>
  //         </h3>

  //         <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
  //       </header>

  //       <footer>
  //         {tech && (
  //           <ul className="project-tech-list">
  //             {tech.map((tech, i) => (
  //               <li key={i}>{tech}</li>
  //             ))}
  //           </ul>
  //         )}
  //       </footer>
  //     </div>
  //   );
  // };

  return (
    <StyledProjectsSection>
      {/* <h2 ref={revealTitle}>Skills</h2> */}

      <Skills />

      {/* <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
        view the archive
      </Link> */}
      {/* 
      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button> */}
    </StyledProjectsSection>
  );
};

export default Skills;
