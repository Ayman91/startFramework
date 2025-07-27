import notFoundVideo from '../../assets/images/page not found.mp4';
import NotFoundVideo from './NotFound.module.css';
const NotFound = () => {
  return (
    <div className="min-vh-100 p-3 d-flex justify-content-center align-items-center flex-column">
      <video className={NotFoundVideo.videoStyles} autoPlay muted loop>
        <source src={notFoundVideo} />
      </video>
    </div>
  );
};

export default NotFound;
