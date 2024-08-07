import React from "react";
 
const  NewsItem = (props) => {
    let { title, description, url, newsUrl, author, time, source } = props;
    return (
      <div>
        <div className="card mx-4">
          <img
            src={
              url
                ? url
                : "https://media.nbcchicago.com/2023/03/tlmd-cambio-hora-reloj-shutterstock_1078581419-copy.jpg?quality=85&strip=all&resize=1200%2C675"
            }
            className="card-img-top"
            alt = "img"
          />
          <div className="card-body">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success">
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                by {author} published at {time}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
}

export default NewsItem
