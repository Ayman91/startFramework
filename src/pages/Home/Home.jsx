import { faStar } from '@fortawesome/free-solid-svg-icons';
import HomeCss from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homepage from '../../assets/images/Homepage_avatar.svg';
const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column home_bg_color  gap-3">
      <div className={HomeCss.w_200}>
        <img src={homepage} alt="homPageImg" className="img-fluid" />
      </div>
      <h2 className="text-uppercase text-white">start framework</h2>
      <div className="line position-relative">
        <FontAwesomeIcon icon={faStar} size="lg" className="text-white" />
      </div>
      <div className="d-flex text-white text-capitalize">
        <p>
          <span>graphic artist</span> - <span>web designer</span> -
          <span>illustrator</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
