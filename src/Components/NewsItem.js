import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {

    const {tittle,desc,srcImage,img}= this.props;
    return (
        <div className="card my-3 mx-3" style={{width :'20rem'}}>
        <img src={srcImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{tittle}...</h5>
          <p className="card-text">{desc}...</p>
          <a href={img} className="btn btn-primary btn-sm">Read More..</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
