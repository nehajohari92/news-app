import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {

    const {tittle,desc,srcImage,img}= this.props;
    return (
        <div className="card my-3 mx-3" style={{width :'20rem'}}>
        <img src={srcImage?srcImage:"https://techcrunch.com/wp-content/uploads/2023/10/induced-ai.jpg?resize=1200,900"}
         className="card-img-top" alt="..."/>
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
