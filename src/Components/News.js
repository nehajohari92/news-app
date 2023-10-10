import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Sipnner from "./Sipnner";
import PropTypes from "prop-types";

export class News extends Component {
  static propType = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  static propDefault = {
    category: "general",
    pageSize: 5,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async fetchUrl() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=bf161f63c18d4e8f938b396a9aceef71&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({ articles: parseData.articles, loading: false });
  }

  async componentDidMount() {
    //call after render lifecycle method...
    this.fetchUrl();
  }

  onPrevHandled = async () => {
    this.setState({ page: this.state.page - 1 });
    this.fetchUrl();
  };

  onNextHandled = async () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchUrl();
  };

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
  render() {
    return (
      <div className="container my-3 mx-3">
        <h1 className="text-center my-3">Daily News Update of {this.Capitalize(this.props.category)}</h1>
        {this.state.loading && <Sipnner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    key={element.url}
                    tittle={element.title ? element.title.slice(0, 50) : ""}
                    desc={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    srcImage={element.urlToImage}
                    img={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.onPrevHandled}
            className="btn btn-primary"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.onNextHandled}
            className="btn btn-primary"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
