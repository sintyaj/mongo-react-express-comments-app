/**
 * Created by sergey-raichman on 18/03/2017.
 */
import React from 'react'

class NewCommentArea extends React.Component{

    addNewComment() {
        let newComment = {
            email: this.refs.email.value,
            commentText: this.refs.commentText.value
        };

        this.props.addNewComment(newComment);
    }

    render() {
        return (
            <div className="new-message-area">
                <input ref="email" className="user-email full-width" defaultValue="" placeholder="john@doe.com"/>
                <textarea ref="commentText" className="comment-text full-width"></textarea>
                <input className="submit-button" type="button" value="Submit" onClick={this.addNewComment.bind(this)}/>
            </div>
        )
    }
}

export default NewCommentArea;