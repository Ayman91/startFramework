import NavbarComponent from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
