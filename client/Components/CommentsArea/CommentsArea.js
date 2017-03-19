/**
 * Created by sergey-raichman on 18/03/2017.
 */
import React from 'react'

const Comment = (props) => {
    return (
        <li className="comment-item">
            <img className="gravatar-image" src={`https://www.gravatar.com/avatar/${props.comment.gravatar}`}/>
            <div className="comment-detail">
                <label>{props.comment.email}</label>
                <span>{props.comment.commentText}</span>
            </div>
        </li>
    )
};

function renderComments(comments = []) {
    let commentsList = comments.map((comment) => {
        return <Comment comment={comment}/>
    });

    return (
        <ul className="comments-list">
            {commentsList}
        </ul>
    )
}

class CommentsArea extends React.Component {

    filterComments() {
        let term = this.refs.filter.value;
        this.props.filterComments(term);
    }

    render() {
        return (
            <div className="comments-area">
                <input ref="filter"
                       className="filter-input"
                       type="text"
                       defaultValue=""
                       onChange={this.filterComments.bind(this)}
                       placeholder="Filter"/>
                {renderComments(this.props.comments)}
            </div>
        )
    }
}

export default CommentsArea;