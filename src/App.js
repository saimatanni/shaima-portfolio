import "./App.css";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Main from "./component/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import 'swiper/css';
function App() {
  return (
    <body>
      <Header />
      <HeroSection />
      <Main />
    </body>
  );
}

export default App;
