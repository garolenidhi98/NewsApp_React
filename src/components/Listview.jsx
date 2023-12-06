import React from "react";
import Addtofav from "./Addtofav";
import "../App.css";

const Listview = ({ title, description, src, url, img }) => {
  return (
    <div className="card mb-3" style={{ width: "63vw" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={src ? src : img}
            style={{ height: "40vh", width: "35vw" }}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className=" card-body-container col-md-8 ">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description ? description : null}
            </p>
            <div className="buttons">
              <a href={url} className="btn btn-dark">
                Read More
              </a>
              <div>
                <Addtofav
                  title={title}
                  description={description}
                  src={src}
                  url={url}
                  img={img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listview;
