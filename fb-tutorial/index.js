import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './app';

const data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <CommentBox url="//localhost:3001/api/comments" pollInterval={2000} />,
  document.getElementById('main')
);