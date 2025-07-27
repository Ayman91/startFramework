import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PortfolioCss from './Portfolio.module.css';
import homeIcon from '../../assets/images/homeicon.png';
import cakeSlice from '../../assets/images/cakeSlice.png';
import caravan from '../../assets/images/caravan.png';

import { useState } from 'react';
import { Button, Modal } from 'reactstrap';

const Portfolio = _ => {
  const [modal, setModal] = useState(0);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column gap-3">
      <h2 className="text-uppercase fw-bolder">portfolio component</h2>
      <div className={`line ${PortfolioCss.portfolioLine} position-relative`}>
        <FontAwesomeIcon icon={faStar} size="lg" />
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="position-relative">
              <Button className={PortfolioCss.custom_button}>
                <img
                  src={homeIcon}
                  alt="Home"
                  className="img-fluid rounded-3"
                />
              </Button>
              <div
                onClick={toggle}
                className={`${PortfolioCss.layer} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon
                  icon="plus"
                  size="10x"
                  className="text-white"
                />
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered>
              <img src={homeIcon} alt="Home" className="img-fluid rounded-3" />
            </Modal>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <Button className={PortfolioCss.custom_button}>
                <img
                  src={cakeSlice}
                  alt={cakeSlice}
                  className="img-fluid rounded-3"
                />
              </Button>
              <div
                onClick={toggle}
                className={`${PortfolioCss.layer} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon
                  icon="plus"
                  size="10x"
                  className="text-white"
                />
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered>
              <img src={homeIcon} alt="Home" className="img-fluid rounded-3" />
            </Modal>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <Button className={PortfolioCss.custom_button}>
                <img
                  src={caravan}
                  alt={caravan}
                  className="img-fluid rounded-3"
                />
              </Button>
              <div
                onClick={toggle}
                className={`${PortfolioCss.layer} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon
                  icon="plus"
                  size="10x"
                  className="text-white"
                />
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered>
              <img src={homeIcon} alt="Home" className="img-fluid rounded-3" />
            </Modal>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <Button className={PortfolioCss.custom_button}>
                <img
                  src={homeIcon}
                  alt="Home"
                  className="img-fluid rounded-3"
                />
              </Button>
              <div
                onClick={toggle}
                className={`${PortfolioCss.layer} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon
                  icon="plus"
                  size="10x"
                  className="text-white"
                />
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered>
              <img src={homeIcon} alt="Home" className="img-fluid rounded-3" />
            </Modal>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <Button className={PortfolioCss.custom_button}>
                <img
                  src={cakeSlice}
                  alt={cakeSlice}
                  className="img-fluid rounded-3"
                />
              </Button>
              <div
                onClick={toggle}
                className={`${PortfolioCss.layer} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon
                  icon="plus"
                  size="10x"
                  className="text-white"
                />
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered>
              <img src={homeIcon} alt="Home" className="img-fluid rounded-3" />
            </Modal>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <Button className={PortfolioCss.custom_button}>
                <img
                  src={caravan}
                  alt={caravan}
                  className="img-fluid rounded-3"
                />
              </Button>
              <div
                onClick={toggle}
                className={`${PortfolioCss.layer} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon
                  icon="plus"
                  size="10x"
                  className="text-white"
                />
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered>
              <img src={homeIcon} alt="Home" className="img-fluid rounded-3" />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
