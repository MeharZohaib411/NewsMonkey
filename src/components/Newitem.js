import React, { Component } from "react";

export class Newitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date } = this.props;
    return (
      <div className="card">
        <img
          src={
            !imageurl
              ? "https://c.ndtvimg.com/2023-06/bncvd4e8_comedian_625x300_14_June_23.jpg"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title} 
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more..
          </a>
        </div>
      </div>
    );
  }
}

export default Newitem;
