import "./app.css";
import Main from "./container/main";
import About from "./container/about";
import Community from "./container/community";
import { HashLink } from "react-router-hash-link";
const App = () => {
  return (
    <>
      <nav>
        <ul className="navbar"> 
          <li>
            <HashLink smooth to="/#Main">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#About">About</HashLink>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Main id="Main" />
      <About id="About" />
      <Community />
    </>
  );
};

export default App;
