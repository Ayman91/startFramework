import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column home_bg_color gap-3 py-5">
      <div className="text-center px-3">
        <h2 className="text-uppercase text-white fs-1 fw-bold mb-4">
          about component
        </h2>
        <div className="line position-relative">
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            className="text-white position-absolute start-50 translate-middle"
          />
        </div>
      </div>

      <div className="container mt-4 mt-md-5">
        <div className="row text-white justify-content-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0 pe-md-4 ps-md-5">
            <p className="m-0 fs-5 lh-lg">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-12 col-md-6 ps-md-4 pe-md-5">
            <p className="m-0 fs-5 lh-lg">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
