import React from 'react';
import marked from 'marked';

const CommentBox = React.createClass({
  getInitialState() {
      return {
          data: []
      };
  },

  loadCommentsFromServer() {
      fetch(this.props.url)
        .then(res => res.json())
        .then(data => {
            this.setState({data})
        })
        .catch((xhr, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
  },

  componentDidMount() {
      this.loadCommentsFromServer();
      //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    console.log(this.state.data);
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});


const CommentList = React.createClass({
    render() {
        const commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});


const Comment = React.createClass({
    rawMarkup() {
        return ({
            __html: marked(this.props.children.toString())
        })
    },

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    { this.props.author }
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});


const CommentForm = React.createClass({
    getInitialState: () => ({ author: '', text: ''}),

    handleAuthorChange(e) {
        this.setState({
            author: e.target.value
        });
    },

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    },

    handleSubmit(e) {
        e.preventDefault();

        let author = this.state.author.trim();
        let text = this.state.text.trim();

        if (!text || !author) {
            return;
        }

        this.setState(this.getInitialState());
    },

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <hr />
                <input type="text" placeholder="Your Name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange} />
                <input type="text" placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange} />
                <input type="submit" value="Post"/>
            </form>
        );
    }
});

const test = React.createClass({});

export default CommentBox;