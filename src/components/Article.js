import React, {Component} from "react";
import PropTypes from "prop-types";

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {visible: false};
    this.showText = this.showText.bind(this);
  }

  // state = {visible: false};

  showText(e){
    e.preventDefault();
    this.setState({visible: true});
  }

  render() {
    const data = this.props.data;

    return (
        <div className="article">
          <p className="article-author">{data.author}:</p>
          <p className="article-title">{data.title}</p>
          <a href="#"
             className={"article-more " + (this.state.visible ? "none" : "")}
             onClick={this.showText}>More...
          </a>
          <p className={"article-text " + (this.state.visible ? "" : "none")}>{data.text}</p>
        </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired, // try to remove 'author' from one of the news array
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
};

export default Article;