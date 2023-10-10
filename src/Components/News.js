import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Sipnner from "./Sipnner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      totalResult: 0,
    };
  }

  async fetchUrl() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=bf161f63c18d4e8f938b396a9aceef71&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: parseData.articles,
      totalResult: parseData.length,
    });
  }

  async componentDidMount() {
    //call after render lifecycle method...
    this.fetchUrl();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=bf161f63c18d4e8f938b396a9aceef71&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResult: parseData.totalResult,
    });
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    return (
      <>
        <h1 className="text-center my-3">
          Daily News Update of {this.Capitalize(this.props.category)}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Sipnner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
