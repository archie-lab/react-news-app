import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddArticle extends Component {
  constructor (props) {
    super(props);
    this.state = {author: '', title: '', text: '', checkrule: false};
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onCheckRuleChange = this.onCheckRuleChange.bind(this);
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
  }

  onAuthorChange (e) {
    this.setState({author: e.target.value});
  }

  onTitleChange (e) {
    this.setState({title: e.target.value});
  }

  onTextChange (e) {
    this.setState({text: e.target.value});
  }

  onButtonClickHandler () {
    this.props.onAddArticle({
      author: this.state.author,
      title: this.state.title,
      text: this.state.text
    });

    this.setState({author: '', title: '', text: '', checkrule: false});
  }

  onCheckRuleChange (e) {
    this.setState({checkrule: e.target.checked});
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this.refs.author).focus();
  }

  render () {
    const isFormValid = this.state.checkrule && !!this.state.author.trim() && !!this.state.title.trim() &&
      !!this.state.text.trim();
    return (
      <form className="add-article-form">
        <input className="add-article-author"
               type="text"
               placeholder="Author"
          // defaultValue={this.state.author}
               value={this.state.author}
               onChange={this.onAuthorChange}
               ref="author" />
        <input
          className="add-article-title"
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChange}
          ref="title" />
        <textarea
          className="add-article-text"
          placeholder="Text"
          value={this.state.text}
          onChange={this.onTextChange}
          ref="text" />
        <label className="add-article-checkrule">
          <input type="checkbox"
                 checked={this.state.checkrule}
                 ref="checkrule"
                 onChange={this.onCheckRuleChange} />Agree with rules
        </label>
        <button
          className="add-article-button"
          ref="submit"
          onClick={this.onButtonClickHandler}
          disabled={!isFormValid}>Add article
        </button>
      </form>
    );
  }
}

export default AddArticle;
