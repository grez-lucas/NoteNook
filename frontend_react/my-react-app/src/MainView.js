import React from "react";
import sample1 from "./images/imagen 1.png";
import sample2 from "./images/imagen 2.png";
import sample3 from "./images/imagen 3.png";

function MainView() {
  return (
    <>
      <div className="uploads-container">
        <h1>Last Upload files: </h1>
        <div className="items-container">
          <div className="upload-item">
            <img src={sample1} alt="Document 1" />
            <p>Document 1</p>
          </div>
          <div className="upload-item">
            <img src={sample2} alt="Document 2" />
            <p>Document 2</p>
          </div>
          <div className="upload-item">
            <img src={sample3} alt="Document 3" />
            <p>Document 3</p>
          </div>
          <div className="upload-item more">
            <span className="more-icon">...</span>
            <p>More</p>
          </div>
        </div>
      </div>

      <div className="uploads-container">
        <h1>more popular: </h1>
        <div className="items-container">
          <div className="upload-item">
            <img src={sample1} alt="Document 1" />
            <p>Document 1</p>
          </div>
          <div className="upload-item">
            <img src={sample2} alt="Document 2" />
            <p>Document 2</p>
          </div>
          <div className="upload-item">
            <img src={sample3} alt="Document 3" />
            <p>Document 3</p>
          </div>
          <div className="upload-item more">
            <span className="more-icon">...</span>
            <p>More</p>
          </div>
        </div>
      </div>

      <div className="uploads-container">
        <h1>my favourites: </h1>
        <div className="items-container">
          <div className="upload-item">
            <img src={sample1} alt="Document 1" />
            <p>Document 1</p>
          </div>
          <div className="upload-item">
            <img src={sample2} alt="Document 2" />
            <p>Document 2</p>
          </div>
          <div className="upload-item">
            <img src={sample3} alt="Document 3" />
            <p>Document 3</p>
          </div>
          <div className="upload-item more">
            <span className="more-icon">...</span>
            <p>More</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainView;
