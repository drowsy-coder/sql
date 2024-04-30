import React, { Component } from 'react';
import BlogPost from './post';
import CommentSection from './comment';
import AuthorInfo from './author';

class App extends Component {
  render() {
    const blogPost = {
      title: "Sample Blog Post",
      text: "This is the content of the blog post.",
      publicationDate: "October 1, 2023"
    };

    const comments = [
      { name: "John Doe", text: "Great post!", timestamp: "October 2, 2023, 10:00 AM" },
      { name: "Jane Smith", text: "Thanks for the insights.", timestamp: "October 2, 2023, 12:45 PM" }
    ];

    const authorInfo = {
      name: "Alex Johnson",
      bio: "Alex is a passionate blogger and developer.",
      socialMediaLinks: [
        { platform: "Twitter", url: "https://twitter.com/alexjohnson" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/alexjohnson" }
      ]
    };

    return (
      <div>
        <BlogPost {...blogPost} />
        <CommentSection comments={comments} />
        <AuthorInfo {...authorInfo} />
      </div>
    );
  }
}

export default App;
