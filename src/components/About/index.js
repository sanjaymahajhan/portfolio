import Header from "../../components/Header";
import ProjectContext from "../../context/ProjectContext";
import { Link } from "react-router-dom";

import "./index.css";

const About = () => {
  return (
    <ProjectContext.Consumer>
      {(value) => {
        const {
          addProject,
          changeProjectName,
          changeProjectLink,
          changeProjectDescription,
        } = value;
        const addProjectData = (event) => {
          event.preventDefault();
          console.log("add");
          addProject();
        };

        const onChangeProjectName = (event) => {
          changeProjectName(event.target.value);
        };

        const onChangeProjectLink = (event) => {
          changeProjectLink(event.target.value);
        };

        const onChangeProjectDescription = (event) => {
          changeProjectDescription(event.target.value);
        };

        return (
          <div>
            <Header />
            <div className="about-container">
              <div className="about">
                <div className="card-container">
                  <p className="ux">UI/UX DESIGNER</p>
                  <h1 className="about-name">Hello, I am Sanjay Mahajhan</h1>
                  <p className="sub-heading">
                    I'm currently learning fullstack development at NxtWave.I
                    have continuously learned and upskilled myself in Web
                    development. I have developed Static, Responsive and Dynamic
                    webpages.
                  </p>
                  <div className="buttons-container">
                    <Link to="/projects" className="button-link">
                      <button type="button" className="button-primary">
                        Projects
                      </button>
                    </Link>
                    <button type="button" className="button-secondary">
                      Linkedin
                    </button>
                  </div>
                </div>
              </div>
              <div className="image-container">
                <img
                  src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704429999/image_bedqt0.png"
                  className="logo"
                  alt="profile"
                />
              </div>
            </div>
            <div className="project-container">
              <h1 className="title">Add Project</h1>
              <hr className="hr-line" />
              <form className="form-container" onSubmit={addProjectData}>
                <div className="label-input-container">
                  <label className="label" htmlFor="projectName">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    className="input"
                    onChange={onChangeProjectName}
                  />
                </div>
                <div className="label-input-container">
                  <label className="label" htmlFor="projectLink">
                    Project Link
                  </label>
                  <input
                    type="text"
                    id="projectLink"
                    className="input"
                    onChange={onChangeProjectLink}
                  />
                </div>
                <div className="label-input-container">
                  <label className="label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="3"
                    cols="24"
                    className="input"
                    onChange={onChangeProjectDescription}
                  ></textarea>
                </div>
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
        );
      }}
    </ProjectContext.Consumer>
  );
};

export default About;
