import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    const { title, text, publicationDate } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>Published on: {publicationDate}</p>
      </div>
    );
  }
}

export default BlogPost;
