import Header from "../../components/Header";
import ProjectContext from "../../context/ProjectContext";
import ProjectView from "../../components/ProjectView";
import "./index.css";

const Projects = () => {
  return (
    <ProjectContext.Consumer>
      {(value) => {
        const { projectsList } = value;
        console.log(projectsList);

        return (
          <div>
            <Header />
            <div className="projects-container">
              <h1 className="project-title">Projects</h1>
              <hr className="hr-line" />
              <div className="project-items">
                <div className="project-details">
                  <div className="project-details-container">
                    <p className="project-name">Tasty Kitchens</p>
                    <p className="description">
                      Developed an intuitive Online Food Ordering Platform
                      similar to Swiggy/Zomato, enabling users to explore
                      top-rated restaurants, access restaurant information,
                      manage food items in their cart, and navigate payment
                      options.
                    </p>
                    <a
                      href="https://santastyproject.ccbp.tech"
                      className="project-link"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="image-container">
                  <img
                    src="https://screenshots.codesandbox.io/9y9sd/314.png"
                    alt="project"
                    className="project-image"
                  />
                </div>
              </div>

              <div className="project-items">
                <div className="image-container">
                  <img
                    src="data:image/png;base64,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"
                    alt="project"
                    className="project-image"
                  />
                </div>
                <div className="project-details">
                  <div className="project-details-container">
                    <p className="project-name">Jobby app</p>
                    <p className="description">
                      Developed a comprehensive job search solution, Jobby App.
                      Designed pages for Login, Home, Jobs, and Job item details
                      with React components and form inputs. Secured user data
                      with JWT tokens, REST API calls, and local storage.
                      Implemented protected routes and persisted login state
                      with React Router and local storage.
                    </p>
                    <a
                      href="https://aarthiiplboard.ccbp.tech"
                      className="project-link"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-items">
                <div className="project-details">
                  <div className="project-details-container">
                    <p className="project-name">Wikipedia Search Application</p>
                    <p className="description">
                      Experience a new level of information access with a custom
                      wikipedia search application that simplifies the search
                      process. With a user-friendly interface and relevant
                      results, users can expand their knowledge in no time.
                    </p>
                    <a
                      href="aarthiwikipedia.ccbp.tech"
                      className="project-link"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="image-container">
                  <img
                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png"
                    alt="project"
                    className="project-image"
                  />
                </div>
              </div>

              <ul className="projects-list-container">
                {projectsList.map((each) => (
                  <ProjectView key={each.id} details={each} />
                ))}
              </ul>
              <img
                src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704435138/Screenshot_47_ng901e.png"
                className="footer-img"
                alt="footer"
              />
            </div>
          </div>
        );
      }}
    </ProjectContext.Consumer>
  );
};

export default Projects;
