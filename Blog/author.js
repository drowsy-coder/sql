import React, { Component } from 'react';

class AuthorInfo extends Component {
  render() {
    const { name, bio, socialMediaLinks } = this.props;
    return (
      <div>
        <h3>About the Author</h3>
        <p>{name}</p>
        <p>{bio}</p>
        <ul>
          {socialMediaLinks.map((link, index) => (
            <li key={index}><a href={link.url}>{link.platform}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;
