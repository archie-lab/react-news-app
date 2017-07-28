import React, {Component} from 'react';
import Article from "./Article";
import PropTypes from "prop-types";

class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    let newsTemplate;
    if (data && data.length > 0) {
      newsTemplate = data.map((item, index) => (
          <Article data={item} key={index} onMoreClick={this.onMoreClick} onAddArticle={this.onAddArticle}/>
      ));
    } else {
      newsTemplate = <p>No news...</p>;
    }

    return (
        <div className="news">
          {newsTemplate}
          <strong className={'news-count ' + (data.length > 0 ? '' : 'none')}>Total news: {data.length}</strong>
        </div>
    );
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired
};

export default News;