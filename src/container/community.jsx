
import Button from "@mui/material/Button"; // Import the Button component from Material-UI
import "../App.css";
import "./community.css";

const community = () => {
  return (
    <>
      <div className="container-3 ">
        <div className="community">
          <h1>COMMUNITY</h1>
        </div>
        <div className="community">
          <div className="ag-format-container">
            <div className="ag-courses_box">
              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    UI/Web&amp;Graph design for teenagers 11-17&#160;years old
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <Button
            variant="contained"
            href="https://mui.com/material-ui/react-button/"
          >
            REGISTER
          </Button>
        </div>
      </div>
    </>
  );
};

export default community;
