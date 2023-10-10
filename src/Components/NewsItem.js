import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { tittle, desc, srcImage, img, author, date, source } = this.props;
    return (
      <div className="card my-3 mx-3">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            srcImage
              ? srcImage
              : "https://techcrunch.com/wp-content/uploads/2023/10/induced-ai.jpg?resize=1200,900"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{tittle}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            <small className="text-body-secondary text-left">
              by {author ? author : "Unknow"} on {new Date(date).getDate}
            </small>
          </p>
          <a href={img} className="btn btn-primary btn-sm">
            Read More..
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
