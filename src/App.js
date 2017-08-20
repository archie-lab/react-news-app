import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import AddArticle from './components/AddArticle';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {news: NEWS};
    this.onAddArticle = this.onAddArticle.bind(this);
  }

  onAddArticle (article) {
    this.setState((prevState) => {
      news: prevState.news.concat(article);
    });
  }

  render () {
    return (
      <div className="app">
        <h3>News</h3>
        <AddArticle onAddArticle={this.onAddArticle} />
        <News data={this.state.news} />
      </div>
    );
  }
}

const NEWS = [
  {
    author: 'author1',
    title: 'title1',
    text: 'text1'
  },
  {
    author: 'author2',
    title: 'title2',
    text: 'text2'
  },
  {
    author: 'author3',
    title: 'title3',
    text: 'text3'
  }
];

export default App;
