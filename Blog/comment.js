import React, { Component } from 'react';

class CommentSection extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p><strong>{comment.name}</strong> says:</p>
            <p>{comment.text}</p>
            <p>at {comment.timestamp}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentSection;
