import "../App.css";
import Logo from "../assets/logo.png";

const about = () => {
  return (
    <div className="container-1">
      <div className="title">
        <h1>SEC</h1>
        <br />
        <h1 className="animate-charcter">TECH-SOCIETY</h1>
        <br />
        <br />
        <p>
          Technology ajhf jabdba jbaicck a mc hja ca kjc ak ca uc ajkc ja cjk
          akc is best when it brings people together. - Matt Mullenweg
        </p>
      </div>
      <div className="logo">
        <img src={Logo} alt="Tech Society logo" />
      </div>
    </div>
  );
};

export default about;
