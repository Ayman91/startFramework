import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FooterCss from './Footer.module.css';
const Footer = () => {
  return (
    <>
      <div className="primary_bg-color p-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col p-3 text-center text-white">
              <div>
                <h3 className="text-uppercase">location</h3>
                <p>2215 john daniel drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col p-3 text-center text-white">
              <div>
                <h3 className="text-uppercase">around the web</h3>
                <div className="d-flex justify-content-center gap-2 ">
                  <FontAwesomeIcon
                    className={FooterCss.icon}
                    icon={faFacebook}
                    size="lg"
                  />
                  <FontAwesomeIcon
                    className={FooterCss.icon}
                    icon={faTwitter}
                    size="lg"
                  />
                  <FontAwesomeIcon
                    className={FooterCss.icon}
                    icon={faLinkedinIn}
                    size="lg"
                  />
                  <FontAwesomeIcon
                    className={FooterCss.icon}
                    icon={faGlobe}
                    size="lg"
                  />
                </div>
              </div>
            </div>
            <div className="col p-3 text-center text-white">
              <div>
                <h3 className="text-uppercase">about freelancer</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright  */}
      <div className="bg-dark p-3 ">
        <p className="m-0 text-white text-center text-capitalize">
          copyright © your website 2021
        </p>
      </div>
    </>
  );
};

export default Footer;
