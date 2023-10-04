import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state={ 
            articles : [],
            page:1
        }
    }

    async componentDidMount(){
        //call after render lifecycle method...
        let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=bf161f63c18d4e8f938b396a9aceef71&page=1";
        let data= await fetch(url);
        let parseData=  await data.json();

        this.setState({articles : parseData.articles});

    }

    onPrevHandled= async ()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=bf161f63c18d4e8f938b396a9aceef71&page=${this.state.page-1}`;
        let data= await fetch(url);
        let parseData=  await data.json();

        this.setState({articles : parseData.articles,
            page : this.state.page-1});
    
    }

    onNextHandled= async ()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=bf161f63c18d4e8f938b396a9aceef71&page=${this.state.page+1}`;
        let data= await fetch(url);
        let parseData=  await data.json();

        this.setState({articles : parseData.articles,
            page : this.state.page+1});

    }
  render() {
    return (
      <div className='container my-3 mx-3'>
        <div className='row'>
            {this.state.articles.map((element)=>{ 
               return <div className='col-md-4'>
                    <NewsItem key={element.url} tittle={element.title?element.title.slice(0,50):""} desc={element.description?element.description.slice(0,88):""} srcImage={element.urlToImage} img={element.url}/>
                </div>
            })}
        </div>

        <div className='container d-flex justify-content-between my-3'>
        <button type="button" disabled={this.state.page<=1} onClick={this.onPrevHandled} className="btn btn-primary">&larr; Previous</button>
        <button type="button" onClick={this.onNextHandled} className="btn btn-primary">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News 