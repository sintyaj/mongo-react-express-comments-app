/**
 * Created by sergey-raichman on 18/03/2017.
 */
import React  from 'react';
import { observer } from 'mobx-react'

import commentsStore from '../Stores/CommentsStore'
import CommentsArea from './CommentsArea/CommentsArea'
import NewComponentArea from './NewCommentArea/NewCommentArea'

import '../Styles/app.css'

@observer
class CommentsApp extends React.Component {

    constructor(props) {
        super(props);
        commentsStore.getComments();
    }

    render() {
        return (
            <div className="comments-section">
                <NewComponentArea addNewComment={commentsStore.addComment.bind(commentsStore)}/>
                <CommentsArea
                    addComment={commentsStore.addComment.bind(commentsStore)}
                    filterComments={commentsStore.filterComments.bind(commentsStore)}
                    comments={commentsStore.shownComments}/>
            </div>
        )
    }
}

export default CommentsApp;